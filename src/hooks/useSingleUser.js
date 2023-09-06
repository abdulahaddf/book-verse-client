import { useContext } from "react";

import { AuthContext } from "../provider/AuthProvider";

import { useQuery } from "@tanstack/react-query";

const UseSingleUser = (email) => {
  const { user } = useContext(AuthContext);
  const { data: singleUser =[] , refetch : singleUserRefetch } = useQuery(
    [email],
    async () => {
      const res = await fetch(
        `https://book-verse-server-phi.vercel.app/singleUserDataByEmail/${email}`
      );
      return res.json();
    }
  );
  return [singleUser, singleUserRefetch];
};
export default UseSingleUser;
