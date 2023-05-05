import * as React from "react";
import type { RouteObject } from "react-router-dom";
import { Outlet, Link, useLoaderData, redirect } from "react-router-dom";
import { ListProducts } from "../pages/ListProducts";
import { ProductDetail } from "../pages/ProductDetail";

export const routes: RouteObject[] = [
    {
        path: "/",
        element: <Outlet />,
    },
    {
        path: "/items",
        element: <ListProducts />,
    },
    {
        path: "/items/:?id",
        element: <ProductDetail />,
    },
];