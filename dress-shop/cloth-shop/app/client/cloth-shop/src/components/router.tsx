import React from 'react';
import { Routes, Route, } from 'react-router-dom';
import { authRoutes, publicRoutes } from "./routes.tsx";

export default function AppRouter() : React.ReactElement {
    const isAuth = false
    return (
        <Routes>
            {isAuth && authRoutes.map(({path, component}) => (
                <Route path={path} Component={component}/>
            ))}
            {publicRoutes.map(({path, component}) => (
                <Route path={path} Component={component}/>
            ))}
        </Routes>
    )
}
