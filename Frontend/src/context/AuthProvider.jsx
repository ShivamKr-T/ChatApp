import React, { createContext, useState } from 'react'
import Cookies from "js-cookie"
import { useContext } from 'react';

export const AuthContext=createContext();

export const AuthProvider = ({children}) => {
    const initiaUSerState=Cookies.get("jwt") || localStorage.getItem("ChatApp");

    // parse the user data and storing in state
    const [authUser,setAuthUser]=useState(initiaUSerState?JSON.parse(initiaUSerState):undefined);
    return (
        <AuthContext.Provider value={[authUser,setAuthUser]}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth=()=>useContext(AuthContext);
