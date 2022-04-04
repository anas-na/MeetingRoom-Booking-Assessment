import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { apiURL } from "../util/apiURL";

//Stylings
import "../Stylings/NewRoom.css";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const API = apiURL();

const NewRoom = () => {
  let history = useHistory();
  const [meetingRoom, setMeetingRoom] = useState({
    room_name: "",
    room_capacity: "",
    room_floor: ""
  });

  const addRoom = async newRoom => {
    try {
      await axios.post(`${API}/rooms`, newRoom);
      window.alert(`Room Created`);
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = e => {
    setMeetingRoom({ ...meetingRoom, [e.target.id]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    addRoom(meetingRoom);
  };
  return (
    <div className="newRoomContainer">
      <form onSubmit={handleSubmit}>
        <h1 className="newRoom">Create Room:</h1>
        <Grid
          alignItems="center"
          justify="center"
          direction="column"
          className="roomInput"
        >
          <TextField
            style={{ width: "40%" }}
            id="room_name"
            name="name"
            label="Room Name:"
            type="text"
            value={meetingRoom.room_name}
            onChange={handleInputChange}
          />

          <TextField
            style={{ width: "40%" }}
            id="room_floor"
            name="Floor"
            label="floor:"
            type="number"
            value={meetingRoom.room_floor}
            onChange={handleInputChange}
          />

          <TextField
            style={{ width: "40%" }}
            id="room_capacity"
            type="number"
            name="Capacity"
            label="Capacity:"
            value={meetingRoom.room_capacity}
            onChange={handleInputChange}
            className="roomCapacity"
          />
        </Grid>
        <Button
          variant="contained"
          color="neutral"
          type="submit"
          className="submitButton"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default NewRoom;
