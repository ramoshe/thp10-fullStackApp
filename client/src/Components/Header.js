import { Link } from 'react-router-dom';

const Header = () => {
    const authenticatedUser = null;
    return (
        <header>
            <div className="wrap header--flex">
                <h1 className="header--logo"><Link to="/">Courses</Link></h1>
                <nav>
                    {authenticatedUser ? 
                        <ul className="header--signedin">
                            <li>Welcome, {authenticatedUser.name}!</li>
                            <li><Link to="sign-out.html">Sign Out</Link></li> 
                        </ul> 
                        : 
                        <ul className="header--signedout">
                            <li><Link to="/signup">Sign Up</Link></li>
                            <li><Link to="/signin">Sign In</Link></li>
                        </ul>
                    }
                </nav>
            </div>
        </header>
    );
};

export default Header;