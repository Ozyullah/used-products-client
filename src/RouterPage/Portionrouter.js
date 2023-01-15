import { createBrowserRouter } from "react-router-dom";
import Header from "../FixdPage/Header/Header";
import Main from "../Layout/Main";
import Home from "../SharedPage/HomePage/Home";
import Catagory from "../SharedPage/ProductsCatagory/Catagory/Catagory";


export const direction = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/catagory',
                element:<Catagory></Catagory>,
                loader:()=>fetch('http://localhost:4000/catagory')
            }
        ]
    }
])