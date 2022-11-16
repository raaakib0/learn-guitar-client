import React, { createContext } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const user = { displayName: 'Md. Rakibul Islam' }
    
    const authInfo = {user}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;