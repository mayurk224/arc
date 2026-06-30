import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate()

    useEffect(() => {
        if (!Cookies.get("token")) {
            navigate("/signin")
        }
    }, [navigate])

    return (
        <div>{children}</div>
    )
}

export default ProtectedRoute