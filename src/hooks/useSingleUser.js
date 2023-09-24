import { useQuery } from "@tanstack/react-query";

const UseSingleUser = (email) => {
  const { data: singleUser = [], refetch: singleUserRefetch } = useQuery(
    [email, "singleUserDataByEmail"],
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
