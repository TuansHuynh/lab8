import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../page/home/Home";
import About from "../page/about/About";
import MovieDetail from "../page/movie/MovieDetail";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children:[
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: 'detail',
                element: <MovieDetail/>
            }
        ]
    }
])