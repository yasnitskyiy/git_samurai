const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
};

const messagesReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_MESSAGE: {
            let newMsg = {
                id: state.messages[state.messages.length - 1].id + 1,
                text: state.newMessageText,
                me: true
            }
            let stateCopy = {...state};
            stateCopy.messages = [...state.messages];
            stateCopy.newMessageText = {...state.newMessageText};

            stateCopy.messages.push(newMsg);
            stateCopy.newMessageText = '';
            return stateCopy;
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            let stateCopy = {...state};
            stateCopy.newMessageText = action.newText;
            return stateCopy;
        }
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