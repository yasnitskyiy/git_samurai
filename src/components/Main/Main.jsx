import classes from './Main.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./Profile/ProfileInfo";

const Main = () => {
    return(
        <div className={classes.mainContent}>
            <ProfileInfo
                name={'Yasnitskyi Yurii'}
                city={'Ukraine/Lviv'}
                about={"Learning React JS and Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
                "Ad beatae cum deleniti deserunt doloremque eaque et illum inventore ipsum molestias necessitatibus \n" +
                "perferendis praesentium provident quia, rem sit temporibus, tenetur voluptatibus?"}
            />
            <MyPosts />
        </div>
    );
}

export default Main;