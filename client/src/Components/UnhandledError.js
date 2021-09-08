/**
 * The component renders a message letting the user know
 * that an unexpected error has occured (500 error)
 */
import { Link } from 'react-router-dom';

const UnhandledError = () => {
    return (
        <main>
            <div className="form--centered">
                <h2>Error</h2>
                <p>Sorry, there was an internal error.</p>
                <Link className="button button-secondary" to="/">Return to Course List</Link>
            </div>
        </main>
    );
};

export default UnhandledError;
