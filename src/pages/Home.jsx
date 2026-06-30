import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <div className='w-full bg-[#121218] flex  items-center p-5  ' id='hero'>
        <div className="hero-inner mb-5 flex justify-around">

            <div className="hero-content text-white m-4">
                 <div className="hero-badge p-3">
                    <span className='badge-dot'></span>
                    Available for work
                </div>
                <h1 className="hero-name">
       <span className="gradient-text">Rabia Naz</span>
                </h1>
                <div className="hero-role">
                    <h3>Mern Stack Devloper</h3>
                </div>
                <div className="hero-description">
                   I craft scalable, high-performance web applications with a <br />focus on clean architecture and delightful user experiences. <br /> Passionate about turning complex ideas  into elegant digital products.
                </div>
                <div className="hero-cta flex m-5 gap-5">
                <a href="#projects" className='btn work-btn py-2 px-5 rounded'>View My Work</a>
                <a href="#contact" className='btn  hover:text-[var(--accent)] hover:border hover:border-[var(--accent)] py-2 px-5'>
                    <i className="fa-solid fa-envelope "></i>
                    Get In Touch</a>
                </div>
                <div className="stats-row flex gap-30">
                    <div className="stat">
                        <div className="stat-num">
                             1 <span className='text-purple-600'>+</span>
                        </div>
                        <div className="stat-label">
                           <h4>Years Experience</h4>
                        </div>
                    </div>
                    <div className="stat">
                        <div className="stat-num">
                            <h1> 8 <span className='text-purple-600'>+</span></h1>
                        </div>
                        <div className="stat-label">
                           <h4>Projects Build</h4>
                        </div>
                    </div>
                    <div className="stat">
                        <div className="stat-num">
                             60 <span className='text-purple-600'>+</span>
                        </div>
                        <div className="stat-label">
                           <h4>Connections</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero-visuals">
                <div className="profile-ring">
                    <div className="profile-inner">
                        <span className="profile-initials">
                            <img src="./assets/img/logo.png" alt="" />
                        </span>
                    </div>
                </div>
                {/* <div className="float-badge top-right">
                    ⚡ MERN Stack
                </div> */}
                <div className="float-badge top-right">
                    ⚡ MERN Stack
                </div>
            </div>

        </div>
       

    </div>
  )
}

export default Home