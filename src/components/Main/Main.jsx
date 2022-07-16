import Aside from "./Aside/Aside";
import Profile from "./Profile/Profile";
import classes from './Main.module.css';

const Main = () => {
  return (
    <main className={classes.main}>
      <Aside />
      <Profile />
    </main>
  );
}

export default Main;