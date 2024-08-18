import React from 'react'
import SkillItem from './SkillItem';

const SkillsSection = () => {
    return (
        <section id="skills" className="skills-section">
            <h2>My Skills</h2>
            <div className="skills-grid">
                <SkillItem skill="HTML" />
                <SkillItem skill="CSS" />
                <SkillItem skill="JavaScript" />
                <SkillItem skill="jQuery" />
                <SkillItem skill="Bootstrap" />
                <SkillItem skill="KnockoutJS" />
                <SkillItem skill="Tailwind CSS" />
                <SkillItem skill="React (Fundamentals)" />
                <SkillItem skill="AngularJS (Fundamentals)" />
            </div>
        </section>
    );
}

export default SkillsSection
