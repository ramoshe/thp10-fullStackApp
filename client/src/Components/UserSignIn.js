import { Link, useHistory } from 'react-router-dom';

const UserSignIn = () => {

    let history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault(); 
        history.push('/');
    };

    return (
        <main>
            <div className="form--centered">
                <h2>Sign In</h2>
                <form>
                    <label for="emailAddress">Email Address</label>
                    <input id="emailAddress" name="emailAddress" type="email" value="" />
                    <label for="password">Password</label>
                    <input id="password" name="password" type="password" value="" />
                    <button className="button" type="submit">Sign In</button><button className="button button-secondary" onClick={handleSubmit}>Cancel</button>
                </form>
                <p>Don't have a user account? Click here to <Link to="/signup">sign up</Link>!</p>
                
            </div>
        </main>
    );
};

export default UserSignIn;
