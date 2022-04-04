const cors = require("cors");
const express = require("express");
const rooms = require("./controllers/meetingRoomsController");
const bookings = require("./controllers/bookingsController");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Meeting Room Bookings Data");
});

app.use("/rooms", rooms);
app.use("/bookings", bookings);

app.get("*", (req, res) => {
  res.status(404).send("Page Not Found!!!");
});

module.exports = app;
