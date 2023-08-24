import { useContext } from "react";
import { useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

const UseUser = () => {
  const { user } = useContext(AuthContext);
    // const [userinfo, SetUserinfo] = useState('');
    
    const { data: userinfo = [] } = useQuery(["userinfo"], async () => {
        const res = await fetch(`http://localhost:5000/userinfo/?email=${user?.email}`);
        return res.json();
      });
//   useEffect(() => {
//     fetch(`http://localhost:5000/userinfo/?email=${user?.email}`)
//     //   .then((res) => {
//     //     if (!res.ok) {
//     //       throw new Error("Network response was not ok");
//     //     }
//     //     return res.json();
//     //   })
//         .then(res =>res.json())
//       .then((data) => {
//         SetUserinfo(data);
//       })
//   }, []);
    return userinfo;
};
export default UseUser;
