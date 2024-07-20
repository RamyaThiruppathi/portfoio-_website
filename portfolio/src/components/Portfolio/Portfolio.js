import React from 'react'
import './Portfolio.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Projects_Data from '../../assets/Projects_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Portfolio = () => {
  return (
    <div className='portfolio' id="portfolio">
        <div className="potfolio-title">
            <h1>My Latest work</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="portfolio-container">
            {Projects_Data.map((project,index)=>{
                return <div  key={index} className="portfolio-format">
                            <h3>{project.s_no}</h3>
                            <h2>{project.s_name}</h2>
                            <p>{project.s_desc}</p>
                            <div className="portfolio-readmore">
                                <p>Read More</p>
                                <img src={arrow_icon} alt="" />
                            </div>
                        </div>
            })}  
        </div>
    </div>
  )
}

export default Portfolio