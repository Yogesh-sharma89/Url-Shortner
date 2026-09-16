import { createBrowserRouter, Navigate, RouterProvider } from "react-router"

import { lazy, Suspense } from "react"


const ErrorPage = lazy(()=>import("../features/Home/ui/components/ErrorPage"));
const FullScreenLoader = lazy(()=>import("../components/ui/Loader"))
const HomePage = lazy(()=>import("../features/Home/ui/pages/HomePage"))

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