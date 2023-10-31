const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const moment = require("moment");
const app = express();
const port = process.env.PORT || 3000;
const crypto = require("crypto");
require("dotenv").config();
const router = express.Router()

const auth = require('./Routes/auth')
const bids = require('./Routes/bids')
const stats = require('./Routes/stats')

// Specify the origin you want to allow (http://localhost:4200)
const allowedOrigins = ["http://localhost:4200", "https://site1.marvelons.com"];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOptions));
app.use(express.json());
// Create a MySQL connection


//user register
app.get('/', (req,res) => {
  return res.send({data:'Hello World'})
})


//admin


app.use(auth)
app.use(bids)
app.use(stats)




app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
