const { Router } = require("express");

const db = require("../connection");
const addBids = (req, res) => {
  console.log(req.body);
  const postData = req.body;

  db.query(
    "INSERT INTO bids (date,time, project_title, email, url, proposals_count, submitted_by, verified, response, hired, account, project_description, skills_required, submitted_bid_description, price, fixed, remarks, total_connects_count,user_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?,?)",
    [
      postData.date,
      postData.time,
      postData.project_title,
      postData.email,
      postData.url,
      postData.proposals_count,
      postData.submitted_by,
      postData.verified,
      postData.response,
      postData.hired,
      postData.account,
      postData.project_description,
      postData.skills_required,
      postData.submitted_bid_description,
      postData.price,
      postData.fixed,
      postData.remarks,
      postData.total_connects_count,
      postData.user_id,
    ],
    (err, results) => {
      if (err) {
        console.error("Error creating item: " + err);
        res.status(500).send("Error creating item" + err);
        return;
      }
      res.status(201).json("create bids successfully");
    }
  );
};

const getBids = (req, res) => {
  const perPage = parseInt(req.query.perPage) || 10;
  const page = parseInt(req.query.page) || 1; // Get the page number from the request, default to page 1 if not provided.

  const order = req.query.order;
  const orderBy = req.query.orderBy;

  const offset = (page - 1) * perPage; // Calculate the offset for the SQL query.

  db.query("SELECT COUNT(*) AS total FROM bids", (err, countResult) => {
    if (err) {
      console.error("Error counting bids: " + err);
      res.status(500).send("Error counting bids");
      return;
    }

    const totalItems = countResult[0].total;
    let query = "SELECT * FROM bids ORDER BY id DESC LIMIT ? OFFSET ?";
    if (order) {
      query = `SELECT * FROM bids ORDER BY ${order} ${orderBy} LIMIT ? OFFSET ?`;
    }
    db.query(query, [perPage, offset], (err, results) => {
      if (err) {
        console.error("Error reading bids: " + err);
        res.status(500).send("Error reading bids");
        return;
      }

      if (results.length === 0) {
        res.status(200).json({
          message: "Item not found",
          data: {
            items: [],
            totalItems: 0,
            totalPages: 0,
            currentPage: page,
          },
        });
        return;
      }

      const totalPages = Math.ceil(totalItems / perPage);

      res.status(200).json({
        data: {
          items: results,
          totalItems,
          totalPages,
          currentPage: page,
          perPage: results.length,
        },
        message: "Records fetched successfully",
      });
    });
  });
};

const getBidsByUserId = (req, res) => {
  console.log("verifyToken", req.body);
  const { id } = req.params;
  const perPage = parseInt(req.query.perPage) || 5;
  const page = parseInt(req.query.page) || 1; // Get the page number from the request, default to page 1 if not provided.
  const offset = (page - 1) * perPage; // Calculate the offset for the SQL query.

  const order = req.query.order;
  const orderBy = req.query.orderBy;

  let query =
    "SELECT * FROM bids WHERE user_id = ? ORDER BY id DESC LIMIT ? OFFSET ?";
  if (order) {
    query = `SELECT * FROM bids WHERE user_id = ? ORDER BY ${order} ${orderBy} LIMIT ? OFFSET ?`;
  }
  db.query(
    "SELECT COUNT(*) AS total FROM bids WHERE user_id = ?",
    [id],
    (err, countResult) => {
      if (err) {
        console.error("Error counting bids: " + err);
        res.status(500).send("Error counting bids");
        return;
      }

      const totalItems = countResult[0].total;

      // Fetch the user's is_admin information
      db.query(
        "SELECT * FROM users WHERE id = ?",
        [id],
        (err, userResult) => {
          if (err) {
            console.error("Error fetching is_admin information: " + err);
            res.status(500).send("Error fetching user information");
            return;
          }

          const is_admin = userResult[0]?.is_admin;

          db.query(query, [id, perPage, offset], (err, results) => {
            if (err) {
              console.error("Error retrieving item: " + err);
              res.status(500).send("Error retrieving item");
              return;
            }

            if (results.length === 0) {
              res.status(200).json({
                message: "Item not found",
                data: {
                  items: [],
                  totalItems: 0,
                  totalPages: 0,
                  currentPage: page,
                },
              });
              return;
            }

            const totalPages = Math.ceil(totalItems / perPage);

            res.status(200).json({
              data: {
                items: results,
                totalItems,
                totalPages,
                currentPage: page,
                perPage: results.length,
                is_admin: is_admin, // Include is_admin information in the response
              },
              message: "Records fetched successfully",
            });
          });
        }
      );
    }
  );
};

const updateBid = (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  console.log("Received updatedData:", updatedData);
  db.query(
    "UPDATE bids SET date = ?, time = ?, project_title = ?, email = ?, url = ?, proposals_count = ?, submitted_by = ?, verified = ?, response = ?, hired = ?, account = ?, project_description = ?, skills_required = ?, submitted_bid_description = ?, price = ?, fixed = ?, remarks = ?, total_connects_count = ? WHERE id = ?",

    [
      new Date(updatedData.date),
      updatedData.time,
      updatedData.project_title,
      updatedData.email,
      updatedData.url,
      updatedData.proposals_count,
      updatedData.submitted_by,
      updatedData.verified,
      updatedData.response,
      updatedData.hired,
      updatedData.account,
      updatedData.project_description,
      updatedData.skills_required,
      updatedData.submitted_bid_description,
      updatedData.price,
      updatedData.fixed,
      updatedData.remarks,
      updatedData.total_connects_count,
      id,
    ],
    (err, results) => {
      if (err) {
        console.error("Error updating item: " + err);
        res.status(500).send("Error updating item");
        return;
      }
      res.json({ id, ...updatedData });
    }
  );
};

// Delete an item
const deleteBid = (req, res) => {
  const { id } = req.params;

  // Check if the user is an admin (modify this logic based on your actual user authentication)

  // User is an admin, proceed with the item deletion
  db.query("DELETE FROM bids WHERE id = ?", [id], (err, results) => {
    if (err) {
      console.error("Error deleting bids: " + err);
      res.status(500).send("Error deleting item");
      return;
    }
    res.json({ message: "Bid deleted" });
  });
};

const shareBid = (req, res) => {
  const id = req.params.id;

  // Query the database to retrieve the bid associated with the identifier
  db.query("SELECT * FROM bids WHERE id = ?", [id], (err, result) => {
    if (err) {
      console.error("Error retrieving bid: " + err);
      res.status(500).send("Error retrieving bid" + err);
      return;
    }

    if (result.length === 0) {
      // Handle the case where the bid with the given identifier does not exist.
      res.status(404).send("Bid not found");
      return;
    }

    // Render a view to display the bid's details or return the bid data in the response.
    res.json(result[0]);
  });
};
module.exports = {
  addBids,
  getBids,
  getBidsByUserId,
  updateBid,
  deleteBid,
  shareBid,
};
