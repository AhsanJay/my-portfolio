import React from 'react'

const ProjectItem = ({ title, description, link }) => {
    return (
        <div className="project-item">
          <h3>{title}</h3>
          <p>{description}</p>
          <a href={link} className="project-link">View Project</a>
        </div>
      );
}

export default ProjectItem
