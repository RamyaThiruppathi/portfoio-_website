import React from 'react';
import './Home.css';
import resume from '../../assets/RESUME.pdf'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Home = () => {
  return (
    <div className='home' id="home">
        <h1><span>I'm Ramya,</span> full stack developer</h1>
        <p> As a fresher in the industry, I am eager to apply my skills and knowledge to create impactful and innovative web applications.</p>
        <div className="home-action">
          <div className="home-connect">
            <AnchorLink href ='#contact'>Connect with me</AnchorLink>
          </div>
          <div className="home-resume">
            <a href={resume}>My resume</a>
          </div>
        </div>
    </div>
  )
}

export default Home