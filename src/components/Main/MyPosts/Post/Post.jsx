import classes from './Post.module.css'

const Post = (props) => {
    return(
        <div>
            <h3>{props.title}</h3>
            <p>{props.titleText}</p>
        </div>
    );
}
export default Post;