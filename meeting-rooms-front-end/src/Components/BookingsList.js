import axios from 'axios';
import { useState, useEffect } from 'react';
import { apiURL } from '../util/apiURL';

import BookingsListInfo from './BookingsListInfo'

const API = apiURL();

const BookingsList = (params) => {
                    const [bookings, setBookings ] = useState([])

    const fetchBookings = async () => {
        try {
            const bookingsRes = await axios.get(`${API}/bookings`)
            setBookings(bookingsRes.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchBookings()
    }, [])
    return (
        <div>
            {bookings.map((booking) => {
                return <BookingsListInfo key={booking.id} booking={booking}/>
            })}

        </div>
    )
}

export default BookingsList;