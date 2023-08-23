import { useLoaderData } from "react-router-dom";

const UpdateBooks = () => {
  const book = useLoaderData();
  const { title } = book;
  return (
    <div>
      <h3>Update book {title}</h3>
      <h5>TODO</h5>
    </div>
  );
};

export default UpdateBooks;
