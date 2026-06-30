import React from "react";

function About() {
  return (
    <div id="#about"
      className="w-full bg-[var(--surface)] flex  items-center  p-5 about  text-[var(--text);
] "
    >
      <div className="section-wrap">
        <div className="about-grid">
          <div className="fade-up visible">
            <p className="section-tag text-[var(--accent3)">About Me</p>
            <h2 className="section-title">
              Passionate about building things that matter
            </h2>
            <div className="about-text">
              <p>
                Hi i'm <strong className="text-white">Rabia Naz</strong>, a{" "}
                <strong className="text-white">Mern-stack Developer</strong>i studied at{" "}
                <strong className="text-white">GCUF</strong>
              </p>
              <p>
                I love crafting both the visible and invisible parts of web
                applications — from pixel-perfect UIs in React.
              </p>
              <p>
               Currently working at <strong className="text-white">Career Institute </strong> as a <strong className="text-white"> Front-End Developer </strong>, building responsive and user-friendly interfaces for a <strong className="text-white"> Laravel-based admin dashboard portal</strong> while collaborating with the team to deliver scalable solutions.

              </p>
            </div>
            <div className="about-info">
              <div className="info-row">
                <div className="info-icon">🎓</div>
                <div className="info-text flex flex-col">
                  <strong className="text-white">Education</strong>
                  Government College University Faisalabad
                </div>
              </div>
               <div className="info-row">
                <div className="info-icon">🏢</div>
                <div className="info-text flex flex-col">
                  <strong className="text-white">Current Role</strong>
                  Front-end Developer in Career Institute
                </div>
              </div>
               <div className="info-row">
                <div className="info-icon">📍</div>
                <div className="info-text flex flex-col">
                  <strong className="text-white">Location</strong>
                  Faisalabad
                </div>
              </div>
            </div>
          </div>
          <div className="fade-up visible skills-Perc">
            <div className="inner-skills-perc">
              <p className="inner-skill-text">Tech I Work With</p>
              <div className="perc flex flex-col gap-3">
                <div className="perc-item">
                  
                  <div className="perc-item-1">
                    <div className="flex justify-between mb-2 ">
                      <span className="span text-[var(--text)]">React / js</span>
                      <div className="text-[var(--muted)]">80%</div>
                    </div>
                    <div className="h-5 perc-item-bar">
                      <div className="react-item-bar-width item-bar-width"></div>
                    </div>
                  </div>
                 
                  <div className="perc-item-1">
                    <div className="flex justify-between mb-2">
                      <span className="span text-[var(--text)]">Node / js</span>
                      <div className="text-[var(--muted)]">70%</div>
                    </div>
                    <div className="h-5 perc-item-bar">
                      <div className="Node-item-bar-width item-bar-width"></div>
                    </div>
                  </div>
                   <div className="perc-item-1">
                    <div className="flex justify-between mb-2">
                      <span className="span text-[var(--text)]">Tailwind Css</span>
                      <div className="text-[var(--muted)]">90%</div>
                    </div>
                    <div className="h-5 perc-item-bar">
                      <div className="tailwind-item-bar-width item-bar-width"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
