import classes from "./Conversation.module.css";
import Dialog from "./Dialog/Dialog";

const Conversation = () => {
  return (
    <div className={classes.conversation}>
      <Dialog name="Dimych" id="1" />
      <Dialog name="Sveta" id="2" />
      <Dialog name="Viktor" id="3" />
      <Dialog name="Tanya" id="4" />
      <Dialog name="Luciano" id="5" />
      <Dialog name="Daniella" id="6" />
    </div>
  );
}

export default Conversation;