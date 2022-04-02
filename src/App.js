import "./App.scss";
import Login from "./views/Login";
import Register from "./views/Register";
import Home from "./views/Home";
import ForgotPassword from "./views/ForgotPassword";
import UpdatePassword from "./views/UpdatePassword";
import PorductDescription from "./views/ProductDescription";
import NowPlaying from "./views/NowPlaying";
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
          <Route path="/forgot_password" element={<ForgotPassword />} />
          <Route
            path="/reset_password/:email/:resetToken"
            element={<UpdatePassword />}
          />
          <Route path="/product_description" element={<PorductDescription />} />
          <Route path="/now_playing" element={<NowPlaying />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
