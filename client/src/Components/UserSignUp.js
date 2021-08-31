import { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Context } from '../Context';
import UserForm from './UserForm';

const UserSignUp = () => {

    let history = useHistory();
    const { data } = useContext(Context);

    const [ userValues, setUserValues ] = useState({
        firstName: '',
        lastName: '',
        emailAddress: '',
        password: '',
        errors: []
    });

    const { 
        firstName,
        lastName,
        emailAddress,
        password,
        errors 
    } = allValues;

    const change = (event) => {
        setUserValues( prevValues => ({ 
            ...prevValues, 
            [event.target.name]: event.target.value 
        }));
    };
    
    const submit = (event) => {
        event.preventDefault();
        history.push('/');
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
                                value={firstName} onChange={change} />
                            
                            <label htmlFor="lastName">Last Name</label>
                            <input id="lastName" name="lastName" type="text"
                                value={lastName} onChange={change} />
                            
                            <label htmlFor="emailAddress">Email Address</label>
                            <input id="emailAddress" name="emailAddress" type="email"
                                value={emailAddress} onChange={change} />
                            
                            <label htmlFor="password">Password</label>
                            <input id="password" name="password" type="password"
                                value={password} onChange={change} />
                        </>
                    )} />
                <p>Already have a user account? Click here to <Link to="/signin">sign in</Link>!</p>
            </div>
        </main>
    );
};

export default UserSignUp;
