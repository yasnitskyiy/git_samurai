import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./Profile/ProfileInfo";
import SendForm from "./SendForm/SendForm";
import classes from "./Main.module.css";

const Main = (props) => {
    return(
        <div className={classes.mainBox}>
            <ProfileInfo
                name={'Yasnitskyi Yurii'}
                location={'Ukraine / Lviv'}
                about={"Learning React JS and Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
                "Ad beatae cum deleniti deserunt doloremque eaque et illum inventore ipsum molestias necessitatibus \n" +
                "perferendis praesentium provident quia, rem sit temporibus, tenetur voluptatibus?"}
            />
            <h2>Add new post</h2>
            <SendForm state={props.state} dispatch={props.dispatch} where={'main'} />
            <MyPosts state={props.state}/>
        </div>
    );
}

export default Main;