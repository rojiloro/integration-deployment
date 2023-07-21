import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext, userContext } from "../context/UserContext";

const PrivateRoute = () => {
    const [state, dispatch] = useContext(UserContext);

    return state.isLogin ? <Outlet/> : <Navigate to="/"/>
}

export const PrivateRouteUser = () => {
    const [state, dispatch] = useContext(UserContext);

    return state.isLogin ? <Outlet/> : <Navigate to="/"/>
}

export const PrivateRouteAdmin = () => {
    const [state, dispatch] = useContext(UserContext);

    return state.isLogin ? <Outlet/> : <Navigate to="/"/>
}

export default PrivateRoute;