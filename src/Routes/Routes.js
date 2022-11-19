import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Category from "../layout/Pages/Category/Category/Category";
import Course from "../layout/Pages/Course/Course/Course";
import Home from "../layout/Pages/Home/Home/Home";
import LogIn from "../layout/Pages/Login/LogIn";
import Register from "../layout/Pages/Login/Register";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/course')
            },
            {
                path: '/category/:id',
                element: <PrivateRoute> <Category></Category> </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)
            },
            {
                path: '/course/:id',
                element: <PrivateRoute><Course></Course></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`)
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])