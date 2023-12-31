import { useQuery } from "@tanstack/react-query";

export const useAllUsersData = () => {
  const { refetch: allUsersRefetch, data: allUsersData = [] } = useQuery({
    queryKey: ["allUserData"],

    queryFn: async () => {
      const res = await fetch(
        `https://book-verse-team-project-server.up.railway.app/allUserData`
      );

      return res.json();
    },
  });

  return [allUsersData, allUsersRefetch];
};
