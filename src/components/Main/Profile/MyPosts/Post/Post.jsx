import classes from './Post.module.css';

const Post = (props) => {
  return (
    <div>{props.name} {props.age}</div>
  );
}

export default Post;
