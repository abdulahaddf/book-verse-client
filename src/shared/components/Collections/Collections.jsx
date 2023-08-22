
import { useParams } from "react-router-dom";
import BookCollections from "./BookCollections";

const Collections = () => {
  const params=useParams();
  const value =params.category
  console.log(value)
  return (
    <div className="min-h-screen">
      {
        value==="Category" &&<BookCollections/>
      }
    
    </div>
  );
};

export default Collections;
