import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = () => {
  return (
    <div className={classes.dialogs}>
      <h2 className={classes.h2}>Dialogs</h2>
      <div className={classes.convs}>
        <div className={classes.conv}>
          <NavLink to="1">Dimych</NavLink>
        </div>
        <div className={classes.conv}>
          <NavLink to="2">Sveta</NavLink>
        </div>
        <div className={classes.conv}>
          <NavLink to="3">Viktor</NavLink>
        </div>
        <div className={classes.conv}>
          <NavLink to="4">Tanya</NavLink>
        </div>
        <div className={classes.conv}>
          <NavLink to="5">Luciano</NavLink>
        </div>
        <div className={classes.conv}>
          <NavLink to="6">Daniella</NavLink>
        </div>
      </div>
      <div className={classes.messages}>
        <div className={classes.message}>
          Hello
        </div>
        <div className={classes.message}>
          Hi
        </div>
        <div className={classes.message}>
          Hi-hi
        </div>
      </div>
    </div>
  );
}

export default Dialogs;