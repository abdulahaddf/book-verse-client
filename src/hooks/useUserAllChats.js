import { useQuery } from "@tanstack/react-query";

const UseUserAllChats = (email) => {
  const { data: userAllChats = [], refetch: userAllChatsRefetch } = useQuery(
    [email, "userAllChats"],
    async () => {
      const res = await fetch(
        `https://book-verse-team-project-server.up.railway.app/userAllChats?email=${email}`
      );
      return res.json();
    }
  );
  return [userAllChats, userAllChatsRefetch];
};
export default UseUserAllChats;
