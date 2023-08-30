import { useQuery } from "@tanstack/react-query";

export const useAdminMessage = (id) => {

  const { refetch : adminRefetch , data: messages = [] } = useQuery({
    queryKey: ['singleUserData',id],
  
  

    queryFn: async () => {

      const res = await   fetch(`http://localhost:5000/singleUserData/${id}`)

      return res.json()
    },

   

    
  });


  return [messages,adminRefetch]
};
