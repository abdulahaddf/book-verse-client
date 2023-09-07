import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useLocation } from "react-router";


const UserHandleRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    const location= useLocation()

    // console.log(location.pathname,'location')

    if(!user){
        return <div className=" hidden">Loading...</div>
    }

    if(location.pathname==="/userChat"){
        
        fetch(`https://book-verse-server-phi.vercel.app/chatAction?email=${user?.email}`, {
    
    
        method: "POST",
  
        headers: {
  
          'content-type': "application/json"
        },
  
  
        body: JSON.stringify({})
  
  
      })
        .then(res => res.json())
        .then((res) => {
  
          if (res?.modifiedCount > 0) {
  
  
           console.log('cancel')
  
  
  
  
  
          }
  
        })

        return 
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default UserHandleRoute;