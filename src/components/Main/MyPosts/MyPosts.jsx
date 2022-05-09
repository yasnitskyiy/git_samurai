import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postItems = props.state.profilePages.posts.map( post => <Post title={post.title} titleText={post.titleText}/> )

    return (
        <div>
            {postItems}
        </div>
    );
}

export default MyPosts;