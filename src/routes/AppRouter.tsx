import Layout from "@/layout/layout";
import { Outlet, createBrowserRouter } from "react-router-dom";
import { DamageProcess, DamageDetails, Settings } from "./elements";

export const router = createBrowserRouter([
    {
        path : "/",
        element : (
            <Layout>
                <Outlet />
            </Layout>
        ),
        children : [
            {
                index: true,
                element: <DamageProcess />
            },
            {
                path : "/damage/:fileNo",
                element : <DamageDetails />
            },
            {
                path : "/settings",
                element : <Settings />
            },
           
        ]
    }
])