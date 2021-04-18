import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import DashboardNavbar from "./components/Admin/DashboardNavbar/DashboardNavbar";
import AddService from "./components/Admin/AddService/AddService";
import Login from "./components/Login/Login";
import MakeAdmin from "./components/Admin/MakeAdmin/MakeAdmin";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { createContext, useState } from "react";
import Review from "./components/UserDashboard/Review/Review";
import BookList from "./components/UserDashboard/BookList/BookList";
import Book from "./components/UserDashboard/Book/Book";
import ManageOrders from "./components/Admin/ManageOrders/ManageOrders";
import ManageServices from "./components/Admin/ManageServices/ManageServices";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  console.log(loggedInUser);
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/admin/orders">
            <DashboardNavbar />
            <ManageOrders />
          </PrivateRoute>
          <PrivateRoute path="/admin/addServices">
            <DashboardNavbar />
            <AddService />
          </PrivateRoute>
          <PrivateRoute path="/admin/makeAdmin">
            <DashboardNavbar />
            <MakeAdmin />
          </PrivateRoute>
          <PrivateRoute path="/admin/manage">
            <DashboardNavbar />
            <ManageServices />
          </PrivateRoute>
          <PrivateRoute exact path="/book">
            <DashboardNavbar />
            <Book />
          </PrivateRoute>
          <PrivateRoute path="/book/:id">
            <DashboardNavbar />
            <Book />
          </PrivateRoute>
          <PrivateRoute path="/bookList">
            <DashboardNavbar />
            <BookList />
          </PrivateRoute>
          <PrivateRoute path="/review">
            <DashboardNavbar />
            <Review />
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
