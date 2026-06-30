import React from 'react'
import './index.css'

const NotFoundPage = () => {
  return (
    <div>
      <header>FindWork</header>
      <section className="not-found-section">
        <div className="btn-container">
          <button>
            <i className="ri-arrow-left-line"></i>
            Go Back
          </button>
        </div>
        <div className="not-found-container">
          <h1>404. Sorry, we can't find the page you're looking for.</h1>
        </div>
      </section>
    </div>
  )
}

export default NotFoundPage