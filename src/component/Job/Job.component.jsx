import React from 'react';
import './Job.styles.scss';

const Job = (props) => {
  const { company, title, period, description } = props;
  return (
    <div className="job">
      <div className="job-title-container">
        <div>
          <div className="job-company">{company}</div>
          <div className="job-title">{title}</div>
        </div>
        <div>{period}</div>
      </div>
      {description}
    </div>
  );
};

export default Job;
