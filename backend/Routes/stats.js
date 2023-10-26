const { Router } = require("express");
const route = Router();
require("dotenv").config();

const jwt = require("jsonwebtoken");

const statsController = require('../Controllers/stats')
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
route.get("/stats", verifyToken, statsController.getStats);

route.get("/stats/:id", verifyToken, statsController.getStatsbyUserId);

module.exports = route;
