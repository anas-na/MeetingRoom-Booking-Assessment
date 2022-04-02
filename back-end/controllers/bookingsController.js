const express = require("express");

const bookings = express.Router();

const { getAllBookings } = require('../queries/bookings.js')

bookings.get("/", async (req, res) => {
    res.json(await getAllBookings());
  });


module.exports = bookings;
