import React from 'react'
import './index.css'

const FilterSection = ({ jobType, salaryRange, selectedEmploymentTypes, selectedSalaryRange }) => {
  const jobTypes = [
    { value: "FULLTIME", label: "Full Time" },
    { value: "PARTTIME", label: "Part Time" },
    { value: "INTERNSHIP", label: "Internship" },
    { value: "FREELANCE", label: "Freelance" }
  ];
  const salaryRanges = [
    { value: "", label: "All", defaultChecked: true },
    { value: "1000000", label: "10 LPA and above" },
    { value: "2000000", label: "20 LPA and above" },
    { value: "3000000", label: "30 LPA and above" },
    { value: "4000000", label: "40 LPA and above" }
  ]

  const changeJobType = (e) => {
    const { value, checked } = e.target
    jobType(value, checked)
  }

  const changeSalaryRange = (e) => {
    salaryRange(e.target.value)
  }

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
                      <input
                        type="checkbox"
                        name="job-type"
                        value={type.value}
                        onChange={changeJobType}
                        checked={selectedEmploymentTypes.includes(type.value)}
                      />
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
                  checked={selectedSalaryRange === range.value}
                  onChange={changeSalaryRange}
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