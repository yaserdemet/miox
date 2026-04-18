import Layout from "@/layout/layout";
import { Outlet, createBrowserRouter } from "react-router-dom";
import { About, DamageProcess } from "./elements";

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
                path : "/about",
                element : <About />
            }
        ]
    }
])