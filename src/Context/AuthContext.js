import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config"



export const UsedContext =createContext();
const auth = getAuth(app)

const AuthContext = ({ children }) => {

    const [user, serUser]=useState(null)
    const [loader, setLoader]=useState(true)

    const createUser =(email, password)=>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const addedUpdateUser =(displayName,photoURL)=>{
        setLoader(true)
        return updateProfile(auth.currentUser, {displayName,photoURL})
    }

    const logInWithEmailandPassword =(email, password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    const loginWithGoogle =(provider)=>{
        setLoader(true)
        return signInWithPopup(auth, provider)
    }

    const logOut =()=>{
        return signOut(auth)
    }


    useEffect(()=>{
        const unSubmit=onAuthStateChanged(auth, (currentUser)=>{
            serUser(currentUser)
            setLoader(false)
        })
        return unSubmit;
    },[])



    const productsValue={
        createUser,
        addedUpdateUser,
        user,
        logOut,
        logInWithEmailandPassword,
        loginWithGoogle,
        loader

    }
    return (
       <UsedContext.Provider value={productsValue}>
            {children}
       </UsedContext.Provider>
    );
};

export default AuthContext;