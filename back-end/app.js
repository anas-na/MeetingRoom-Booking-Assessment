const cors = require("cors");
const express = require("express");

const app = express();
const meetingRoomsController = require('./controllers/meetingRoomsController.js');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Meeting Room Bookings Data');
});
app.use('/meetingrooms', meetingRoomsController)

app.get('*', (req, res) => {
  res.status(404).send('Page Not Found!!!');
});

module.exports = app;
