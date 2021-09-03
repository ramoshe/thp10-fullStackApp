import { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Context } from '../Context';
import Form from './Form';

const UserSignIn = () => {

    let history = useHistory();

    const { actions } = useContext(Context);

    const [ userValues, setUserValues ] = useState({
        firstName: '',
        lastName: '',
        emailAddress: '',
        password: '',
        errors: []
    });

    // Destructure user variables for later use
    const { //firstName, lastName, 
        emailAddress, password, errors } = userValues;

    const change = (event) => {
        setUserValues( prevValues => ({ 
            ...prevValues, 
            [event.target.name]: event.target.value 
        }));
    };

    const submit = () => {
        actions.signIn(emailAddress, password)
            .then( user => {
                if (user === null) {
                    setUserValues({ errors: [ 'Sign-in was unsuccessful' ] });
                } else {
                    history.push('/');
                    console.log(`SUCCESS! ${emailAddress} is now signed in!`);
                }
            }).catch( err => {
                console.log(err);
                // TODO add `history.push('/error')`
            });
    };

    const cancel = () => {
        history.push('/');
    }

    return (
        <main>
            <div className="form--centered">
                <h2>Sign In</h2>
                <Form
                    cancel={cancel}
                    errors={errors}
                    submit={submit}
                    submitButtonText="Sign In"
                    elements={ () => (
                        <>
                            <label htmlFor="emailAddress">Email Address</label>
                            <input 
                                id="emailAddress" 
                                name="emailAddress" 
                                type="email"
                                onChange={change} />

                            <label htmlFor="password">Password</label>
                            <input 
                                id="password" 
                                name="password" 
                                type="password"
                                onChange={change} />
                        </>
                    )} />
                <p>Don't have a user account? Click here to <Link to="/signup">sign up</Link>!</p>
                
            </div>
        </main>
    );
};

export default UserSignIn;
