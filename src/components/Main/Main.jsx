import Aside from "./Aside/Aside";
import classes from './Main.module.css';
import Content from "./Content/Content";

const Main = () => {
  return (
    <main className={classes.main}>
      <Aside />
      <Content />
    </main>
  );
}

export default Main;