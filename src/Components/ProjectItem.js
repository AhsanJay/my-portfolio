import React from 'react'
import { useState } from 'react';

const ProjectItem = ({ title, description, link }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 86; 

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const displayText = isExpanded ? description : `${description.substring(0, maxLength)}...`;
    return (
        <div className="project-item">
          <h3>{title}</h3>
          <p>{displayText}
          {description.length > maxLength && (
            <span className="toggle-text" onClick={handleToggle}>
              {isExpanded ? ' Read less' : ' Read more'}
            </span>
          )}
          </p>
          <a href={link} className="project-link">View Project</a>
        </div>
      );
}

export default ProjectItem
