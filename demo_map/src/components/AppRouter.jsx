import { observer } from 'mobx-react-lite'
import React, {useContext} from 'react'
import { Context } from '.././index'

import { Navigate, Route, Routes } from "react-router-dom";
import { publicRoutes, privateRoutes } from "../router/routes"

const AppRouter = observer(() => {

    const isAuth = true;
    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map((route) => 
                    <Route element={route.element} path={route.path} key={route.path}/>
                )}
                <Route path="*" element={<Navigate to ="/map" />}/>
            </Routes>
            : 
            <Routes>
                {publicRoutes.map((route) => 
                    <Route element={route.element} path={route.path} key={route.path}/>
                )}
                <Route path="*" element={<Navigate to ="/map" />}/>
            </Routes>
    )
})

export default AppRouter