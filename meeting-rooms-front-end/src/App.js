import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./Components/NavBar";
import Index from "./pages/Index";
import ShowMeetingRoom from "./pages/ShowMeetingRoom";
import NewMeetingRoom from "./pages/NewMeetingRoom";
import RoomDetails from "./Components/RoomDetails";
import ShowBookings from "./pages/ShowBookings";
import ShowSingleBooking from "./pages/ShowSingleBooking";
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/rooms/:id" component={ShowMeetingRoom} />
          <Route exact path="/newroom" component={NewMeetingRoom} />
          <Route exact path="/bookings" component={ShowBookings} />
          <Route exact path="/bookings/:id" component={ShowSingleBooking} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
