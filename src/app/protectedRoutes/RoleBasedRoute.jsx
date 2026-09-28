import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router';

const RoleBasedRoute = ({allowedRole}) => {
    const {employee} = useSelector((store) => store.auth);
    if(!allowedRole.includes(employee.role)){  // each employee has a role property, 
        return <Navigate to="/unauthorized" />;
    }
    
  return (
    <Outlet />
  )
}

export default RoleBasedRoute