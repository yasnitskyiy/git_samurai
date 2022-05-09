import classes from "./SendForm.module.css"
import {useRef} from "react";

const SendForm = (props) => {

    let newPostElement = useRef();
    let addPost = () => {
        if(props.where === "dialogs") {
            props.addPost(newPostElement.current.value);
            props.state.profilePages.newPostText('');
        }
        else{
            alert(newPostElement.current.value + " PROFILE") ;
        }
    };

    let onPostChange = () => {
        debugger;
        props.updateNewPostText(newPostElement.current.value);

    };

    return (
        <div className={classes.sendForm}>
            <textarea ref={newPostElement} className={classes.textField} value={props.state.profilePages.newPostText} onChange={onPostChange} />
            <button className={classes.btnSubmit} onClick={ addPost } >SEND</button>
        </div>
    );
}

export default SendForm;