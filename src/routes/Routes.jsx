import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Dashboard from "../layouts/Dashboard";
import Home from "../pages/home/home/Home";
import AllBooks from "../pages/home/AllBooks/AllBooks";
import BookDetails from "../shared/components/BookDetails/BookDetails";
import Login from "../shared/Login/login/Login";
import Register from "../shared/Login/register/Register";
import ResetForm from "../shared/Login/login/ResetForm";
import AddBook from "../Dashboard/Admin/AddBook";
import AddToCart from "../pages/AddToCart/AddToCart";
import AdminHome from "../Dashboard/Admin/AdminHome";
import Payment from "../pages/payment/Payment";
import PrivateRoute from "./PrivateRoute";
import Collections from "../shared/components/Collections/Collections";
import ManageUsers from "../Dashboard/Admin/ManageUsers";
import ManageBooks from "../Dashboard/Admin/ManageBooks";
import PurchasedBooks from "../Dashboard/User/PurchasedBooks";
import SSLPaymentSuccess from "../pages/SSLPaymentSuccess/SSLPaymentSuccess";
import StripePayment from "../pages/payment/StripePayment";

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
            path: 'details/:id',
            element: <BookDetails></BookDetails>,
            loader: ({params}) => fetch(`https://book-verse-server-phi.vercel.app/singleBook/${params.id}`)
          },
        {
            path: "/addToCart",
            element: <AddToCart></AddToCart>
          },
        {
            path: "/payment",
            element:<PrivateRoute> <Payment/></PrivateRoute>
          },
        {
            path: "/stripePayment",
            element:<PrivateRoute> <StripePayment/></PrivateRoute>
          },
        {
            path: "/SSLPaymentSuccess",
            element:<PrivateRoute> <SSLPaymentSuccess/></PrivateRoute>
          },
        {
            path: "/login",
            element: <Login/>
          },
        {
            path: "/register",
            element: <Register/>
          },
        {
            path: "/forget",
            element: <ResetForm/>
        },
        {
          path: "/All/:category",
            element: <Collections/>
        }
      ]
      
    },
    {
     path: 'dashboard',
     element: <Dashboard></Dashboard>,
     children:[
      {
        path: 'addBook',
        element: <AddBook></AddBook>
      },
      {
        path: 'adminHome',
        element: <AdminHome></AdminHome>
      },
      {
        path: 'manageUsers',
        element: <ManageUsers></ManageUsers>
      },
      {
        path: 'manageBooks',
        element: <ManageBooks></ManageBooks>
      },
      {
        path: 'purchasedBooks',
        element:<PurchasedBooks></PurchasedBooks>
      },
     ]
    }
  ]);