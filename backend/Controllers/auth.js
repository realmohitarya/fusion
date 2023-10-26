const bcrypt = require("bcrypt"); // Make sure you have the 'bcrypt' module imported
const jwt = require("jsonwebtoken");

const db = require("../connection");
const adminRegister = (req, res) => {
  const { username, email, password } = req.body;

  // Check if the email already exists in the database
  db.query(
    "SELECT * FROM users WHERE email = ? AND is_admin = 1",
    [email],
    (err, rows) => {
      if (err) {
        console.error("Error checking email existence: " + err);
        return res
          .status(500)
          .json({ error: "Error checking email existence" });
      }

      if (rows.length > 0) {
        // A user with this email already exists
        return res.status(400).json({ message: "Email is already in use" });
      } else {
        // Hash the password using bcrypt
        bcrypt.hash(password, 10, (err, hash) => {
          if (err) {
            console.error("Error hashing password: " + err);
            return res.status(500).json({ error: "Error hashing password" });
          }

          // Insert the user into the database
          db.query(
            "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
            [username, email, hash],
            (err) => {
              if (err) {
                console.error("Error registering user: " + err);
                return res
                  .status(500)
                  .json({ error: "Error registering user" });
              }
              res.status(201).json({ message: "User registered successfully" });
            }
          );
        });
      }
    }
  );
};

const register = (req, res) => {
  const { fullname, email, password } = req.body;

  // Check if the email already exists in the database
  db.query("SELECT * FROM users WHERE email = ?", [email], (err, rows) => {
    if (err) {
      console.error("Error checking email existence: " + err);
      res.status(500).send("Error checking email existence");
      return;
    }

    if (rows.length > 0) {
      // A user with this email already exists
      res.status(400).json({ message: "Email is already in use" });
    } else {
      // Hash the password using bcrypt
      bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
          console.error("Error hashing password: " + err);
          res.status(500).send("Error registering user");
          return;
        }
        // Insert the user into the database
        db.query(
          "INSERT INTO users (fullname, email, password) VALUES (?, ?, ?)",
          [fullname, email, hash],
          (err) => {
            if (err) {
              console.error("Error registering user: " + err);
              res.status(500).send("Error registering user");
              return;
            }
            // Retrieve the inserted user's information
            db.query(
              "SELECT * FROM users WHERE email = ?",
              [email],
              (err, user) => {
                if (err) {
                  console.error("Error fetching user information: " + err);
                  res.status(500).send("Error registering user");
                  return;
                }
                res.status(201).json({
                  message: "User registered successfully",
                  user: user[0],
                });
              }
            );
          }
        );
      });
    }
  });
};
const login = (req, res) => {
  const { email, password } = req.body;

  // Retrieve the user by email from the database
  db.query("SELECT * FROM users WHERE email = ?", [email], (err, results) => {
    if (err) {
      console.error("Error retrieving user: " + err);
      res.status(500).send("Error logging in");
      return;
    }

    if (results.length === 0) {
      res.status(401).json({ message: "Invalid email or password" });
      return;
    }

    const user = results[0];

    // Compare the provided password with the hashed password
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        console.error("Error comparing passwords: " + err);
        res.status(500).send("Error logging in");
        return;
      }
      const secretKey = process.env.JWT_SECRET_KEY;
      console.log("secretKey", secretKey);
      if (isMatch) {
        // Passwords match; user is authenticated
        const payload = {
          userId: user.id,
          email: user.email,
          is_admin: user.is_admin,
        };

        // Create a JWT token
        const token = jwt.sign(payload, secretKey, { expiresIn: "1h" });
        // Check the role of the user
        if (user.is_admin === 1) {
          // Admin login
          res.json({
            message: "Admin login successful",
            user,
            authToken: token,
          });
          // You can redirect or provide admin-specific functionality here.
        } else {
          // Regular user login
          res.json({
            message: "User login successful",
            authToken: token,
            user,
          });
          // You can redirect or provide regular user-specific functionality here.
        }
      } else {
        // Passwords don't match
        res.status(401).json({ message: "Invalid email or password" });
      }
    });
  });
};

const users = (req, res) => {
  const { fullname, email, password } = req.body;
  // Check if the email already exists in the database
  db.query("SELECT * FROM users WHERE email = ?", [email], (err, rows) => {
    if (err) {
      console.error("Error checking email existence: " + err);
      res.status(500).send("Error checking email existence");
      return;
    }

    if (rows.length > 0) {
      // A user with this email already exists
      res.status(400).json({ message: "Email is already in use" });
    } else {
      // Hash the password using bcrypt
      bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
          console.error("Error hashing password: " + err);
          res.status(500).send("Error registering user");
          return;
        }
        // Insert the user into the database
        db.query(
          "INSERT INTO users (fullname, email, password) VALUES (?, ?, ?)",
          [fullname, email, hash],
          (err) => {
            if (err) {
              console.error("Error registering user: " + err);
              res.status(500).send("Error registering user");
              return;
            }
            // Retrieve the inserted user's information
            db.query(
              "SELECT * FROM users WHERE email = ?",
              [email],
              (err, user) => {
                if (err) {
                  console.error("Error fetching user information: " + err);
                  res.status(500).send("Error registering user");
                  return;
                }
                res.status(201).json({
                  message: "User registered successfully",
                  user: user[0],
                });
              }
            );
          }
        );
      });
    }
  });
};

// Make sure you have 'db' properly configured to connect to your database.

// Export the function so it can be used in your application
module.exports = { adminRegister, register, login, users };
