import { createBrowserRouter, Navigate, RouterProvider } from "react-router"
import HomePage from "../features/Home/ui/pages/HomePage"
import { lazy, Suspense } from "react"
import FullScreenLoader from "../components/ui/Loader";

const ErrorPage = lazy(()=>import("../features/Home/ui/components/ErrorPage"));

const AppRoutes = ()=>{

    const router = createBrowserRouter([
        {
            path:"/",
            element:<Navigate to={'/home'} replace/>,
            errorElement:<ErrorPage/>
        },
        {
            path:'/home',
            element:<Suspense fallback={<FullScreenLoader/>}>
                <HomePage/>
            </Suspense>,
            errorElement:<ErrorPage/>
        }
    ])

    return <RouterProvider router={router}/>
}

export default AppRoutes;