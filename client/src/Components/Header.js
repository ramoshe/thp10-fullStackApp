import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../Context';

const Header = () => {
    const { authenticatedUser } = useContext(Context);
    
    let authUser = '';
    if (authenticatedUser) {
        authUser = `${authenticatedUser.firstName} ${authenticatedUser.lastName}`;
    }
    
    return (
        <header>
            <div className="wrap header--flex">
                <h1 className="header--logo"><Link to="/">Courses</Link></h1>
                <nav>
                    {authenticatedUser ? 
                        <ul className="header--signedin">
                            <li>Welcome, {authUser}!</li>
                            <li><Link to="/signout">Sign Out</Link></li> 
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