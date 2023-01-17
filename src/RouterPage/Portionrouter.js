import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../SecurityPages/Login";
import SignUp from "../SecurityPages/SignUp";
import Home from "../SharedPage/HomePage/Home";
import Catagory from "../SharedPage/ProductsCatagory/Catagory/Catagory";
import CatagoryItems from "../SharedPage/ProductsCatagory/CatagoryItems/CatagoryItems";


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
        ]
    }
])