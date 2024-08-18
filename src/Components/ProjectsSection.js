import React from 'react'
import ProjectItem from './ProjectItem';

const ProjectsSection = () => {
    return (
        <section id="projects" className="projects-section">
            <h2>My Projects</h2>
            <div className="project-grid">
                <ProjectItem
                    title="Responsive Website"
                    description="A fully responsive website built with Bootstrap and Tailwind CSS."
                    link="#"
                />
                <ProjectItem
                    title="KnockoutJS Application"
                    description="A complex application using KnockoutJS for data binding and user interface management."
                    link="#"
                />
                <ProjectItem
                    title="React Slideshow App"
                    description="A React application with smooth animations and dynamic content rendering."
                    link="#"
                />
            </div>
        </section>
    );
}

export default ProjectsSection
