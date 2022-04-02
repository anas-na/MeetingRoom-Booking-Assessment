import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Index from "./pages/Index";
import Show from "./pages/Show";
import RoomDetails from "./Components/RoomDetails";

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' component={Index} />
          <Route exact path='/rooms/:id' component={Show} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
