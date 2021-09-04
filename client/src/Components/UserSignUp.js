import { useContext, useState } from 'react';
import { Link, useHistory, Redirect } from 'react-router-dom';
import { Context } from '../Context';
import Form from './Form';

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
                console.log(errors);
                if (errors.length) {
                    setUserValues(prevValues => ({ ...prevValues, errors}));
                } else {
                    actions.signIn(emailAddress, password)
                        .then(() => history.push('/'));
                }
            }).catch( err => {
                console.log(err);
                return <Redirect to="/error" />;
            });
    };

    const cancel = () => {
        history.push('/');
    };

    return (
        <main>
            <div className="form--centered">
                <h2>Sign Up</h2>
                <Form
                    cancel={cancel}
                    errors={errors}
                    submit={submit}
                    submitButtonText="Sign Up"
                    elements={ () => (
                        <>
                            <label htmlFor="firstName">First Name</label>
                            <input 
                                id="firstName" 
                                name="firstName" 
                                type="text"
                                onChange={change} />
                            
                            <label htmlFor="lastName">Last Name</label>
                            <input 
                                id="lastName" 
                                name="lastName" 
                                type="text"
                                onChange={change} />
                            
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
                <p>Already have a user account? Click here to <Link to="/signin">sign in</Link>!</p>
            </div>
        </main>
    );
};

export default UserSignUp;
