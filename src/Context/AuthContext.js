import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../firebase/firebase.config"



export const UsedContext =createContext();
const auth = getAuth(app)

const AuthContext = ({ children }) => {

    const createUser =(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const productsValue={
        createUser
    }
    return (
       <UsedContext.Provider value={productsValue}>
            {children}
       </UsedContext.Provider>
    );
};

export default AuthContext;