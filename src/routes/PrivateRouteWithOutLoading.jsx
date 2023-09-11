
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const PrivateRouteWithOutLoading = ({children}) => {
    const {user, loading} = useContext(AuthContext);
   
    if (loading) return <div className=' hidden'>loading...</div>;
    if (user) return children;
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRouteWithOutLoading;