import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'

const PublicRoute = () => {

    let {employee, isLoading} = useSelector((state) => state.auth);

    if(isLoading){
        return <div  className='w-screen h-screen bg-[#0d0c12] flex justify-center items-center text-white'>Loading...</div>
    }

    if(employee){
        return <Navigate to="/home" />
    }




  return (
    <Outlet />
  )
}

export default PublicRoute