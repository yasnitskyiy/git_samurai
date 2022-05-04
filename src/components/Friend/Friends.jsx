import classes from './Friends.module.css'

const Friends = () => {
    return(
        <nav className={`grid-item ${classes.friends}`}>
            <h3 className={classes.friendsTitle}>My Friends</h3>
            <ul className={classes.friendsList}>
                <li>Anya</li>
                <li>Vlad</li>
                <li>Oleg</li>
                <li>Vasya</li>
                <li>Sveta</li>
            </ul>
        </nav>
    );
}

export default Friends;

