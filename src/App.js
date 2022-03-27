import "./App.scss";
import Login from "./views/Login";
import Register from "./views/Register";
import Home from "./views/Home";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
