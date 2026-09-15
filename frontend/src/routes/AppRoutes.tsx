import { createBrowserRouter, Navigate, RouterProvider } from "react-router"
import HomePage from "../features/Home/ui/pages/HomePage"
import { Suspense } from "react"
import Loader from "../components/ui/Loader"

const AppRoutes = ()=>{

    const router = createBrowserRouter([
        {
            path:"/",
            element:<Navigate to={'/home'} replace/>
        },
        {
            path:'/home',
            element:<Suspense fallback={<Loader/>}>
                <HomePage/>
            </Suspense>
        }
    ])

    return <RouterProvider router={router}/>
}

export default AppRoutes;