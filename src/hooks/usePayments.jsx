import { useQuery } from "@tanstack/react-query";

const usePaymentHistory = () => {
  const { data: payments = [] , refetch} = useQuery(
     ['paymentHistory'],
     async () => {
        const res = await fetch(`https://book-verse-server-phi.vercel.app/paymentHistory`)
        return res.json();
    },
  )
  
  return [payments, refetch];
};
export default usePaymentHistory;
