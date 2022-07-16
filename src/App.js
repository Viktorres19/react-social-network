import classes from './App.module.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
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
