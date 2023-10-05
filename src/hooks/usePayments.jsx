import { useQuery } from "@tanstack/react-query";

const usePaymentHistory = (search) => {
  const { data: payments = [], refetch } = useQuery(
    ["paymentHistory", search],
    async () => {
      const res = await fetch(
        `https://book-verse-team-project-server.up.railway.app/paymentHistory?search=${search}`
      );
      return res.json();
    }
  );

  return [payments, refetch];
};
export default usePaymentHistory;
