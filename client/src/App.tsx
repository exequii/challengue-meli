import * as React from "react";
import type { RouteObject } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { ListProducts } from "./pages/ListProducts";
import { ProductDetail } from "./pages/ProductDetail";
import { Navbar } from "./components/Navbar";

export const routes: RouteObject[] = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Outlet />,
            },
        ]
    },
    {
        path: "/items",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <ListProducts />,
            },
        ]
    },
    {
        path: "/detail/:id",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <ProductDetail />,
            },
        ]
    },
];

function Layout() {
    return (
        <div className="App">
            <Navbar />
            <Outlet />
        </div>
    );
}

