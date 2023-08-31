import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const UserHandleRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    if(!user){
        return <div className=" hidden">Loading...</div>
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default UserHandleRoute;