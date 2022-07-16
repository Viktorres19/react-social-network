import Aside from "./Aside";
import Content from "./Content";
import classes from './Main.module.css';

const Main = () => {
  return (
    <main className={classes.main}>
      <Aside />
      <Content />
    </main>
  );
}

export default Main;