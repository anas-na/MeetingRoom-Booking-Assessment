import { Link } from "react-router-dom";

//Stylings
import { BiBuilding } from "react-icons/bi";
import { MdTimer } from "react-icons/md";
const moment = require("moment");

const BookingsListInfo = ({ booking }) => {
  return (
    <Link to={`/bookings/${booking.id}`} className="detailLink">
      <div className="bookingContainer">
        <ul>
          <li className="bookingName">
            {booking.meeting_name}
          </li>
          <li className="bookingCapacity">
            {booking.room_name}
          </li>
          <li>
            <MdTimer /> Start: {moment(booking.start_date).format("LLL")}
          </li>
          <li>
            <MdTimer /> End: {moment(booking.end_date).format("LLL")}
          </li>
          <li className="bookingFloor">
            <BiBuilding /> Floor: {booking.room_floor}
          </li>
        </ul>
      </div>
    </Link>
  );
};

export default BookingsListInfo;
