/**
 * This component renders a message letting the
 * user know the requested page can't be found (404)
 */
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <main>
            <div className="form--centered">
                <h2>Not Found</h2>
                <p>Sorry, the requested page was not found.</p>
                <Link className="button button-secondary" to="/">Return to Course List</Link>
            </div>
        </main>
    );
};

export default NotFound;
