import { useQuery } from "@tanstack/react-query";

export const useUserToUserMessageById = (id) => {
  const { refetch: userRefetch, data: messages = [] } = useQuery({
    queryKey: [id, "getMessageUserToUser"],

    queryFn: async () => {
      const res = await fetch(
        `https://book-verse-server-phi.vercel.app/getMessageUserToUser?id=${id}`
      );

      return res.json();
    },
  });

  return [messages, userRefetch];
};
