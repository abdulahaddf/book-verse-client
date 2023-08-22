
import { useParams } from "react-router-dom";
import BookCollections from "./BookCollections";
import AuthorsCollection from "../AuthorDetails/AuthorsCollection";

const Collections = () => {
  const params=useParams();
  const value =params.category
  console.log(value)
  return (
    <div className="min-h-screen">
      {
        value==="Category" &&<BookCollections/>
      }
      {
        value==="Authors" &&<AuthorsCollection/>
      }
    
    </div>
  );
};

export default Collections;
