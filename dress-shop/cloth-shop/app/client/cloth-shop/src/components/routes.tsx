import React from "react";
import Admin from "../pages/admin";
import Auth from "../pages/auth";
import Basket from "../pages/basket";
import ClothItem from "../pages/cloth_item";
import Shop from "../pages/shop";
import { ADMIN_ROUTE, BASKET_ROUTE, CLOTH_ITEM_ROUTE, SHOP_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts"

interface RouteItem {
    path: string,
    component: React.ComponentType<unknown>,
}

export const authRoutes : Array<RouteItem> = [
    {
        path: ADMIN_ROUTE,
        component: Admin,
    },
    {
        path: BASKET_ROUTE,
        component: Basket,
    },

]

export const publicRoutes : Array<RouteItem> = [
    {
        path: SHOP_ROUTE,
        component: Shop,
    },
    {
        path: LOGIN_ROUTE,
        component: Auth,
    },
    {
        path: REGISTRATION_ROUTE,
        component: Auth,
    },
    {
        path: CLOTH_ITEM_ROUTE + '/:id',
        component: ClothItem,
    },
]