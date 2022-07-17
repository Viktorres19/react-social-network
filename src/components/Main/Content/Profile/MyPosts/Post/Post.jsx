import classes from './Post.module.css';

const Post = (props) => {
  return (
    <div className={classes.post}>{props.name} {props.age}</div>
  );
}

export default Post;
