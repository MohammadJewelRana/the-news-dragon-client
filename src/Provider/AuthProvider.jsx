import React, { createContext } from 'react';
import { getAuth } from "firebase/auth";
import app from '../Firebase/Firebase.config';

export const AuthContext=createContext(null);

 

const AuthProvider = ({children}) => {
    const auth=getAuth(app);


    // const user={};


    const authInfo={user:'jewel'}



    return (
        <div>

            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
            
        </div>
    );
};

export default AuthProvider;