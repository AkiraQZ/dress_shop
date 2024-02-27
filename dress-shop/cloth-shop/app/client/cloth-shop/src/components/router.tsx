import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { authRoutes, publicRoutes } from "./routes.tsx";
import { SHOP_ROUTE } from '../utils/consts.tsx';
import UserStore from '../store/userStore.tsx';
import { Context } from '../main.tsx';

export default function AppRouter() : React.ReactElement {
    const {user} = React.useContext(Context)

    console.log(user);

    return (
        <Routes>
            {user.isAuth && authRoutes.map(({path, component: Component}) => (
                <Route path={path} element={<Component />} />
            ))}
            {publicRoutes.map(({path, component: Component}) => (
                <Route path={path} element={<Component />} />
            ))}
            <Route path="*" element={<Navigate to={SHOP_ROUTE} />} />
        </Routes>
    );
}