import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Category from "../layout/Pages/Category/Category/Category";
import Course from "../layout/Pages/Course/Course/Course";
import Home from "../layout/Pages/Home/Home/Home";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: './category/:id',
                element: <Category></Category>
            },
            {
                path: './course/:id',
                element: <Course></Course>
            }
        ]
    }
])