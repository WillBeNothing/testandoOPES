import React from 'react'

import { BrowserRouter , Routes, Route } from 'react-router-dom'
import MainRoutes from './routes'

import './assets/styles/global.css'

function App() {


  return (
<BrowserRouter>
    <MainRoutes />
</BrowserRouter>
  )
}

export default App
