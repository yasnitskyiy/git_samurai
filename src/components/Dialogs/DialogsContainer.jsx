import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../Redux/messagesReduser";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    };

    let onMessageChange = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text));
    };

    let state = props.store.getState().messagesPages;

    return (
        <Dialogs updateNewMessageText={onMessageChange}
                 addMessage={addMessage}
                 messages={state.messages}
                 dialogs={state.dialogs}
                 newMessageText={state.newMessageText}
        />
    );
}

export default DialogsContainer;