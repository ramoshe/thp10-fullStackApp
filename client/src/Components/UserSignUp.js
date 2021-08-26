import { Link, useHistory } from 'react-router-dom';

const UserSignUp = () => {

    let history = useHistory();

    const handleSubmit = (event) =>{
        event.preventDefault();
        history.push('/');
    };

    return (
        <main>
            <div className="form--centered">
                <h2>Sign Up</h2>
                <form>
                    <label htmlFor="firstName">First Name</label>
                    <input id="firstName" name="firstName" type="text" />
                    <label htmlFor="lastName">Last Name</label>
                    <input id="lastName" name="lastName" type="text" />
                    <label htmlFor="emailAddress">Email Address</label>
                    <input id="emailAddress" name="emailAddress" type="email" />
                    <label htmlFor="password">Password</label>
                    <input id="password" name="password" type="password" />
                    <button className="button" type="submit">Sign Up</button><button className="button button-secondary" onClick={handleSubmit}>Cancel</button>
                </form>
                <p>Already have a user account? Click here to <Link to="/signin">sign in</Link>!</p>
            </div>
        </main>
    );
};

export default UserSignUp;
