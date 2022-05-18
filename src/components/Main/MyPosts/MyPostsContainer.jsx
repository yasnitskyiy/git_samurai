import MyPosts from "./MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profileReduser";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return ({
        posts: state.profilePages.posts,
        newPostText: state.profilePages.newPostText,
    })
}

let mapDispatchToProps = (dispatch) => {
    return ({
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text));
        },
    })
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;