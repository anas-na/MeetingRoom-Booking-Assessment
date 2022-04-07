const db = require("../database/dbConfig");

const getAllBookings = async () => {
    try {
      const allBookings = await db.any("SELECT bookings.*, meetingrooms.room_name, meetingrooms.room_floor FROM bookings JOIN meetingrooms ON bookings.meetingroom_id = meetingrooms.id;");
      return allBookings;
    } catch (error) {
      console.log(error);
    }
  };

  const getRoomBookings = async (meetingroom_num) => {
    try {
      const allRoomBookings = await db.any("SELECT * FROM bookings WHERE meetingroom_id = $1 AND end_date >= NOW()", meetingroom_num);
      console.log(allRoomBookings);
      return allRoomBookings;
    } catch (error) {
      console.log(error);
    }
  };

  const getBooking = async (id) => {
    try {
        const booking = await db.one(`SELECT bookings.*, meetingrooms.room_name, meetingrooms.room_floor FROM bookings JOIN meetingrooms ON bookings.meetingroom_id = meetingrooms.id WHERE bookings.id = $1;`, id);
        return booking;
    } catch (error) {
        console.log(error);
    }
};

const createBooking = async (newBooking) => {
  const { meeting_name, attendees, start_date, end_date, meetingroom_id } = newBooking;
  try {
      const createdBooking = await db.one(
          `INSERT INTO bookings(meeting_name, attendees, start_date, end_date, meetingroom_id) VALUES($1, $2, $3, $4, $5) RETURNING *`,
          [meeting_name, attendees, start_date, end_date, meetingroom_id]
      );
      return createdBooking;
  } catch (error) {
      console.log(error)
  }
}

const deleteBooking = async (id) => {
  try {
      const query = "DELETE FROM bookings WHERE id = $1 RETURNING *";
      const deletedBooking = await db.one(query, id);
      return deletedBooking;
  } catch (error) {
      console.log(error);
  }
};

module.exports = { getAllBookings, getRoomBookings, getBooking, deleteBooking, createBooking }