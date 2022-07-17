import classes from './Dialogs.module.css';
import Conversation from "./Conversation/Conversation";
import Messages from "./Messages/Messages";

const Dialogs = () => {
  return (
    <div className={classes.dialogs}>
      <h2 className={classes.h2}>Dialogs</h2>
      <Conversation />
      <Messages />
    </div>
  );
}

export default Dialogs;