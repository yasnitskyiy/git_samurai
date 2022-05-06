import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            <Post
                title={'My post title'}
                titleText={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
                ' Ad beatae cum deleniti deserunt doloremque eaque et illum inventore ipsum molestias necessitatibus' +
                ' perferendis praesentium provident quia, rem sit temporibus, tenetur voluptatibus?'}
            />
            <Post
                title={'Some new post'}
                titleText={'Et illum inventore ipsum molestias necessitatibus' +
                    ' perferendis praesentium provident quia, rem sit temporibus, tenetur voluptatibus Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
                    ' Ad beatae cum deleniti deserunt doloremque eaque ?'}
            />
        </div>
    );
}

export default MyPosts;