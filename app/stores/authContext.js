"use client"
import { netlifyIdentity } from "netlify-identity-widget";
import { createContext, useEffect, useState } from "react";
//to track auth context of users
const AuthContext = createContext({
    user: null,
    login: ()=>{},
    logout: ()=>{},
    authReady: false
})

export const AuthContextProvider = ({children}) =>{
    const [user,setUser]=useState(null)


   

return(
    <AuthContext.Provider value={user}>
        {children}
    </AuthContext.Provider>
)
}