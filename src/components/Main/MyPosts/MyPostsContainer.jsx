// import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../Redux/profileReduser';
import MyPosts from "./MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profileReduser";

const MyPostsContainer = (props) => {
    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };

    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text));
    };

    let state = props.store.getState().profilePages;

    return (
        <MyPosts posts={state.posts}
                 addPost={addPost}
                 updateNewPostText={onPostChange}
                 newPostText={state.newPostText}
        />
    );
}

export default MyPostsContainer;
