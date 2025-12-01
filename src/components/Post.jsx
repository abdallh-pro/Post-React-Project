import classes from './Post.module.css' ;

function Post({name ,body}) {
    return (
    <div className={classes.post}>
        <h2 className={classes.name}>{name}</h2>
        <p className={classes.body}>{body}</p>
    </div>
    );
}

export default Post;