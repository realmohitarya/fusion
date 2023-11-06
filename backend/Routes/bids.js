const { Router } = require("express");
const route = Router();
const jwt = require("jsonwebtoken");

const bidController = require('../Controllers/bids')

const  verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const { JWT_SECRET_KEY } = process.env;
  if (!authHeader) {
    return res.status(401).json({ message: "Unauthorized: Missing token" });
  }

  const tokenParts = authHeader.split(" ");

  if (tokenParts.length !== 2 || tokenParts[0] !== "Bearer") {
    return res
      .status(401)
      .json({ message: "Unauthorized: Invalid token format" });
  }

  const token = tokenParts[1];

  jwt.verify(token, JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }

    // Token is valid, you can access the decoded information if needed
    req.user = decoded;

    next();
  });
}
route.post("/bids", verifyToken, bidController.addBids);

route.get("/bids", verifyToken, bidController.getBids);

route.get("/bids/:id", bidController.getBidsByUserId);

route.put("/bids/:id", verifyToken, bidController.updateBid);

// Delete an item
route.delete("/bids/:id", verifyToken, bidController.deleteBid);
route.delete("/delete-bids", verifyToken, bidController.deleteBids);


route.get("/sharebid/:id", bidController.shareBid);
module.exports = route;
