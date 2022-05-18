const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts:[
        {
            id: 1,
            postText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae cum deleniti deserunt doloremque eaque et illum inventore ipsum molestias necessitatibus  perferendis praesentium provident quia, rem sit temporibus, tenetur voluptatibus?"
        },

        {
            id: 2,
            postText: "Et illum inventore ipsum molestias necessitatibus perferendis praesentium provident quia, rem sit temporibus, tenetur voluptatibus Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae cum deleniti deserunt doloremque eaque ?"
        }
    ],
    newPostText: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: state.posts[state.posts.length - 1].id + 1,
                postText: state.newPostText
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            if (state.newPostText !== '') {
                stateCopy.posts.push(newPost);
                stateCopy.newPostText = '';
            }
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default:
            console.log('EMPTY');
            return state;
    }
}

export const addPostActionCreator = () => ({
    type: ADD_POST
})

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
})

export default profileReducer;