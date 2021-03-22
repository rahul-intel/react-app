import {NavLink} from 'react-router-dom';
import LoginButton from "../login/LoginButton";
import LogoutButton from "../login/LogoutButton";
import RegisterButton from "../register/RegisterButton";
import { useLocation } from 'react-router-dom';
import logo from "../images/logo.png";
import { useEffect, useState } from 'react';

function Header() {
  const [isUserLoggedin, setIsUserLoggedin] = useState(false);
  const location = useLocation();
  useEffect(()=> {
    const userData = JSON.parse(localStorage.getItem('user'));
    setIsUserLoggedin(userData !== undefined && userData !== null);
  },[location]);

  return (
    <div className="header">
      <nav className="navbar fixed-top navbar-light bg-light">
        <div className="container-fluid">
          <NavLink exact to="/" className="nav-link logo-section"><img src={logo} alt="logo" width="50"/> <span className="navbar-brand mb-0 h1 pl-3">React App Demo</span></NavLink>
          <div className="justify-content-end">
          {isUserLoggedin ? <LogoutButton></LogoutButton> : (location.pathname !== '/login' && location.pathname !== '/register') &&<div><LoginButton></LoginButton> <RegisterButton></RegisterButton></div>}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;