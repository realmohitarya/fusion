const express = require("express");
const moment = require("moment");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const db = require("../connection");

const getStats = (req,res) => {
  // Continue with your database query to filter by the month
  const year = req.query.year || moment().format("YYYY");
  db.query(
    `
      SELECT
      months.month AS month,
      IFNULL(bid_count, 0) AS count
      FROM (
        SELECT 'Jan' AS month
        UNION SELECT 'Feb'
        UNION SELECT 'Mar'
        UNION SELECT 'Apr'
        UNION SELECT 'May'
        UNION SELECT 'Jun'
        UNION SELECT 'Jul'
        UNION SELECT 'Aug'
        UNION SELECT 'Sep'
        UNION SELECT 'Oct'
        UNION SELECT 'Nov'
        UNION SELECT 'Dec'
      ) AS months
      LEFT JOIN (
        SELECT
          DATE_FORMAT(date, '%b') AS month,
          COUNT(*) AS bid_count
        FROM bids
        WHERE YEAR(date) = ? -- Use a parameterized query to prevent SQL injection
        GROUP BY month
      ) AS monthly_counts
      ON months.month = monthly_counts.month;
      `,
    [year], // Pass the year parameter
    (err, results) => {
      if (err) {
        console.error("Error reading bids: " + err);
        res.status(500).send("Error reading bids");
        return;
      }

      if (results.length === 0) {
        res.status(200).json({
          message: "No items found for the specified year",
          data: {
            items: [],
          },
        });
        return;
      }

      // Calculate the total count by summing the counts for each month
      const totalBids = results.reduce((total, item) => total + item.count, 0);

      res.status(200).json({
        data: {
          items: results,
          totalBids: totalBids, // Total count of bids for the specified year
        },
        message: "Records fetched successfully for the specified year",
      });
    }
  );
};

const getStatsbyUserId = (req, res) => {
  const { id } = req.params;
  console.log("id", id);
  // Continue with your database query to filter by the month
  const year = req.query.year || moment().format("YYYY");
  db.query(
    `
      SELECT
    months.month AS month,
    IFNULL(bid_count, 0) AS count
  FROM (
    SELECT 'Jan' AS month
    UNION SELECT 'Feb'
    UNION SELECT 'Mar'
    UNION SELECT 'Apr'
    UNION SELECT 'May'
    UNION SELECT 'Jun'
    UNION SELECT 'Jul'
    UNION SELECT 'Aug'
    UNION SELECT 'Sep'
    UNION SELECT 'Oct'
    UNION SELECT 'Nov'
    UNION SELECT 'Dec'
  ) AS months
  LEFT JOIN (
    SELECT
      DATE_FORMAT(date, '%b') AS month,
      COUNT(*) AS bid_count
    FROM bids
    WHERE YEAR(date) = ${year} -- Replace '${year}' with your desired year
    AND user_id = ${id} -- Add this condition to filter by user_id
    GROUP BY month
  ) AS monthly_counts
  ON months.month = monthly_counts.month;
  
      `,
    (err, results) => {
      if (err) {
        console.error("Error reading bids: " + err);
        res.status(500).send("Error reading bids");
        return;
      }

      if (results.length === 0) {
        res.status(200).json({
          message: "No items found for the specified month",
          data: {
            items: [],
          },
        });
        return;
      }
      const totalBids = results.reduce((total, item) => total + item.count, 0);
      res.status(200).json({
        data: {
          items: results,
          totalBids: totalBids,
        },
        message: "Records fetched successfully for the specified month",
      });
    }
  );
}

module.exports = {getStats, getStatsbyUserId};
