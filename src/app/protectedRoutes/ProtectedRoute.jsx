import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'

const ProtectedRoute = () => {

    let {employee, isLoading} = useSelector((state) => state.auth);

    if(!employee){
        return <Navigate to="/" />
    }




  return (
    <Outlet />
  )
}

export default ProtectedRoute