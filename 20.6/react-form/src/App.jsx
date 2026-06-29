import React, { useState } from 'react'

const App = () => {
  const [allVal, setAllVal] = useState({
    name: '',
    email: '',
    gender: 'male',
    status: 'active',
    errMsg: '',
    errClass: ''
  })

  const handleSubmit = async (event) => {
    event.preventDefault()
    setAllVal(prev => ({ ...prev, errMsg: '', errClass: '' }))

    const api = 'https://gorest.co.in/public/v2/users'

    const userData = {
      name: allVal.name,
      email: allVal.email,
      gender: allVal.gender,
      status: allVal.status
    }

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer 3422b05153fdc1a7c075372fb4a534e449fbbc6e0ae3aad7aec4d7a2e02d37a1'
      },
      body: JSON.stringify(userData)
    }

    try {
      const response = await fetch(api, options)
      const data = await response.json()
      console.log('Response:', data)

      if (response.ok) {
        setAllVal({
          name: '',
          email: '',
          gender: 'male',
          status: 'active',
          errMsg: 'User created successfully!',
          errClass: 'text-success'
        })

        localStorage.setItem('userData', JSON.stringify(data))
      } else {
        setAllVal(prev => ({ ...prev, errMsg: `${data[0].field}: ${data[0].message} `, errClass: 'text-danger' }))
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  const [userData, setUserData] = useState(null)

  const handleGetUserData = () => {
    const api = 'https://gorest.co.in/public/v2/users'

    const options = {
      method: 'GET',
      headers: {
        Authorization: 'Bearer 3422b05153fdc1a7c075372fb4a534e449fbbc6e0ae3aad7aec4d7a2e02d37a1'
      }
    }

    fetch(api, options)
      .then(response => response.json())
      .then(data => {
        console.log('User Data:', data)
        setUserData(data)
      })
      .catch(error => {
        console.error('Error fetching user data:', error)
      })
  }

  return (
    <div className="d-flex">
      <div className="flex w-25 mx-auto mt-5">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Id</label>
            <input
              type="id"
              className="form-control"
              id="id"
              aria-describedby="nameHelp"
              value={allVal.name}
              onChange={(e) => setAllVal({ ...allVal, name: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              aria-describedby="nameHelp"
              value={allVal.name}
              onChange={(e) => setAllVal({ ...allVal, name: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              value={allVal.email}
              onChange={(e) => setAllVal({ ...allVal, email: e.target.value })}
            />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>

          <div className="mb-3">
            <label className="form-label">Gender</label>
            <div className="d-flex align-items-center mb-3 gap-3">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="radioMale"
                  value="male"
                  checked={allVal.gender === 'male'}
                  onChange={(e) => setAllVal({ ...allVal, gender: e.target.value })}
                />
                <label className="form-check-label" htmlFor="radioMale">Male</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="radioFemale"
                  value="female"
                  checked={allVal.gender === 'female'}
                  onChange={(e) => setAllVal({ ...allVal, gender: e.target.value })}
                />
                <label className="form-check-label" htmlFor="radioFemale">Female</label>
              </div>
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="status" className="form-label">Status</label>
            <select
              className="form-select"
              id="status"
              value={allVal.status}
              onChange={(e) => setAllVal({ ...allVal, status: e.target.value })}
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>

          <b className={allVal.errClass}>{allVal.errMsg}</b>
          <button type="submit" className="btn btn-primary">Sign Up</button>
          <button>Patch</button>
          <button>Put</button>
        </form>
      </div>
      <div className="">
        <button onClick={handleGetUserData}>
          Get User Data
        </button>
        <ul className="list-group">
          {
            userData && userData.map((user, index) => (
              <li className="list-group-item" key={user.id || index}>
                <b>ID:</b> {user.id} | <b>Name:</b> {user.name} | <b>Email:</b> {user.email} | <b>Gender:</b> {user.gender} | <b>Status:</b> {user.status}
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default App
