import React from 'react'
import './index.css'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'
import Cookies from 'js-cookie'

const Header = () => {
    const navigate = useNavigate()

    const handleLogout = () => {
        Cookies.remove('token')
        navigate('/signin')
    }

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <div className="">
                    <Link to="/" className="navbar-brand">
                        <img src={logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
                        FindWork
                    </Link>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link" aria-current="page">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/jobs" className="nav-link">Jobs</NavLink>
                        </li>

                    </ul>
                    <button type="button" className="btn btn-outline-danger btn-sm" onClick={handleLogout}>Logout</button>
                </div>
            </div>
        </nav>
    )
}

export default Header