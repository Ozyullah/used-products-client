import { createBrowserRouter } from "react-router-dom";
import AddProducts from "../DashBoardPage/AddProductsPages/AddProducts";
import AllSellers from "../DashBoardPage/AllSellers/AllSellers";
import AllUsers from "../DashBoardPage/AllUsers/AllUsers";
import Dashboar from "../DashBoardPage/DashBoard/Dashboar";
import MyProducts from "../DashBoardPage/MyProducts/MyProducts";
import MyOrders from "../DashBoardPage/MyOrdersPage/MyOrders";
import DashLayout from "../Layout/DashLayout/DashLayout";
import Main from "../Layout/Main";
import Login from "../SecurityPages/Login";
import SignUp from "../SecurityPages/SignUp";
import Home from "../SharedPage/HomePage/Home";
import Catagory from "../SharedPage/ProductsCatagory/Catagory/Catagory";
import CatagoryItems from "../SharedPage/ProductsCatagory/CatagoryItems/CatagoryItems";
import PrivateRoute from "./SecureRoute/PrivateRoute";
import Error from "../ErrorPages/Error";
import CatagoryDetails from "../SharedPage/ProductsCatagory/CatagoryItems/CatagoryDetails";
import ReportedItem from "../DashBoardPage/ReportItemsPage/ReportedItem";
import AdminSecurRoute from "./DashboardSecurRoute/AdminSecurRoute";
import MyWishList from "../DashBoardPage/WishListPage/MyWishList";
import Blogs from "../FixdPage/BlogPage/Blogs";
import Payment from "../DashBoardPage/PaymentPage/Payment";


export const direction = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('http://localhost:4000/catagory')
            },
            {
                path:'/catagory',
                element:<Catagory></Catagory>
            },
            {
                path:'/catagory/:id',
                element:<PrivateRoute><CatagoryItems></CatagoryItems></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:4000/catagory/${params.id}`)
            },
            {
                path:'/catagoryDetails/:id',
                element:<PrivateRoute><CatagoryDetails></CatagoryDetails></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:4000/productsDetails/${params.id}`)
            },
            {
                path:'/blogs',
                element:<Blogs></Blogs>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            }
        ],
    },
    {
        path:'/dashboard',
        element:<PrivateRoute><DashLayout></DashLayout></PrivateRoute>,
        children:[
        {
            path:'/dashboard',
            element:<Dashboar></Dashboar>
        },
        {
            path:'/dashboard/allusers',
            element:<AdminSecurRoute><AllUsers></AllUsers></AdminSecurRoute>
        },
        {
            path:'/dashboard/allsellers',
            element:<AdminSecurRoute><AllSellers></AllSellers></AdminSecurRoute>
        },
        {
            path:'/dashboard/reportedItems',
            element:<AdminSecurRoute><ReportedItem></ReportedItem></AdminSecurRoute>
        },
        {
            path:'/dashboard/addproduct',
            element:<AddProducts></AddProducts>
        },
        {
            path:'/dashboard/myproducts',
            element:<MyProducts></MyProducts>
        } ,
        {
            path:'/dashboard/myorders',
            element:<MyOrders></MyOrders>
        },
        {
            path:'/dashboard/mywishlist',
            element:<PrivateRoute><MyWishList></MyWishList></PrivateRoute>
        },
        {
            path:'/dashboard/booking/payment/:id',
            element:<Payment></Payment>,
            loader: ({params}) =>fetch(`http://localhost:4000/booking/payment/${params.id}`)
        }
        // {
        //     path:'/dashboard/adminRoute',
        //     element:<AdminSecurRoute></AdminSecurRoute>,
        //     loader:()=>fetch('http://localhost:4000/users')
        // }
        ]
    },
    {
        path:'/*',
        element:<Error></Error>
    }
])