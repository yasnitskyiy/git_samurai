import Post from "./Post/Post";
import c from "./MyPosts.module.css"
import {useRef} from "react";


const MyPosts = (props) => {

    let postItems = props.posts.slice(0).reverse().map( post => <Post postText={post.postText}/> );
    let newElement = useRef();

    let addPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        props.updateNewPostText(newElement.current.value);
    };

    return (
        <div>
            <div className={c.sendForm}>
            <textarea ref={newElement} className={c.textField} value={props.newPostText} onChange={onPostChange} />
                <button className={c.btnSubmit} onClick={ addPost } >SEND</button>
            </div>

            {postItems}
        </div>
    );
}

export default MyPosts;
