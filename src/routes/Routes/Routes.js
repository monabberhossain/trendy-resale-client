import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout/DashboardLayout";
import Main from "../../layouts/Main/Main";
import AddCategory from "../../pages/Dashboard/AddCategory/AddCategory";
import Categories from "../../pages/Dashboard/Categories/Categories";
import Home from "../../pages/Home/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [{ path: "/", element: <Home></Home> }],
    },
    {
        path: "/dashboard",
        element: (
            <DashboardLayout></DashboardLayout>
        ),
        children: [
            {
                path: "/dashboard/addcategory",
                element: (
                    <AddCategory></AddCategory>
                ),
            },
            {
                path: "/dashboard/categories",
                element: (
                    
                        <Categories></Categories>
                ),
            },
        ]    
    },
]);

export default router;
