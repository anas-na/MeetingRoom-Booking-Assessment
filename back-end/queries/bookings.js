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

  const getRoomBookings = async (meetingroom_id) => {
    try {
      const allRoomBookings = await db.any("SELECT * FROM bookings WHERE meetingroom_id = $1 AND start_date >= NOW()", meetingroom_id);
      console.log(allRoomBookings);
      return allRoomBookings;
    } catch (error) {
      console.log(error);
    }
  };

module.exports = { getAllBookings, getRoomBookings }