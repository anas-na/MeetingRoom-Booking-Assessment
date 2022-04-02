const db = require("../database/dbConfig");

const getAllBookings = async () => {
    try {
      const allBookings = await db.any("SELECT * FROM bookings");
      console.log(allBookings);
      return allBookings;
    } catch (error) {
      console.log(error);
    }
  };

module.exports = { getAllBookings }