import classes from "./Content.module.css";
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";

const Content = () => {
  return (
    <section className={classes.content}>
      {/*<Profile />*/}
      <Dialogs />
    </section>
  );
}

export default Content;