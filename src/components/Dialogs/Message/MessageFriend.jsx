import classes from "./Message.module.css"

const MessageFriend = (props) => {
    return (
        <div className={classes.friendMessageWrapper}>
            <div className={classes.friendMessage}>
                <p>{props.msg}</p>
            </div>
        </div>
    );
}

export default MessageFriend;