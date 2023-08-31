import { useQuery } from "@tanstack/react-query";

export const useUserMessage = (email) => {
  const { refetch : userRefetch, data: messages = [] } = useQuery({
    queryKey: ['userData',email],
  
  

    queryFn: async () => {

      const res = await fetch(`https://book-verse-server-phi.vercel.app/userData?email=${email}`)

      return res.json()
    },

   

    
  })

  


  return [messages,userRefetch]

};
