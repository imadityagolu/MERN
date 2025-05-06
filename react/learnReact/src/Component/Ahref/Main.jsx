import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import First from "./Pages/First";
import NotFound from "./Pages/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <First/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "/About",
                element: <About/>
            },
            { 
                path: "*", 
                element: <NotFound /> 
            },
        ],
    }
]);

function Main(){
    return <RouterProvider router={router}/>;
}
export default Main;