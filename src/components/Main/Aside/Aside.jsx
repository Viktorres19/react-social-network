import React from "react";
import { NavLink } from "react-router-dom";

import classes from './Aside.module.css';

const Aside = () => {
  let activeClassName = classes.active;
  return (
    <aside className={classes.aside}>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >Profile</NavLink></li>
          <li>
            <NavLink
              to="/dialogs"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >Dialogs</NavLink></li>
          <li>
            <NavLink
              to="/news"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >News</NavLink></li>
          <li>
            <NavLink
              to="/music"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >Music</NavLink></li>
          <li>
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >Settings</NavLink></li>
        </ul>
      </nav>
    </aside>
  );
}

export default Aside;