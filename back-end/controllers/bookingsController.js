const express = require("express");

const bookings = express.Router();

const { getAllBookings, getRoomBookings, getBooking, deleteBooking, createBooking } = require('../queries/bookings.js')

bookings.get("/", async (req, res) => {
    res.json(await getAllBookings());
  });

bookings.get('/:id', async (req, res) => {
  const { id } = req.params
  res.json(await getBooking(id));
})

bookings.post("/", async (req, res) => {
  res.json(await createBooking(req.body));
}); 

bookings.delete("/:id", async (req, res) => {
  const { id } = req.params;
  res.json(await deleteBooking(id))
});
module.exports = bookings;
