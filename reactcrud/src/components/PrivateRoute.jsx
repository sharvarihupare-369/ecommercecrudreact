import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({children}) => {
  const isAuth = useSelector(store => store.authReducer.isAuth)
  const location = useLocation()
  console.log(location)
  return isAuth ? children : <Navigate state={location.pathname} replace={true} to="/login" />
}

export default PrivateRoute