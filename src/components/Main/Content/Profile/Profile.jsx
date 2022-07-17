import classes from './Profile.module.css';
import Hero from "./Hero/Hero";
import MyPosts from "./MyPosts/MyPosts";
import Avatar from "./Avatar/Avatar";

const Profile = () => {
  return (
    <section className={classes.profile}>
      <Hero />
      <Avatar />
      <MyPosts />
    </section>
  );
}

export default Profile;
