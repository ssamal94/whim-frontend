import logo from "./logo.svg";
import "./App.scss";
import Login from "./views/Login";
import Register from "./views/Register";
import TopNav from "./componets/TopNav";
import Card from "./componets/Card";
import Home from "./componets/Home";
import Footer from "./componets/Footer";

function App() {
  return (
    <div className="App">
      <TopNav></TopNav>
      <Home></Home>
      <Card></Card>
      <Footer></Footer>
    </div>
  );
}

export default App;
