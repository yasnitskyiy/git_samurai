import classes from "./SendForm.module.css"
import {useRef} from "react";

const SendForm = (props) => {

    let newPostElement = useRef();
    let addPost = () => {
        if(props.where === "dialogs") {
            props.addPost(newPostElement.current.value);
            newPostElement.current.value = '';
        }
        else{
            alert(newPostElement.current.value + " PROFILE") ;
        }
    };

    let onPostChange = () => {
        props.onPostChange(newPostElement.current.value);
    };

    return (
        <div className={classes.sendForm}>
            <textarea ref={newPostElement} className={classes.textField} onChange={onPostChange} value={props.newText}/>
            <button className={classes.btnSubmit} onClick={ addPost } >SEND</button>
        </div>
    );
}

export default SendForm;