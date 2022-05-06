import classes from "./ProfileInfo.module.css";
import image from "./avatar.jpg";

const ProfileInfo = (props) => {
    return (
        <div className={classes.profile}>
            <div className={classes.avatar}>
                <img src={image} alt="img"/>
            </div>
            <div className={classes.userInfo}>
                <h1>{props.name}</h1>
                <ul>
                    <li><h4>Location:</h4> {props.location}</li>
                    <li><h4>About:</h4> {props.about}</li>
                </ul>
            </div>
        </div>
    );
}

export  default ProfileInfo;
