import { useQuery } from "@tanstack/react-query";

export const useAdminMessage = (id) => {
  const { refetch: adminRefetch, data: messages = [] } = useQuery({
    queryKey: ["singleUserData", id],

    queryFn: async () => {
      const res = await fetch(
        `https://book-verse-team-project-server.up.railway.app/singleUserData/${id}`
      );

      return res.json();
    },
  });

  return [messages, adminRefetch];
};
