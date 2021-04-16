import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import AdminNavbar from './components/Admin/AdminNavbar/AdminNavbar';
import AddService from './components/Admin/AddService/AddService';
import Login from './components/Login/Login';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route path="/admin/orders">
            <AdminNavbar/>
          </Route>
          <Route path="/admin/addServices">
            <AdminNavbar/>
            <AddService/>
          </Route>
          <Route path="/admin/makeAdmin">
            <AdminNavbar/>
          </Route>
          <Route path="/admin/manage">
            <AdminNavbar/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
