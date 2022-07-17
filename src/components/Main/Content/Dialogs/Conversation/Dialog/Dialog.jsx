import classes from "../../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
  return (
    <div className={classes.conv}>
      <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
    </div>
  );
}

export default Dialog;