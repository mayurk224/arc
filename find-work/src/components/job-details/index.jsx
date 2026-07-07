import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Cookie from 'js-cookie'
import { Link } from 'react-router-dom'
import './index.css'
import Header from '../header/index'

const JobDetails = () => {
    const { id } = useParams()
    const [jobData, setJobData] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const api = `https://apis.ccbp.in/jobs/${id}`
        const token = Cookie.get("token")
        const options = {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        fetch(api, options)
            .then(response => response.json())
            .then(data => {
                setJobData(data)
                setLoading(false)
            })
            .catch(error => {
                console.error('Error fetching job details:', error)
                setLoading(false)
            })
    }, [id])

    if (loading) {
        return (
            <div className="">
                <div className="">
                    <Header />
                </div>
                <div className="job-details-page">Loading...</div>
            </div>
        )
    }

    const { job_details, similar_jobs } = jobData || {}
    const { skills, life_at_company } = job_details || {}

    return (
        <div className="">
            <div className="">
                <Header />
            </div>
            <div className="job-details-page">
                <div className="job-details-container">
                    <div className="job-detail-card">
                        <div className="job-card-header">
                            <img src={job_details.company_logo_url} alt="company logo" className="company-logo" />
                            <div className="company-info">
                                <h5 className="company-name">{job_details.title}</h5>
                                <div className="rating">
                                    <span className="star">★</span>
                                    <span>{job_details.rating}</span>
                                </div>
                            </div>
                        </div>
                        <div className="job-card-footer">
                            <div className="job-details">
                                <span className="detail-item">📍 {job_details.location}</span>
                                <span className="detail-item">💼 {job_details.employment_type}</span>
                                <span className="detail-item">💰 {job_details.package_per_annum}</span>
                            </div>
                        </div>
                        <div className="description-section">
                            <div className="description-header">
                                <h3>Description</h3>
                                {job_details.company_website_url && (
                                    <a href={job_details.company_website_url} target="_blank" rel="noopener noreferrer" className="visit-link">
                                        Visit Website →
                                    </a>
                                )}
                            </div>
                            <p className="job-description">{job_details.job_description}</p>
                        </div>
                        {skills && skills.length > 0 && (
                            <div className="skills-section">
                                <h3>Skills</h3>
                                <div className="skills-list">
                                    {skills.map((skill, index) => (
                                        <div key={index} className="skill-item">
                                            <img src={skill.image_url} alt={skill.name} className="skill-icon" />
                                            <span className="skill-name">{skill.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        {life_at_company && (
                            <div className="life-at-company-section">
                                <h3>Life at Company</h3>
                                <div className="life-at-company-content">
                                    <p className="life-description">{life_at_company.description}</p>
                                    <img src={life_at_company.image_url} alt="life at company" className="life-image" />
                                </div>
                            </div>
                        )}
                    </div>
                    {similar_jobs && similar_jobs.length > 0 && (
                        <div className="similar-jobs-section">
                            <h3>Similar Jobs</h3>
                            <div className="similar-jobs-list">
                                {similar_jobs.map((job) => (
                                    <Link key={job.id} to={`/jobs/${job.id}`} className="similar-job-card">
                                        <div className="job-card-header">
                                            <img src={job.company_logo_url} alt="company logo" className="company-logo-small" />
                                            <div className="company-info">
                                                <h5 className="company-name">{job.title}</h5>
                                                <div className="rating">
                                                    <span className="star">★</span>
                                                    <span>{job.rating}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="job-card-content">
                                            <h4 className="job-title">Description</h4>
                                            <p className="job-description">{job.job_description}</p>
                                        </div>
                                        <div className="job-card-footer">
                                            <div className="job-details">
                                                <span className="detail-item">📍 {job.location}</span>
                                                <span className="detail-item">💼 {job.employment_type}</span>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default JobDetails