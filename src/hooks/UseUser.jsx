import { useContext } from "react";

import { AuthContext } from "../provider/AuthProvider";

import { useQuery } from "@tanstack/react-query";

const UseUser = () => {
  const { user } = useContext(AuthContext);
    const { data: userinfo = null, isLoading } = useQuery(
        ["userinfo"],
        async () => {
          const res = await fetch(
            `http://localhost:5000/userinfo/?email=${user?.email}`
          );
          return res.json();
        }
    );
    return [userinfo,isLoading]
};
export default UseUser;
