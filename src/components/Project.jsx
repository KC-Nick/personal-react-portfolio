import React from 'react';

const Project = ({ title, description, technologies, link }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <ul>
        {technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
      <a href={link} target="_blank" rel="noreferrer">View Project</a>
    </div>
  );
};

export default Project;