import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddService from "../../Pages/AddService/AddService";
import AllServices from "../../Pages/AllServices/AllServices";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Payment from "../../Pages/Payment/Payment";
import Review from "../../Pages/Review/Review";
import ReviewUpdate from "../../Pages/Review/ReviewUpdate";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import PublicRoute from "../PublicRoute/PublicRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <PublicRoute><Home></Home></PublicRoute>
            },
            {
                path: '/blog',
                element: <PublicRoute><Blog></Blog></PublicRoute>
            },
            {
                path: '/allServices',
                element: <PublicRoute><AllServices></AllServices></PublicRoute>
            },
            {
                path: '/login',
                element: <PublicRoute><Login></Login></PublicRoute>
            },
            {
                path: '/signup',
                element: <PublicRoute><SignUp></SignUp></PublicRoute>
            },
            {
                path: '/details/:id',
                element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://service-review-server-sable-two.vercel.app/services/${params.id}`)
            },
            {
                path: '/reviews',
                element: <Review></Review>
            },
            {
                path: '/reviewUpdate',
                element: <ReviewUpdate></ReviewUpdate>
            },
            {
                path: '/addService',
                element: <AddService></AddService>
            },
            {
                path: '/payment',
                element: <Payment></Payment>
            }
        ]
    },
    { path: '*', element: <h1 className='text-4xl text-center'>This route not found, Error 404</h1> }
])

export default router;