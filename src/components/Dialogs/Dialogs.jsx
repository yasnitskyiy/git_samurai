import classes from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsData.map(  d => (<DialogItem name={d.name} id={d.id}/>) )
    let messagesElements = props.messagesData.map( m =>  <Message msg={m.name}/> )

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
        </div>
    );
}

export default Dialogs;