import React from 'react'

const Header = () => {
  return (
    <header>
        <nav>
            <div className="logo">
                <img src="/logo.png" alt="logo" />
                <h1>FindWork</h1>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <a href="/">
                            <i className="ri-home-line"></i>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/jobs">
                            <i className="ri-job-line"></i>
                            Jobs
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Header