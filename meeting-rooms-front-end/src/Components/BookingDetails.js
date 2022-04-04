import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { apiURL } from "../util/apiURL";
import {MdTimer} from 'react-icons/md'
import {BiBuilding} from 'react-icons/bi'
import Button from "@material-ui/core/Button";

import '../Stylings/BookingDetails.css'

const API = apiURL();
const moment = require('moment');


const BookingDetails = () => {
    const [booking, setBooking] = useState({});
    let history = useHistory();
    let { id } = useParams();
    const fetchBooking = async () => {
        try {
          const res = await axios.get(`${API}/bookings/${id}`);
          console.log(res.data)
          setBooking(res.data);
        } catch (error) {
          console.log(error);
        }
      };

      const cancelBooking =  async () => {
        try {
			await axios.delete(`${API}/bookings/${id}`);
		} catch (err) {
			console.log(err);
		}
      }
      const handleCancelation = () => {
          cancelBooking();
          history.push('/bookings')
      }

    useEffect(() => {
        fetchBooking();
    }, [id])
    return (
        <div className="bookingDetailsContainer">
            <h1>{booking.meeting_name}</h1>
            <br />
            <br />
            <div>
            <p className="bookingTime"><MdTimer />{moment(booking.start_date).format("LLL")}</p>
            <p className="bookingTime"><MdTimer />{moment(booking.end_date).format("LLL")}</p>
            <p><BiBuilding />  Floor: {booking.room_floor}</p>
            </div>
            <Button onClick={handleCancelation} variant="contained" color="neutral" type="submit" className='submitButton'>
          Cancel
        </Button>
        </div>
    )

}

export default BookingDetails;