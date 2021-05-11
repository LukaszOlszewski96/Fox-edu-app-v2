import React from "react";
import app from 'firebase/app';



export const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
    const[currentUser, setCurrentUser] =React.useState(null);

    React.useEffect(() => {
        app.auth().onAuthStateChanged(setCurrentUser);
    },[]);

    return(
        <AuthContext.Provider value={{currentUser}}> {children} </AuthContext.Provider>
    );
};