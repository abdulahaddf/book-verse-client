import { useQuery } from "@tanstack/react-query";

export const useAllUsersData = () => {

  const { refetch : allUsersRefetch , data: allUsersData = [] } = useQuery({
    queryKey: ['allUserData'],
  
  

    queryFn: async () => {

      const res = await   fetch(`http://localhost:5000/allUserData`)

      return res.json()
    },

   

    
  });


  return [allUsersData,allUsersRefetch]
};
