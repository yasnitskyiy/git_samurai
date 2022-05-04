import classes from './Post.module.css'

const Post = (props) => {
    return(
        <div>
            <h1>{props.title}</h1>
            <h3>{props.titleText}</h3>
        </div>
    );
}
export default Post;