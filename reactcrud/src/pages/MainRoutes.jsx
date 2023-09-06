import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'

import Admins from './Admins'
import Login from './Login'
import PrivateRoute from '../components/PrivateRoute'
import EditProduct from './EditProduct'


const MainRoutes = () => {
  return (
     <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/edit/:id' element={
        <PrivateRoute>
        <EditProduct/>
        </PrivateRoute>
        } />
        <Route path='/admin' element={
         <PrivateRoute>
            <Admins/>
         </PrivateRoute>
        } />
     </Routes>
  )
}

export default MainRoutes