import React, {useContext} from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider"

const PrivateRoute = ({component: RouteComponent, ...rest }) => {
    const {currentUser} = useContext(AuthContext);
    
    return(
        <Route {...rest} render={routeProps=> !!currentUser ? (<RouteComponent {...routeProps}/>):(<Redirect to={"/dashboard"}/>)}/>
    );
};

export default PrivateRoute;
