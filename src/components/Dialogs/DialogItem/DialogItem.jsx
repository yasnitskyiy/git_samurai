import {NavLink} from "react-router-dom";
// import classes from "./DialogItem.module.css";

const DialogItem = (props) => {
    return (
        // className={classes.activeDialog}
        <li>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </li>
    );
}

export default DialogItem;