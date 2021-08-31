import React, { useState } from 'react';
import Data from './Data';

/**
 * This file sets up the Context to allow data to pass
 * through the app component tree.
 */
export const Context = React.createContext();

export const Provider = (props) => {

    let [ authenticatedUser, setAuthUser ] = useState();
    const [ data ] = useState(new Data());

    const signIn = async (emailAddress, password) => {
        const user = await data.getUser(emailAddress, password);
        if (user !== null) {
            setAuthUser(user);
        }
        return user;
    };

    return (
        <Context.Provider value={{ 
            authenticatedUser,
            data,
            actions: { signIn }
        }}>
            {props.children}
        </Context.Provider>
    );
}