import { createBrowserRouter } from "react-router-dom";
import Header from "../FixdPage/Header/Header";
import Main from "../Layout/Main";
import Home from "../SharedPage/HomePage/Home";


export const direction = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            }
        ]
    }
])