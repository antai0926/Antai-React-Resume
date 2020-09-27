import React from 'react';
import './Card.styles.scss';
import ExternalLinkIcon from '../../assets/img/external-link.svg';
import GithubIcon from '../../assets/img/github.svg';

const Card = (props) => {
  const { imgClass, title, description, demoUrl, githubUrl } = props;
  return (
    <div className="card">
      <div className={`card-image ${imgClass}`}></div>
      <div className="card-text">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="card-icons">
        <a href={demoUrl} title="前往網站">
          <img src={ExternalLinkIcon} alt="external-link" />
        </a>
        <a href={githubUrl} title="前往Github">
          <img src={GithubIcon} alt="github-link" />
        </a>
      </div>
    </div>
  );
};

export default Card;
