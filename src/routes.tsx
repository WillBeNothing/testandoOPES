import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'


import Login from './pages/Landing-Login/Login'
import Register from './pages/register/Register'

function MainRoutes() {
    return(
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/newCharacter' element={<Register/>} />
        </Routes>
    )
}

export default MainRoutes
