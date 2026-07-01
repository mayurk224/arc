import React from 'react'
import './index.css'

const FilterSection = () => {
  return (
    <div className="filter-section">
      <h5 className="filter-title">Filter</h5>
      <hr />
      <div className="filter-content">
        <div className="filter-item">
          <div className="filter-label">Job Type</div>
          <div className="filter-select">
            <div className="checkbox-group">
              <label className="checkbox-option">
                <input type="checkbox" name="job-type" value="Full Time" />
                <span>Full Time</span>
              </label>
              <label className="checkbox-option">
                <input type="checkbox" name="job-type" value="Part Time" />
                <span>Part Time</span>
              </label>
              <label className="checkbox-option">
                <input type="checkbox" name="job-type" value="Internship" />
                <span>Internship</span>
              </label>
              <label className="checkbox-option">
                <input type="checkbox" name="job-type" value="Freelance" />
                <span>Freelance</span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="filter-item">
        <div className="filter-label">Salary Range</div>
        <div className="filter-select">
          <div className="radio-group">
            <label className="radio-option">
              <input type="radio" name="salary-range" value="" defaultChecked />
              <span>All</span>
            </label>
            <label className="radio-option">
              <input type="radio" name="salary-range" value="10-lpa-and-above" />
              <span>10 LPA and above</span>
            </label>
            <label className="radio-option">
              <input type="radio" name="salary-range" value="20-lpa-and-above" />
              <span>20 LPA and above</span>
            </label>
            <label className="radio-option">
              <input type="radio" name="salary-range" value="30-lpa-and-above" />
              <span>30 LPA and above</span>
            </label>
            <label className="radio-option">
              <input type="radio" name="salary-range" value="40-lpa-and-above" />
              <span>40 LPA and above</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterSection