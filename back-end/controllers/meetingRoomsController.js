const express = require("express");

const meetingRooms = express.Router();

const { getAllRooms } = require("../queries/meetingRooms.js");

meetingRooms.get("/", async (req, res) => {
  // const meetingRooms = await getAllRooms();
  res.json(await getAllRooms());
});

module.exports = meetingRooms;
