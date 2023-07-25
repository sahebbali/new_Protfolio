import React from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';

import { Slide } from "react-awesome-reveal";

import './skills.css';

const Experience = () => {
  return (
    <section id="skills">
       <Slide direction="down">
       <div className="skillHeader">
       <h4>
          My <span className="green">Skills I Have</span>
        </h4>
        <h1>Skills</h1>
       </div>
      </Slide>

  
      <div className="container experience__container">
        
        <div className="experience__frontend">
          <h3>Front-end Development</h3>
          <Slide direction="left">
            <div className="experience__content">
              <article className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <h4>HTML5</h4>
                </article>
                <article className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <h4>CSS3</h4>
                </article>
                <article className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <h4>JavaScript</h4>
                </article>
                <article className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <h4>Typescript</h4>
                </article>
                <article className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <h4>ReactJS</h4>
                </article>
                <article className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <h4>NextJS</h4>
                </article>
                <article className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <h4>Redux</h4>
                </article>
                <article className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <h4>MaterialUI</h4>
                </article>
                <article className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <h4>SCSS</h4>
                </article>
                <article className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <h4>Tailwind CSS</h4>
                </article>
              </div>
          </Slide>
        </div>
        <Slide direction="right">
         <div className="experience__backend">
          <h3>Back-end Development</h3>
          <div className="experience__content">
          <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>NodeJS</h4>
            </article>
          <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>ExpressJS</h4>
            </article>
          <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>MongoDB</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>FireBase</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>PostgreSQL</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>MySQL</h4>
            </article>
            
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Git/GitHub</h4>
            </article>
          </div>
        </div>
        </Slide>
      </div>
    </section>
  )
}

export default Experience