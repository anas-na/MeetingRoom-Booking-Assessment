import axios from 'axios';
import { useState, useEffect } from 'react';
import { apiURL } from '../util/apiURL';
import RoomsListInfo from './RoomsListInfo'

const API = apiURL();

const MeetingRoomsList = () => {
    const [rooms, setRooms] = useState([]);

    const fetchRooms = async () => {
        try {
            const res = await axios.get(`${API}/rooms`)
            setRooms(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect (() => {
        fetchRooms()
    }, [])

    return (
        <div>
            {rooms.map((room) => {
                return <RoomsListInfo key={room.id} room={room}/>
            })}
        </div>
    )
    
}

export default MeetingRoomsList