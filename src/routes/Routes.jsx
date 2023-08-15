import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/home/Home";
import AllBooks from "../pages/home/AllBooks/AllBooks";
import BookRent from "../shared/components/BookRent/BookRent";
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
            path: "/",
            element: <Home/>
          },
        {
            path: "/all-books",
            element: <AllBooks/>
        },
        {
          path: "/bookRent",
          element:<BookRent></BookRent>
        }
      ]
    },
  ]);