const db = require("../database/dbConfig");

const getAllRooms = async () => {
  try {
    const allRooms = await db.any("SELECT * FROM meetingrooms");
    console.log(allRooms);
    return allRooms;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllRooms
};
