import classes from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import SendForm from "../Main/SendForm/SendForm";
import MessageFriend from "./Message/MessageFriend";


const Dialogs = (props) => {
    let dialogsElements = props.state.messagesPages.dialogs.map( d => (<DialogItem name={d.name} id={d.id}/>) )
    let messagesElements = props.state.messagesPages.messages.map( m => (m.me)? <Message msg={m.text}/> : <MessageFriend msg={m.text}/> )

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <ul>
                    {dialogsElements}
                </ul>
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <SendForm state={props.state}
                          updateMessageText={props.updateMessageText}
                          addMessage={props.addMessage}
                          where={'dialogs'}
                />
            </div>

        </div>
    );
}

export default Dialogs;