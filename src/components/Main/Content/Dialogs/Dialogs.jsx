import classes from './Dialogs.module.css'

const Dialogs = () => {
  return (
    <div className={classes.dialogs}>
      <h2 className={classes.h2}>Dialogs</h2>
      <div className={classes.convs}>
        <div className={classes.conv}>
          Dimych
        </div>
        <div className={classes.conv}>
          Sveta
        </div>
        <div className={classes.conv}>
          Viktor
        </div>
        <div className={classes.conv}>
          Tanya
        </div>
        <div className={classes.conv}>
          Luciano
        </div>
        <div className={classes.conv}>
          Daniella
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