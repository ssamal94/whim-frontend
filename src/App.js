import "./App.scss";
import Login from "./views/Login";
import Register from "./views/Register";
import Home from "./views/Home";
import ForgotPassword from "./views/ForgotPassword";
import UpdatePassword from "./views/UpdatePassword";
import PorductDescription from "./views/ProductDescription";
import NowPlaying from "./views/NowPlaying";
import PostHobby from "./views/PostHobby";
import PrivateRoute from "./privateRoute/index";
import SubscriptionType from "./views/SubscriptionType";
import PaymentPage from "./views/Payment";
import ConfirmSubscription from "./views/ConfirmSubscription";
import AuthorDetails from "./views/AuthorDetails";
import MyAccount from "./views/MyAccount";

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
          <Route
            path="/now_playing"
            element={
              <PrivateRoute>
                <NowPlaying />
              </PrivateRoute>
            }
          />
          <Route
            path="/post_hobby"
            element={
              <PrivateRoute>
                <PostHobby />
              </PrivateRoute>
            }
          />
          <Route
            path="/subscription"
            element={
              <PrivateRoute>
                <SubscriptionType />
              </PrivateRoute>
            }
          />
          <Route
            path="/payment"
            element={
              <PrivateRoute>
                <PaymentPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/ConfirmSubscription"
            element={
              <PrivateRoute>
                <ConfirmSubscription />
              </PrivateRoute>
            }
          />
          <Route
            path="/authorDetails"
            element={
              <PrivateRoute>
                <AuthorDetails />
              </PrivateRoute>
            }
          />
          <Route
            path="/authorDetails"
            element={
              <PrivateRoute>
                <MyAccount />
              </PrivateRoute>
            }
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
