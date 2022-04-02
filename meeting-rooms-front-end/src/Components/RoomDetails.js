import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { apiURL } from "../util/apiURL";
import { BiBuilding } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";
import "../Stylings/RoomDetails.css";

const API = apiURL();

const RoomDetails = () => {
  const [room, setRoom] = useState({});
  const [roomBookings, setRoomBookings] = useState([]);
  let { id } = useParams();

  const fetchRoom = async () => {
    try {
      const res = await axios.get(`${API}/rooms/${id}`);
      setRoom(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(room)
  
  const getBookings = async () => {
      let roomBookings = []
    try {
      const bookingsRes = await axios.get(`${API}/bookings`);
      const res = bookingsRes.data;
      console.log(res);
      res.map((booking) => {
        let bookingRoomId = booking.room_id
        if (bookingRoomId == id) {
         roomBookings.push(booking)
        }
      });
    } catch (error) {
      console.log(error);
    }
    setRoomBookings(roomBookings)
};

console.log(roomBookings)

  useEffect(() => {
    fetchRoom();
    getBookings()
}, [id]);



  // console.log(roomBookings)
  return (
    <div className='singleRoomContainer'>
      <div className='singleRoomInfo'>
        <p>{room.room_name}</p>
        <p>
          {" "}
          <BsPeople /> Capacity: {room.room_capacity}
        </p>
        <p>
          {" "}
          <BiBuilding /> Floor: {room.room_floor}
        </p>
      </div>

      <div className='roomBookings'>
        {roomBookings.map((booking) => {
            return (
                <div>
                    <p>{booking.meeting_name}</p>
                </div>
            )
          console.log(booking);
        })}
      </div>
    </div>
  );
};

export default RoomDetails;
