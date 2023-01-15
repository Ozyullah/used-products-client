import React, { createContext } from 'react';



const UsedContext =createContext()

const AuthContext = ({ children }) => {


    const productsValue={

    }
    return (
       <UsedContext.Provider value={productsValue}>
            {children}
       </UsedContext.Provider>
    );
};

export default AuthContext;