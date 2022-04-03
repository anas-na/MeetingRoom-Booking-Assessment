const db = require("../database/dbConfig");

const getAllBookings = async () => {
    try {
      const allBookings = await db.any("SELECT * FROM bookings JOIN meetingrooms ON bookings.meetingroom_id = meetingrooms.id;");
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

  const getBooking = async (id) => {
    try {
        const booking = await db.one(`SELECT * FROM bookings JOIN meetingrooms ON bookings.meetingroom_id = meetingrooms.id WHERE bookings.id = 1`, id);
        return booking;
    } catch (error) {
        console.log(error);
    }
};

const deleteBooking = async (id) => {
  try {
      const query = "DELETE FROM bookings WHERE id = $1 RETURNING *";
      const deletedBooking = await db.one(query, id);
      return deletedBooking;
  } catch (error) {
      console.log(error);
  }
};

module.exports = { getAllBookings, getRoomBookings, getBooking, deleteBooking }