import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';

export const AuthConext = createContext();

const AuthProvider = ({children}) => {

    const allContext = useFirebase();

    return (
        <div>
            <AuthConext.Provider value={allContext}>
                {children}
            </AuthConext.Provider>
        </div>
    );
};

export default AuthProvider;