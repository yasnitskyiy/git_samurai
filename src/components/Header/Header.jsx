import classes from './Header.module.css'

const Header = () => {
    return(
        <header className={`gridItem ${classes.header}`}>
            <div className={classes.headerNav}>
                <a href="/profile">
                    <h1>MY SOCIAL NETWORK</h1>
                </a>
                <ul>
                    <li><a href="/main">Profile</a></li>
                    <li><a href="/dialogs">Messages</a></li>
                    <li><a href="/news">News</a></li>
                    <li><a href="/music">Music</a></li>
                    <li><a href="/settings">Settings</a></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
