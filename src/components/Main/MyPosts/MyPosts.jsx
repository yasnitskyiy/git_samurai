import Post from "./Post/Post";

const MyPosts = (props) => {
    let postItems = props.state.profilePages.posts.slice(0).reverse().map( post => <Post postText={post.postText}/> );

    return (
        <div>
            {postItems}
        </div>
    );
}

export default MyPosts;