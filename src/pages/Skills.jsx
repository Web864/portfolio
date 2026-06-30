import React from 'react'

function Skills() {
  return (
    <div id='skills'>
        <div className="w-full section-wrap bg-[var(--surface)]">
            <div className="section-header fade-up visible">
                <div className="section-tag">Tech STack</div>
                <h2 className="section-title">Skills & Technology</h2>
                <p className="section-subtitle">A curated toolkit built over years of shipping production applications.</p>

            </div>
            <div className="skills-grid">
                
                <div className="skill-chip fade-up visible">
                    <div className="skill-icon">⚛️</div>
                    <div className="skill-name">React.js</div>
                    <div className="skill-level">Proficient</div>
                </div>
                <div className="skill-chip fade-up visible">
                    <div className="skill-icon">🟩</div>
                    <div className="skill-name">Node.js</div>
                    <div className="skill-level">Proficient</div>
                </div>
                <div className="skill-chip fade-up visible">
                    <div className="skill-icon">🍃</div>
                    <div className="skill-name">MongoDB</div>
                    <div className="skill-level">Familiar</div>
                </div>
                <div className="skill-chip fade-up visible">
                    <div className="skill-icon">🟡</div>
                    <div className="skill-name">javaScript</div>
                    <div className="skill-level">Proficient</div>
                </div>
                <div className="skill-chip fade-up visible">
                    <div className="skill-icon">🅱️</div>
                    <div className="skill-name">Bootstrap</div>
                    <div className="skill-level">Advance</div>
                </div>
                <div className="skill-chip fade-up visible">
                    <div className="skill-icon">🎨</div>
                    <div className="skill-name">Tailwaind css</div>
                    <div className="skill-level">Advance</div>
                </div> 
                <div className="skill-chip fade-up visible">
                    <div className="skill-icon">📦</div>
                    <div className="skill-name">Git / Github</div>
                    <div className="skill-level">Advance</div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Skills