import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import About from "./About";
import Contact from "./Contact";
import Greetings from './Greetings';
import Login from './Login';
import LoginButton from "./LoginButton";

function App() {
  return (
    <div className="App container-fluid">
      <Router>
        <div className="header">
          <div className="row">
            <div className="col-md-10">
              <ul className="nav nav-pills ml-3">
                <li className="nav-item">
                  <NavLink exact to="/" className="nav-link">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact to="/about" className="nav-link">About</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact to="/contact" className="nav-link">Contact</NavLink>
                </li>
              </ul>
            </div>
            <div className="col-md-2">
              <div className="justify-content-end">
                <LoginButton></LoginButton>
                <button type="button" className="btn btn-secondary">Sign Up</button>
              </div>
            </div>
          </div>
        </div>
        <div className="Content">
          <Switch>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/">
              <Greetings></Greetings>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
