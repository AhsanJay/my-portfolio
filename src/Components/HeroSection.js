import React from 'react'
import '../../src/Style-Sheets/HeroSection.css'

const HeroSection = () => {
    return (
        <section className="hero">
            <h1>Welcome to My Portfolio</h1>
            <p>Innovative Front-End Developer with 2.5 years of experience specializing in HTML, CSS, JavaScript, Bootstrap, jQuery, and Knockout.js. Proven expertise in crafting pixel-perfect, user-friendly interfaces across diverse sectors, including healthcare and banking. Adept at transforming client requirements into responsive, accessible web applications through effective collaboration with cross-functional teams. Passionate about delivering engaging digital experiences and driving results.</p>
            <a href="#projects" className="cta-button">View My Work</a>
        </section>
    );
}

export default HeroSection
