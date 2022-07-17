import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={classes.posts}>
      My posts ()
      <div>
        New post
      </div>
      <div>
        <Post name='Allen' age='29' />
        <Post name='Chris' age='30' />
        <Post name='Paul' age='31' />
      </div>
    </div>
  );
}

export default MyPosts;
