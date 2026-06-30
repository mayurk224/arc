import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './index.css'
import Cookies from 'js-cookie'

const AuthPage = () => {

  const navigate = useNavigate()

  useEffect(() => {
    if (Cookies.get("token")) {
      navigate("/")
    }
  }, [navigate])

  const [allValues, setAllValues] = useState({
    username: "",
    password: "",
    errMsg: ""
  })

  const handleChange = (e) => {
    setAllValues({
      ...allValues,
      [e.target.id]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const api = "https://apis.ccbp.in/login"

    const userDetails = {
      username: allValues.username,
      password: allValues.password,
    }

    const options = {
      method: "POST",
      body: JSON.stringify(userDetails),
    }

    try {
      const response = await fetch(api, options)
      const data = await response.json()
      // console.log(data)
      if (response.ok) {
        Cookies.set("token", data.jwt_token, { expires: 7 })
        setAllValues({
          username: "",
          password: "",
          errMsg: "",
        })
        navigate("/")
      }
      else {
        setAllValues({
          ...allValues,
          errMsg: data.error_msg,
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="auth-page">
      <div className="left">
        <h1>Welcome Back</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input type="text" className="form-control" id="username" aria-describedby="usernameHelp" onChange={handleChange} />
            <div id="usernameHelp" className="form-text">We'll never share your username with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" onChange={handleChange} />
          </div>

          <button type="submit" className="btn btn-primary">Sign In</button>

          <div className="text-danger mt-2 text-center">{allValues.errMsg}</div>
        </form>
      </div>
      <div className="right">
        <img src="https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18" alt="" className="auth-img" width="100%" height="auto" />
      </div>
    </div>
  )
}

export default AuthPage