import classes from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = () => {
    return(
        <header className={classes.header}>
            <div className={classes.headerNav}>
                <NavLink to="/main">
                    <h1>MY SOCIAL NETWORK</h1>
                </NavLink>
                <ul>
                    <li><NavLink to="/main" className = { x => x.isActive ? classes.active : classes.default }>Profile</NavLink></li>
                    <li><NavLink to="/dialogs" className={ x => x.isActive ? classes.active : classes.default }>Messages</NavLink></li>
                    <li><NavLink to="/news">News</NavLink></li>
                    <li><NavLink to="/music">Music</NavLink></li>
                    <li><NavLink to="/settings">Settings</NavLink></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
