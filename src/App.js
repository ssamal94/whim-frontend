import "./App.scss";
import Login from "./views/Login";
import Register from "./views/Register";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import TopNav from "./componets/TopNav";
import Card from "./componets/Card";
import Home from "./componets/Home";
import Footer from "./componets/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Switch>
      </Router>
      <TopNav></TopNav>
      <Home></Home>
      <Card></Card>
      <Footer></Footer>
    </div>
  );
}

export default App;
