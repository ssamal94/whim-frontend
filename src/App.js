import "./App.scss";
import Login from "./views/Login";
import Register from "./views/Register";
import Home from "./views/Home";
import ForgotPassword from "./views/ForgotPassword";
import UpdatePassword from "./componets/UpdatePassword";
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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
