/**
 * This file sets up the Context to allow data to pass throughout
 * the app component tree using the React Context API
 */
import React, { useState } from 'react';
import Data from './Data';
import Cookies from 'js-cookie';

export const Context = React.createContext();

export const Provider = (props) => {

    const cookie = Cookies.get('authenticatedUser');

    const [ authenticatedUser, setAuthUser ] = useState(
        cookie ? JSON.parse(cookie) : null
    );

    const [ data ] = useState(new Data());

    // Method that authenticates user and persists their info in global state
    const signIn = async (emailAddress, password) => {
        const user = await data.getUser(emailAddress, password);
        if (user !== null) {
            user.password = password;
            console.log(user);
            setAuthUser(user);
            Cookies.set('authenticatedUser', JSON.stringify(user), {expires: 1});
        }
        return user;
    };

    // Method that removes authenticated user from global atate
    const signOut = () => {
        setAuthUser(null);
        Cookies.remove('authenticatedUser');
    };

    return (
        <Context.Provider value={{ 
            authenticatedUser,
            data,
            actions: { signIn, signOut }
        }}>
            {props.children}
        </Context.Provider>
    );
}