import React, { useEffect, useState } from 'react'
import './index.css'
import Header from '../header'
import FilterSection from '../filterSection'
import JobCard from '../job-card'
import Cookie from 'js-cookie'

const Jobs = () => {

  const [allVal, setAllVal] = useState({
    jobs: [],
    user: {},
  })

  const [loading, setLoading] = useState({
    jobs: true,
    user: true,
  })

  useEffect(() => {
    const getAllJobs = async () => {
      const api = "https://apis.ccbp.in/jobs"
      const token = Cookie.get("token")

      const options = {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      }

      try {
        const response = await fetch(api, options)
        const data = await response.json()
        console.log(data)
        if (response.ok) {
          setAllVal(prev => ({
            ...prev,
            jobs: data.jobs,
          }))
        }
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(prev => ({ ...prev, jobs: false }))
      }
    }

    const getUserInfo = async () => {
      const api = "https://apis.ccbp.in/profile"
      const token = Cookie.get("token")

      const options = {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      }

      try {
        const response = await fetch(api, options)
        const data = await response.json()
        console.log(data)
        if (response.ok) {
          setAllVal(prev => ({
            ...prev,
            user: data.profile_details,
          }))
        }
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(prev => ({ ...prev, user: false }))
      }
    }

    getUserInfo()
    getAllJobs()
  }, [])

  return (
    <div>
      <Header />
      <section className="container row">
        <div className="profile-filter col-md-4">
          {
            loading.user ? (
              <div className="loading">
                <div className="loading-spinner"></div>
                <p>Loading...</p>
              </div>
            ) : (
              <div className="profile">
                <img src={allVal.user.profile_image_url} alt={allVal.user.name} className="profile-img" />
                <div className="profile-info">
                  <h4>{allVal.user.name}</h4>
                  <p>{allVal.user.short_bio}</p>
                </div>
              </div>
            )
          }
          <div className="filter">
            <FilterSection />
          </div>
        </div>
        <div className="jobs-listing col-md-8">
          <div className="search-section">
            <div className="search-input-wrapper">
              <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
              <input type="search" placeholder="Search jobs by title, company, or location..." className="search-input" />
            </div>
          </div>
          <div className="job-cards-container">
            {loading.jobs ? (
              <div className="loading">
                <div className="loading-spinner"></div>
                <p>Loading...</p>
              </div>
            ) : allVal.jobs.length === 0 ? (
              <div className="no-jobs">
                <div className="no-jobs-icon">🔍</div>
                <h3>No jobs found</h3>
                <p>Try adjusting your filters or search terms</p>
              </div>
            ) : (
              allVal.jobs.map(job => (
                <JobCard key={job.id} job={job} />
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Jobs