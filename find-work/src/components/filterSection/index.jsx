import React from 'react'
import './index.css'

const FilterSection = () => {
  const jobTypes = [
    { value: "Full Time", label: "Full Time" },
    { value: "Part Time", label: "Part Time" },
    { value: "Internship", label: "Internship" },
    { value: "Freelance", label: "Freelance" }
  ];
  const salaryRanges = [
    { value: "", label: "All", defaultChecked: true },
    { value: "10-lpa-and-above", label: "10 LPA and above" },
    { value: "20-lpa-and-above", label: "20 LPA and above" },
    { value: "30-lpa-and-above", label: "30 LPA and above" },
    { value: "40-lpa-and-above", label: "40 LPA and above" }
  ]
  return (
    <div className="filter-section">
      <h5 className="filter-title">Filter</h5>
      <hr />
      <div className="filter-content">
        <div className="filter-item">
          <div className="filter-label">Job Type</div>
          <div className="filter-select">
            {(() => {
              return (
                <div className="checkbox-group">
                  {jobTypes.map((type) => (
                    <label key={type.value} className="checkbox-option">
                      <input type="checkbox" name="job-type" value={type.value} />
                      <span>{type.label}</span>
                    </label>
                  ))}
                </div>
              );
            })()}
          </div>
        </div>
      </div>
      <hr />
      <div className="filter-item">
        <div className="filter-label">Salary Range</div>
        <div className="filter-select">
          <div className="radio-group">
            {salaryRanges.map((range) => (
              <label key={range.value || "all"} className="radio-option">
                <input
                  type="radio"
                  name="salary-range"
                  value={range.value}
                  defaultChecked={range.defaultChecked || false}
                />
                <span>{range.label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterSection