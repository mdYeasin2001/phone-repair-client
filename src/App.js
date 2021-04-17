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
          </PrivateRoute>
          <Route path="/admin/addServices">
            <DashboardNavbar />
            <AddService />
          </Route>
          <Route path="/admin/makeAdmin">
            <DashboardNavbar />
            <MakeAdmin />
          </Route>
          <Route path="/admin/manage">
            <DashboardNavbar />
          </Route>
          <Route path="/book/:id">
            <DashboardNavbar />
            <Book />
          </Route>
          <Route path="/bookList">
            <DashboardNavbar />
            <BookList />
          </Route>
          <Route path="/review">
            <DashboardNavbar />
            <Review />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
