import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainHeader.module.css";
const MainHeader = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>ReactJs</div>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/quotes">
              Guotes
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/new-quote">
              New Guote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
