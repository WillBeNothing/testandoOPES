import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'


import Login from './pages/Landing-Login/Login'

function MainRoutes() {
    return(
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path ='/home' element={<Home />}/>
        </Routes>
    )
}

export default MainRoutes