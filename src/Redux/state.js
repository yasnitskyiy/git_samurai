const ADD_POST = 'ADD-POST';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
    _state: {
        messagesPages: {
            dialogs: [
                {id: 1, name: "Vlad"},
                {id: 2, name: "Oleg"},
                {id: 3, name: "Polina"},
                {id: 4, name: "Ilona"},
            ],
            messages: [
                {id: 1, text: "Hello world", me: true},
                {id: 2, text: "React cool, how about continue work a bit harder?!", me: true},
                {id: 3, text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." +
                        " Accusamus amet animi aperiam dignissimos distinctio fuga impedit" +
                        " itaque, nemo odit officiis placeat quia ratione reiciendis saepe" +
                        " sunt ullam ut voluptas voluptatem?", me: false
                },
                {id: 4, text: "putin hu*lo and this info all knows!", me: false},
                {id: 5, text: "Totally confirm your words!!!", me: true},
                {id: 6, text: "React cool, how about continue work a bit harder?!", me: true},
            ],
            newMessageText: ''
        },
        profilePages:{
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
        }
    },
    _callSubscriber(){
        console.log('change');
    },

    getState(){
        console.log("get state work");
        return this._state;
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },

    dispatch(action){
        switch (action.type){
            case ADD_POST:
                let newPost = {
                    id: this._state.profilePages.posts[ this._state.profilePages.posts.length - 1].id + 1,
                    postText: this._state.profilePages.newPostText
                }
                if(this._state.profilePages.newPostText !== ''){
                    this._state.profilePages.posts.push(newPost);
                    this._state.profilePages.newPostText = '';
                }
                this._callSubscriber(this._state);
                break;

            case UPDATE_NEW_POST_TEXT:
                this._state.profilePages.newPostText = action.newText;
                this._callSubscriber(this._state);
                break;

            case ADD_MESSAGE:
                let newMsg = {
                    id: this._state.messagesPages.messages[ this._state.messagesPages.messages.length - 1].id + 1,
                    text: this._state.messagesPages.newMessageText,
                    me: true
                }
                this._state.messagesPages.messages.push(newMsg);
                this._state.messagesPages.newMessageText = '';
                this._callSubscriber(this._state);
                break;

            case UPDATE_NEW_MESSAGE_TEXT:
                this._state.messagesPages.newMessageText = action.newText;
                this._callSubscriber(this._state);
                break;

            default:
                console.log('BAD ACTION TYPE');
                break;
        }
    }
}

export const addPostActionCreator = () => ({
    type: ADD_POST
})

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
})

export const addMessageActionCreator = () => ({
    type: ADD_MESSAGE,
})

export const updateNewMessageTextActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text,
})



export default store;
