import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from '../../assets/profile_img.jpg'

const About = () => {
  return (
    <div className="about" id="about">
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections" >
            <div className="about-left">
                <img src={profile_img} alt=""  />
            </div>   
            <div className="about-right">
                <div className="about-para">
                    <p>I am a passionate and dedicated full-stack developer with a strong foundation in web development.</p>
                    <p> Through rigorous coursework and hands-on projects, I have developed a solid understanding of both front-end and back-end technologies.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p>HTML & CSS</p>
                        <hr style={{width:"60%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>Javascript</p>
                        <hr style={{width:"55%"}} />
                    </div>
                    <div className="about-skill">
                        <p>ReactJs</p>
                        <hr  style={{width:"60%"}} />
                    </div>
                    <div className="about-skill">
                        <p>NodeJs</p>
                        <hr  style={{width:"50%"}} />
                    </div>
                    <div className="about-skill">
                        <p>Express Js</p>
                        <hr  style={{width:"57%"}} />
                    </div>
                    <div className="about-skill">
                        <p>MongoDB</p>
                        <hr  style={{width:"60%"}}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default About;
