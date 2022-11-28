import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout/DashboardLayout";
import Main from "../../layouts/Main/Main";
import AddCategory from "../../pages/Dashboard/AddCategory/AddCategory";
import AddProduct from "../../pages/Dashboard/AddProduct/AddProduct";
import AllUsers from "../../pages/Dashboard/AllUsers/AllUsers";
import Buyers from "../../pages/Dashboard/AllUsers/AllUsers";
import Categories from "../../pages/Dashboard/Categories/Categories";
import MyBuyers from "../../pages/Dashboard/MyBuyers/MyBuyers";
import MyOrders from "../../pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../../pages/Dashboard/MyProducts/MyProducts";
import Orders from "../../pages/Dashboard/Orders/Orders";
import Products from "../../pages/Dashboard/Products/Products";
import Sellers from "../../pages/Dashboard/Sellers/Sellers";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import SignUp from "../../pages/SignUp/SignUp";
import AdminRoutes from "../AdminRoutes/AdminRoutes";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import SellerRoutes from "../SellerRoutes/SellerRoutes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>,
            },
        ],
    },
    {
        path: "/dashboard",
        element: (
            <PrivateRoutes>
                <DashboardLayout></DashboardLayout>
            </PrivateRoutes>
        ),
        children: [
            {
                path: "/dashboard",
                element: <MyOrders></MyOrders>,
            },
            {
                path: "/dashboard/addproduct",
                element: (
                    <SellerRoutes>
                        <AddProduct></AddProduct>
                    </SellerRoutes>
                ),
            },
            {
                path: "/dashboard/myproducts",
                element: (
                    <SellerRoutes>
                        <MyProducts></MyProducts>
                    </SellerRoutes>
                ),
            },
            {
                path: "/dashboard/mybuyers",
                element: (
                    <SellerRoutes>
                        <MyBuyers></MyBuyers>
                    </SellerRoutes>
                ),
            },
            {
                path: "/dashboard/addcategory",
                element: (
                    <AdminRoutes>
                        <AddCategory></AddCategory>
                    </AdminRoutes>
                ),
            },
            {
                path: "/dashboard/categories",
                element: (
                    <AdminRoutes>
                        <Categories></Categories>
                    </AdminRoutes>
                ),
            },
            {
                path: "/dashboard/buyers",
                element: (
                    <AdminRoutes>
                        <Buyers></Buyers>
                    </AdminRoutes>
                ),
            },
            {
                path: "/dashboard/sellers",
                element: (
                    <AdminRoutes>
                        <Sellers></Sellers>
                    </AdminRoutes>
                ),
            },
            {
                path: "/dashboard/orders",
                element: (
                    <AdminRoutes>
                        <Orders></Orders>
                    </AdminRoutes>
                ),
            },
            {
                path: "/dashboard/products",
                element: (
                    <AdminRoutes>
                        <Products></Products>
                    </AdminRoutes>
                ),
            },
            {
                path: "/dashboard/allusers",
                element: (
                    
                        <AllUsers></AllUsers>
                ),
            },
        ],
    },
]);

export default router;
