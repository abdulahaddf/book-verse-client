import { useQuery } from "@tanstack/react-query";

export const useUserMessage = (email) => {
  const { refetch: userRefetch, data: messages = [] } = useQuery({
    queryKey: ["userData", email],

    queryFn: async () => {
      const res = await fetch(
        `https://book-verse-team-project-server.up.railway.app/userData?email=${email}`
      );

      return res.json();
    },
  });

  return [messages, userRefetch];
};
