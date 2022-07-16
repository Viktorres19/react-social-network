import classes from './App.module.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";

const App = () => {
  return (
    <div className={classes.appWrapper}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
