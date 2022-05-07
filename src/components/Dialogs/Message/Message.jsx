import classes from "./Message.module.css"

const Message = (props) => {
    return (
        <div className={classes.myMessageWrapper}>
            <div className={classes.myMessage}>
                <p>{props.msg}</p>
            </div>
        </div>
    );
}

export default Message;