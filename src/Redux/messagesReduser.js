const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const messagesReducer = (state, action) => {
    switch (action.type){
        case ADD_MESSAGE:
            let newMsg = {
                id: state.messages[ state.messages.length - 1].id + 1,
                text: state.newMessageText,
                me: true
            }
            state.messages.push(newMsg);
            state.newMessageText = '';
            return state;

        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;

        default:
            console.log('EMPTY');
            return state;
    }
}

export const addMessageActionCreator = () => ({
    type: ADD_MESSAGE,
})

export const updateNewMessageTextActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text,
})


export default messagesReducer;