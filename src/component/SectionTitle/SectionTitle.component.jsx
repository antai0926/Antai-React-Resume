import React from 'react';
import './SectionTitle.styles.scss';

const SectionTitle = (props) => {
  return <div className="section-title">{props.children}</div>;
};

export default SectionTitle;
