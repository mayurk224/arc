import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'

const JobCard = ({ job }) => {
  const { id, company_logo_url, company_name, location, title, employment_type, package_per_annum, rating, job_description } = job
  return (
    <Link to={`/jobs/${id}`} className="job-card">
      <div className="job-card-header">
        <img src={company_logo_url} alt={company_name} className="company-logo" />
        <div className="company-info">
          <h5 className="company-name">{company_name}</h5>
          <div className="rating">
            <span className="star">★</span>
            <span>{rating}</span>
          </div>
        </div>
      </div>
      <div className="job-card-content">
        <h4 className="job-title">{title}</h4>
        <p className="job-description">{job_description}</p>
      </div>
      <div className="job-card-footer">
        <div className="job-details">
          <span className="detail-item">📍 {location}</span>
          <span className="detail-item">💼 {employment_type}</span>
          <span className="detail-item">💰 {package_per_annum}</span>
        </div>
      </div>
    </Link>
  )
}

export default JobCard
