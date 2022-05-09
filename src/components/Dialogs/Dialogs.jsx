import classes from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import MessageFriend from "./Message/MessageFriend";
import SendForm from "../Main/SendForm/SendForm";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map( d => <DialogItem name={d.name} id={d.id}/> )
    let messagesElements = props.state.messages.map( m => (m.me) ? <Message msg={m.text}/> :<MessageFriend msg={m.text}/> )

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <ul>
                    {dialogsElements}
                </ul>
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
            <div className={classes.sendForm}>
                <SendForm where={'dialogs'} addPost={props.addPost}/>
            </div>
        </div>
    );
}

export default Dialogs;