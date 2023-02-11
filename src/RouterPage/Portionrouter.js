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
                element:<CatagoryItems></CatagoryItems>,
                loader:({params})=>fetch(`http://localhost:4000/catagory/${params.id}`)
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
            element:<PrivateRoute><AllUsers></AllUsers></PrivateRoute>
        },
        {
            path:'/dashboard/allsellers',
            element:<PrivateRoute><AllSellers></AllSellers></PrivateRoute>
        },
        {
            path:'/dashboard/addproduct',
            element:<PrivateRoute><AddProducts></AddProducts></PrivateRoute>
        },
        {
            path:'/dashboard/myproducts',
            element:<PrivateRoute><MyProducts></MyProducts></PrivateRoute>
        } ,
        {
            path:'/dashboard/myorders',
            element:<MyOrders></MyOrders>
        }
        ]
    }
])