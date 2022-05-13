import classes from "./SendForm.module.css"
import {useRef} from "react";
import {
    addMessageActionCreator,
    addPostActionCreator,
    updateNewMessageTextActionCreator,
    updateNewPostTextActionCreator
} from "../../../Redux/state";

const SendForm = (props) => {

    let newElement = useRef();
    let add = () => {
        if(props.where === "dialogs") {
            props.dispatch(addMessageActionCreator());
        }
        else{
            props.dispatch(addPostActionCreator());
        }
    };

    let onChange = () => {
        if(props.where === "dialogs") {
            props.dispatch(updateNewMessageTextActionCreator(newElement.current.value));
        }
        else{
            props.dispatch(updateNewPostTextActionCreator(newElement.current.value));
        }
    };

    return (
        <div className={classes.sendForm}>
            <textarea ref={newElement} className={classes.textField} value={
                (props.where === "dialogs") ?
                    props.state.messagesPages.newMessageText:
                    props.state.profilePages.newPostText
            } onChange={onChange} />
            <button className={classes.btnSubmit} onClick={ add } >SEND</button>
        </div>
    );
}

export default SendForm;