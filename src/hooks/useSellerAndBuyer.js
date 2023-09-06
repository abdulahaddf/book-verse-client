import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const UseSellerAndBuyer = (sellerMail,buyerMail) => {
  const { user } = useContext(AuthContext);
  const { data: message = [], refetch: sellerAndBuyerDataRefetch } = useQuery(
    [sellerMail,buyerMail],
    async () => {
      const res = await fetch(
        `https://book-verse-server-phi.vercel.app/sellerAndBuyerCollections?seller=${sellerMail}&&buyer=${buyerMail}`
      );
      return res.json();
    }
  );
  return [message, sellerAndBuyerDataRefetch];
};
export default UseSellerAndBuyer;
