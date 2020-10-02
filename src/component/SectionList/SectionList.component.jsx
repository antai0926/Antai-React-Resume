import React from 'react';

//Components
import Section from '../Section/Section.component';
import SectionTitle from '../SectionTitle/SectionTitle.component';
import Job from '../Job/Job.component';

const SectionList = (props) => {
  const { sectionTitle, items } = props;
  return (
    <Section>
      <SectionTitle>{sectionTitle}</SectionTitle>
      <div className="items">
        {items.map((item) => {
          return (
            <Job
              key={`${item.company}-${item.title}`}
              company={item.company}
              title={item.title}
              period={item.period}
              description={item.description}
            />
          );
        })}
      </div>
    </Section>
  );
};

export default SectionList;
