import { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Context } from '../Context';
import { UserForm } from './UserForm';

const UserSignUp = () => {

    let history = useHistory();

    const { data, actions } = useContext(Context);

    const [ userValues, setUserValues ] = useState({
        firstName: '',
        lastName: '',
        emailAddress: '',
        password: '',
        errors: []
    });

    // Destructure user values for later use
    const { firstName, lastName, emailAddress, password, errors } = userValues;

    const change = (event) => {
        setUserValues( prevValues => ({ 
            ...prevValues, 
            [event.target.name]: event.target.value 
        }));
    };
    
    const submit = () => {
        const user = { firstName, lastName, emailAddress, password };
        data.createUser(user)
            .then( errors => {
                if (errors.length) {
                    setUserValues( { errors } );
                } else {
                    actions.signIn(emailAddress, password)
                        .then(() => history.push('/'));
                    console.log(`${firstName} ${lastName} is successfully signed up and authenticated`);
                }
            }).catch( err => {
                console.log(err);
                // TODO add an error route with `history.push('/error')`
            });
    };

    const cancel = () => {
        history.push('/');
    };

    return (
        <main>
            <div className="form--centered">
                <h2>Sign Up</h2>
                <UserForm
                    cancel={cancel}
                    errors={errors}
                    submit={submit}
                    submitButtonText="Sign Up"
                    elements={ () => (
                        <>
                            <label htmlFor="firstName">First Name</label>
                            <input id="firstName" name="firstName" type="text"
                                onChange={change} />
                            
                            <label htmlFor="lastName">Last Name</label>
                            <input id="lastName" name="lastName" type="text"
                                onChange={change} />
                            
                            <label htmlFor="emailAddress">Email Address</label>
                            <input id="emailAddress" name="emailAddress" type="email"
                                onChange={change} />
                            
                            <label htmlFor="password">Password</label>
                            <input id="password" name="password" type="password"
                                onChange={change} />
                        </>
                    )} />
                <p>Already have a user account? Click here to <Link to="/signin">sign in</Link>!</p>
            </div>
        </main>
    );
};

export default UserSignUp;
