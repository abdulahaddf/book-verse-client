/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../shared/components/loader/Loader";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if (loading) return <Loader/>;
    if (user) return children;
    return (
        <div>
            <Navigate to="/login" state={{from: location}} replace></Navigate>
        </div>
    );
};

export default PrivateRoute;