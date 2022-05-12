import classes from "./SendForm.module.css"
import {useRef} from "react";

const SendForm = (props) => {

    let newElement = useRef();
    let add = () => {
        if(props.where === "dialogs") {
            props.addMessage();
        }
        else{
            props.addPost();
        }
    };

    let onChange = () => {
        if(props.where === "dialogs") {
            props.updateMessageText(newElement.current.value);
        }
        else{
            props.updateNewPostText(newElement.current.value);
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