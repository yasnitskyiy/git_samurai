import ProfileInfo from "./Profile/ProfileInfo";
import classes from "./Main.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

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
            <MyPostsContainer store={props.store} />
        </div>
    );
}

export default Main;