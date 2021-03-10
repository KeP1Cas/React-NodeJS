import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

import './StyleComp.css'

function NavBar() {
    const history = useHistory()
    const auth = useContext(AuthContext)

    const logoutHandler = (event) => {
        event.preventDefault()
        auth.logout()
        history.push('/')
    }
    
  return (
    <div>
      <nav>
        <div className="nav-wrapper blue darken-1">
          <span className="brand-logo">
            Сокращение Ссылок
          </span>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <NavLink to="/create">Создать</NavLink>
            </li>
            <li>
              <NavLink to="/links">Ссылки</NavLink>
            </li>
            <li>
              <a href="/" onClick={logoutHandler}>Выйти</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
