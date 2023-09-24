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
import UserHome from "../Dashboard/User/UserHome/UserHome";
import AllBestSelling from "../shared/components/homeSections/AllBestSelling";
import AllRecentSelling from "../shared/components/homeSections/allRecentSelling";
import AuthorDetails from "../shared/components/AuthorDetails/AuthorDetails";
import SellBook from "../Dashboard/User/SellBook";
import AllOldBooks from "../pages/AllOldBooks/AllOldBooks";
import MyBooks from "../Dashboard/User/MyBooks";
import OldBookDetails from "../pages/AllOldBooks/OldBookDetails";
import Team from "../shared/components/team/Team";
import Error from "../pages/Error/Error";
import ManageBanner from "../Dashboard/Admin/ManageBanner/ManageBanner";
import ManageChats from "../Dashboard/Admin/ManageChats";
import AdminSingleChat from "../Dashboard/Admin/AdminSingleChat";
import UserChat from "../pages/UserChat/UserChat";
import Overview from "../Dashboard/Admin/Overview";
import DailyRevenue from "../Dashboard/Admin/DailyRevenue";
import MonthlyRevenue from "../Dashboard/Admin/MonthlyRevenue";
import TermsCondition from "../shared/components/Terms&Conditions/TermsCondition";
import AddPromo from "../Dashboard/Admin/AddPromo";
import ManageOrder from "../Dashboard/Admin/ManageOrder";
import ContactWithSeller from "../pages/AllOldBooks/ContactWithSeller";
import UserChats from "../Dashboard/User/UserChats";
import UserToUserChat from "../Dashboard/User/UserToUserChat";
import Cod from "../pages/payment/Cod";
import AllKidsBooks from "../shared/components/homeSections/AllKidsBooks";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-books",
        element: <AllBooks />,
      },
      {
        path: "details/:id",
        element: <BookDetails></BookDetails>,
        loader: ({ params }) =>
          fetch(
            `https://book-verse-server-phi.vercel.app/singleBook/${params.id}`
          ),
      },
      {
        path: "/addToCart",
        element: <AddToCart></AddToCart>,
      },
      {
        path: "/allBestSelling",
        element: <AllBestSelling />,
      },
      {
        path: "/allRecentSelling",
        element: <AllRecentSelling />,
      },
      {
        path: "/allkidsbooks",
        element: <AllKidsBooks></AllKidsBooks>,
      },
      {
        path: "/payment",
        element: (
          <PrivateRoute>
            {" "}
            <Payment />
          </PrivateRoute>
        ),
      },
      {
        path: "/stripePayment",
        element: (
          <PrivateRoute>
            {" "}
            <StripePayment />
          </PrivateRoute>
        ),
      },
      {
        path: "/cash-on-delivery",
        element: (
          <PrivateRoute>
            {" "}
            <Cod />
          </PrivateRoute>
        ),
      },
      {
        path: "/SSLPaymentSuccess",
        element: (
          <PrivateRoute>
            {" "}
            <SSLPaymentSuccess />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/forget",
        element: <ResetForm />,
      },
      {
        path: "/All/:category",
        element: <Collections />,
      },
      {
        path: "/Author/:name",
        element: <AuthorDetails />,
      },
      {
        path: "/dev",
        element: <Team />,
      },
      {
        path: "/old-books",
        element: <AllOldBooks />,
      },
      {
        path: "/old-books-details/:id",
        element: <OldBookDetails />,
        loader: ({ params }) =>
          fetch(
            `https://book-verse-server-phi.vercel.app/oldBook/${params.id}`
          ),
      },
      {
        path: "/userChat",
        element: (
          <PrivateRoute>
            <UserChat />
          </PrivateRoute>
        ),
      },
      {
        path: "/terms&conditions",
        element: <TermsCondition />,
      },
    ],
  },

  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "addBook",
        element: <AddBook></AddBook>,
      },
      {
        path: "adminHome",
        element: <AdminHome></AdminHome>,
      },
      {
        path: "manageUsers",
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: "manageBooks",
        element: <ManageBooks></ManageBooks>,
      },
      {
        path: "manageBanner",
        element: <ManageBanner></ManageBanner>,
      },
      {
        path: "manageChats",
        element: <ManageChats />,
      },
      {
        path: "manageChats/singleChat/:id",
        element: (
          <PrivateRoute>
            <AdminSingleChat />
          </PrivateRoute>
        ),
      },
      {
        path: "userChat",
        element: (
          <PrivateRoute>
            <UserChat />
          </PrivateRoute>
        ),
      },
      {
        path: "userChats",
        element: (
          <PrivateRoute>
            <UserChats />
          </PrivateRoute>
        ),
      },
      {
        path: "userChats/userToUserChat/:id",
        element: (
          <PrivateRoute>
            <UserToUserChat />
          </PrivateRoute>
        ),
      },
      {
        path: "ContactWithSeller/:id",
        element: (
          <PrivateRoute>
            <ContactWithSeller />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://book-verse-server-phi.vercel.app/oldBook/${params.id}`
          ),
      },
      {
        path: "overview",
        element: <Overview></Overview>,
      },
      {
        path: "daily",
        element: <DailyRevenue></DailyRevenue>,
      },
      {
        path: "monthly",
        element: <MonthlyRevenue></MonthlyRevenue>,
      },
      {
        path: "purchasedBooks",
        element: (
          <PrivateRoute>
            <PurchasedBooks></PurchasedBooks>{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "userHome",
        element: (
          <PrivateRoute>
            <UserHome></UserHome>
          </PrivateRoute>
        ),
      },
      {
        path: "sell",
        element: (
          <PrivateRoute>
            <SellBook></SellBook>
          </PrivateRoute>
        ),
      },
      {
        path: "my-books",
        element: (
          <PrivateRoute>
            <MyBooks />
          </PrivateRoute>
        ),
      },
      {
        path: "promo",
        element: (
          <PrivateRoute>
            <AddPromo />
          </PrivateRoute>
        ),
      },
      {
        path: "OrderStatus",
        element: <ManageOrder />,
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);
