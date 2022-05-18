import c from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import MessageFriend from "./Message/MessageFriend";
import {useRef} from "react";


const Dialogs = (props) => {
    let dialogsElements = props.dialogs.map( d => (<DialogItem name={d.name} id={d.id}/>) )
    let messagesElements = props.messages.map( m => (m.me)? <Message msg={m.text}/> : <MessageFriend msg={m.text}/> )

    let newElement = useRef();

    let addMessage = () => {
        props.addMessage();
    };

    let onMessageChange = () => {
        props.updateNewMessageText(newElement.current.value);
    };

    return (
        <div className={c.dialogs}>

            <div className={c.dialogsItems}>
                <ul>
                    {dialogsElements}
                </ul>
            </div>

            <div className={c.messages}>
                {messagesElements}
                <div className={c.sendForm}>
                    <textarea ref={newElement} className={c.textField} value={ props.newMessageText} onChange={ onMessageChange } />
                    <button className={c.btnSubmit} onClick={addMessage}>SEND</button>
                </div>
            </div>

        </div>
    );
}

export default Dialogs;