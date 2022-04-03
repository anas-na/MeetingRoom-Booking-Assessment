import {BiBuilding} from 'react-icons/bi'
import {BsPeople} from 'react-icons/bs'
import { Link } from 'react-router-dom'


const RoomsListInfo = ({room}) => {
    console.log(room)
    
return (
    <Link to = {`/rooms/${room.id}`} className='detailLink'>
    <div className='roomContainer'>
        <ul>
            <li className='roomName'>{room.room_name}</li>
            <li className='roomCapacity'><BsPeople />  Capacity: {room.room_capacity}</li>
            <li className='roomFloor'><BiBuilding />  Floor: {room.room_floor}</li>
        </ul>
    </div>
    </Link>
)
}

export default RoomsListInfo