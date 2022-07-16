import classes from './Content.module.css';

const Content = () => {
  return (
    <section className={classes.content}>
      <div className={classes.hero}>
        <img src="https://thumbs.dreamstime.com/b/palm-trees-silhouettes-tropical-beach-sunset-modern-vintage-colors-139094492.jpg" alt="hero"/>
      </div>
      <div>
        My posts ()
        <div>
          New post
        </div>
        <div>
          <div>post 1</div>
          <div>post 2</div>
          <div>post 3</div>
        </div>
      </div>
    </section>
  );
}

export default Content;
