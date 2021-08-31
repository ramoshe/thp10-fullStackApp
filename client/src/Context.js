import React from 'react';
import Data from './Data';

/**
 * This file sets up the Context to allow data to pass
 * through the app component tree.
 */
export const Context = React.createContext();

export const Provider = (props) => {
    
    const data = new Data();

    const signIn = async (emailAddress, password) => {
        const user = await data.getUser(emailAddress, password);
        return user;
    };

    return (
        <Context.Provider value={{ 
            data,
            actions: { signIn }
        }}>
            {props.children}
        </Context.Provider>
    );
}