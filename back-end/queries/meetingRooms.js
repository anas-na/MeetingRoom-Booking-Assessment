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

const getRoom = async (id) => {
    try {
        const room = await db.one(`SELECT * FROM meetingrooms WHERE id = $1`, id);
        return room;
    } catch (error) {
        console.log(error);
    }
};

const createRoom = async (newRoom) => {
    const { room_name, room_capacity, room_floor } = newRoom;
    try {
        const createdRoom = await db.one(
            `INSERT INTO meetingrooms(room_name, room_capacity, room_floor) VALUES($1, $2, $3) RETURNING *`,
            [room_name, room_capacity, room_floor]
        );
        return createdRoom;
    } catch (error) {
        console.log(error)
    }
}

const updateRoom = async (id, room) => {
  try {
      const { room_name, room_capacity, room_floor} = room;
      const query = "UPDATE meetingrooms SET room_name = $1, room_capacity = $2, room_floor = $3 WHERE id = $4 RETURNING *";
      const updatedRoom = await db.one(query, [room_name, room_capacity, room_floor, id]);
      return updatedRoom;
  } catch (error) {
      return error;
  }
};

const deleteRoom = async (id) => {
  try {
      const query = "DELETE FROM meetingrooms WHERE id = $1 RETURNING *";
      const deletedRoom = await db.one(query, id);
      return deletedRoom;
  } catch (error) {
      console.log(error);
  }
};


module.exports = {
  getAllRooms,
  getRoom,
  createRoom,
  updateRoom,
  deleteRoom
};
