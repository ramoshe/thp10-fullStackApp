import React, { useState } from 'react';
import Data from './Data';

/**
 * This file sets up the Context to allow data to pass
 * through the app component tree.
 */
export const Context = React.createContext();

export const Provider = (props) => {
    
    return (
        <Context.Provider value={{ 
            data: new Data() 
        }}>
            {props.children}
        </Context.Provider>
    );
}