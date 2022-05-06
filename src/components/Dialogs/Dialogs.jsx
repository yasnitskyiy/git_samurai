import classes from "./Dialogs.module.css";
import Message from "./Message/Message";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        // className={classes.activeDialog}
        <li>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </li>
    );
}

const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: "Vlad"},
        {id: 2, name: "Oleg"},
        {id: 3, name: "Polina"},
        {id: 4, name: "Ilona"},
    ]

    let messagesData = [
        {id: 1, name: "Hello world"},
        {id: 2, name: "React cool, how about continue work a bit harder?!"},
        {id: 3, name: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." +
                " Accusamus amet animi aperiam dignissimos distinctio fuga impedit" +
                " itaque, nemo odit officiis placeat quia ratione reiciendis saepe" +
                " sunt ullam ut voluptas voluptatem?"},
    ]

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <ul>
                    <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                    <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                    <DialogItem name={'Polina'} id={'3'}/>
                    <DialogItem name={'Ilona'} id={'4'}/>

                </ul>
            </div>
            <div className={classes.messages}>
                <Message msg={messagesData[0].name}/>
                <Message msg={messagesData[1].name}/>

            </div>
        </div>
    );
}

export default Dialogs;