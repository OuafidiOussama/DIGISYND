import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export default function AdminRoute({children}) {
    const {userInfo} = useSelector(state=>state.login)
    return userInfo && userInfo.user.role === 'super' ? children : <Navigate to="/" />
}
