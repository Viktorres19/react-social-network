import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <img className={classes.logo} src="https://i.pinimg.com/originals/f7/f7/ea/f7f7ea4f22dfba4a84715fe328d6ab89.png" alt="logo"/>
    </header>
  );
}

export default Header;