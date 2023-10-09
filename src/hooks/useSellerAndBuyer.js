import { useQuery } from "@tanstack/react-query";

const UseSellerAndBuyer = (sellerMail, buyerMail) => {
  const { data: message = [], refetch: sellerAndBuyerDataRefetch } = useQuery(
    [sellerMail, buyerMail, "sellerAndBuyerCollections"],
    async () => {
      const res = await fetch(
        `https://book-verse-team-project-server.up.railway.app/sellerAndBuyerCollections?seller=${sellerMail}&&buyer=${buyerMail}`
      );
      return res.json();
    }
  );
  return [message, sellerAndBuyerDataRefetch];
};
export default UseSellerAndBuyer;
