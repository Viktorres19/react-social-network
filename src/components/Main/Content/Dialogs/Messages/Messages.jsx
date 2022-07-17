import classes from "./Messages.module.css";
import Message from "./Message/Message";

const Messages = () => {
  return (
    <div className={classes.messages}>
      <Message message="hello!" />
      <Message message="hi!" />
      <Message message="hoy!" />
    </div>
  );
}

export default Messages;