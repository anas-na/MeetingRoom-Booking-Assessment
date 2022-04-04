import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { apiURL } from "../util/apiURL";
import { BiBuilding } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";
import "../Stylings/RoomDetails.css";
import {MdTimer} from 'react-icons/md'

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";

import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  DateTimePicker,
} from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

const API = apiURL();
const moment = require('moment');
const RoomDetails = () => {
  let history = useHistory();

  let { id } = useParams();
  
  const [room, setRoom] = useState({});
  const [roomBookings, setRoomBookings] = useState([]);
  const [startTimeValue, setStartTimeValue] = useState();
  const [endTimeValue, setEndTimeValue] = useState();
  const [newBooking, setNewBooking ] = useState({
    meeting_name: '',
    attendees: '',
    start_date: Date.now(),
    end_date: Date.now(),
    meetingroom_id: Number(id)
  })


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
    try {
      const bookingsRes = await axios.get(`${API}/rooms/${id}/bookings`);
      setRoomBookings(bookingsRes.data)
    } catch (error) {
      console.log(error);
    }
    // setRoomBookings(roomBookings)
};

const handleStartDate = (newValue) => {
  let startTimeStamp = moment(newValue).format()
  setStartTimeValue(startTimeStamp)
  setNewBooking({...newBooking, start_date: startTimeStamp})
}
const handleEndDate = (newValue) => {
  let endTimeStamp = moment(newValue).format()
  setEndTimeValue(endTimeStamp)
  setNewBooking({...newBooking, end_date: endTimeStamp})
}


const handleInputChange = (e) => {
  setNewBooking({ ...newBooking, [e.target.id]: e.target.value });
}
const addBooking = async (newBooking) => {
  try {
    await axios.post(`${API}/bookings`, newBooking)
    history.push("/bookings")
  } catch (error) {
    console.log(error)
  }
}


const handleSubmit = (e) => {
  e.preventDefault();
  addBooking(newBooking);
};


  useEffect(() => {
    fetchRoom();
    getBookings()
}, [id]);

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
    <div>
    <form onSubmit={handleSubmit}>
            <h1 className='newRoom'>Book A Room:</h1>
      <Grid alignItems="center" justify="center" direction="column" className='roomInput'>
        
          <TextField
            style={{width: "40%"}}
            id="meeting_name"
            name="meeting_name"
            label="Meeting Name:"
            type="text"
            value={newBooking.meeting_name}
            onChange={handleInputChange}
          />
        
        
          <TextField
            style={{width: "40%"}}
            id="attendees"
            name="attendees"
            label="attendees:"
            type="number"
            value={newBooking.attendees}
            onChange={handleInputChange}
          />      
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DateTimePicker
          type='TIMESTAMP WITHOUT TIME ZONE'
          label="Start Date"
          id='start_date'
          name='start_date'
          value={startTimeValue}
          onChange={handleStartDate}
        />
        <DateTimePicker
          type='TIMESTAMP WITHOUT TIME ZONE'
          label="End Date"
          id='end_date'
          name='end_date'
          value={endTimeValue}
          onChange={handleEndDate}
        />
    </MuiPickersUtilsProvider>
      </Grid>
        <Button variant="contained" color="neutral" type="submit" className='submitButton'>
          Submit
        </Button>
    </form>
    </div>

      <div className='roomBookings'>
        {roomBookings.map((booking) => {
          let startTime = booking.start_date
          let endTime = booking.start_date
          console.log(`start:`, startTime)
          // console.log(`end:`, endTime)
            return (

                <div>
                  <div className="roomBooking">
                    <p className ='roomName'>{booking.meeting_name}</p>
                    <p className="bookingTime"><MdTimer />{moment(booking.start_date).format("LLL")}</p>
            <p className="bookingTime"><MdTimer />{moment(booking.end_date).format("LLL")}</p>
                  </div>
                </div>
            )
          console.log(booking);
        })}
      </div>
    </div>
  );
};

export default RoomDetails;
