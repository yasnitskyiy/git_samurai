const Header = () => {
    return(
        <header className={'grid-item header'}>
            <div className={'header-nav'}>
                <a href="https://www.google.com.ua/" className={'header-logo'}>
                    <h1>MY SOCIAL NETWORK</h1>
                </a>
                <ul>
                    <li><a href="#s">Profile</a></li>
                    <li><a href="#s">Messages</a></li>
                    <li><a href="#s">News</a></li>
                    <li><a href="#s">Music</a></li>
                    <li><a href="#s">Settings</a></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
