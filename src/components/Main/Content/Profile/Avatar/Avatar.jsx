import classes from './Avatar.module.css';

const Avatar = () => {
  return (
    <div className={classes.avatar}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/Avatar_poe84it.png" alt="avatar"/>
      <h3 className={classes.h3}>John Lena</h3>
    </div>
  );
}

export default Avatar;
