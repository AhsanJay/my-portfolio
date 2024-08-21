import React from 'react'
import ProjectItem from './ProjectItem';

const ProjectsSection = () => {
    return (
        <section id="projects" className="projects-section">
            <h2>My Projects</h2>
            <div className="project-grid">
                <ProjectItem
                    title="Responsive Website"
                    description="Responsive website crafted with Bootstrap and Tailwind CSS for a flexible, modern look"
                    link="#"
                />
                <ProjectItem
                    title="React Slideshow App"
                    description="A React application with smooth animations and dynamic content rendering."
                    link="#"
                />
                <ProjectItem
                    title="KnockoutJS Application"
                    description="A complex application using KnockoutJS for data binding and user interface management."
                    link="#"
                />
                <ProjectItem
                    title="Hospital System Web Applications"
                    description="Designed and implemented front-end interfaces for US hospital systems, focusing on usability, accessibility, and performance. Worked closely with stakeholders to deliver custom features tailored to client needs."
                    link="#"
                />
                <ProjectItem
                    title="Banking Application UI Development"
                    description="Developed and enhanced UIs for two banking applications, including a project focused on OBDX UI creation. Integrated responsive design techniques to ensure optimal performance across devices and platforms."
                    link="#"
                />
            </div>
        </section>
    );
}

export default ProjectsSection
