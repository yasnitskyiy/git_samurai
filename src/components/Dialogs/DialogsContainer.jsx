import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../Redux/messagesReduser";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return{
        messages: state.messagesPages.messages,
        dialogs: state.messagesPages.dialogs,
        newMessageText: state.messagesPages.newMessageText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        updateNewMessageText: (text) => {
            dispatch(updateNewMessageTextActionCreator(text));
        },
        addMessage: () => {
            dispatch(addMessageActionCreator());
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;