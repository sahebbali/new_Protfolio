import React from 'react';
import IMG1 from '../../assets/ecommerce.PNG';
import IMG2 from '../../assets/task.PNG';
import IMG3 from '../../assets/inventory.PNG';
import IMG4 from '../../assets/rsz_blood.png';
import IMG5 from '../../assets/dashboard.PNG';
import IMG6 from '../../assets/datatrack.PNG';


import { Slide } from "react-awesome-reveal";

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'E-commerce Application',
      img: IMG1,
      link: 'https://fancy-macaron-4ac74c.netlify.app/',
      github: 'https://github.com/sahebbali/Aungaboron_Client',
    },
    {
      id: 2,
      title: 'Task Manager App',
      img: IMG2,
      link: 'https://task-manager-client-pink.vercel.app/',
      github: 'https://github.com/sahebbali/Task_Manager_Client',
    },
    {
      id: 3,
      title: 'Inventory Management System',
      img: IMG3,
      link: 'https://verdant-melomakarona-f8d7b1.netlify.app/',
      github: 'https://github.com/sahebbali/constractions',
    },
    {
      id: 4,
      title: 'Blood Band App',
      img: IMG4,
      link: 'https://blood-band-app-client.vercel.app/',
      github: 'https://github.com/sahebbali/Blood_Band_App_Client',
    },
    {
      id: 5,
      title: 'Admin Dashboard',
      img: IMG5,
      link: 'https://fluffy-dodol-d36484.netlify.app/',
      github: 'https://github.com/sahebbali/Admin-Dashboard',
    },
    {
      id: 6,
      title: 'Data Trek',
      img: IMG6,
      link: 'https://data-trek.vercel.app/',
      github: 'https://github.com/sahebbali/NextJS_Data-Trek',
    },
  
  ];
  

  return (
    <section id="projects">

      <Slide direction="down">
        <div className="protfolioHeader">
        <h4>
          My <span className="green">Recent Work</span>
        </h4>
        <h1>Projects</h1>
        </div>
      </Slide>
      <Slide direction="left">
      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
          <div className="portfolio__item-image">
            <img src={pro.img} alt={pro.title} />
          </div>
          <h3>{pro.title}</h3>
          <div className="portfolio__item-cta">
            <a href={pro.github} target="_blank"className="btn">GitHub</a>
            <a href={pro.link} target="_blank" className="btn btn-primary">Live Demo</a>
          </div>
        </article>
        ))}   
      </div>
      </Slide>
    </section>
  )
}

export default Portfolio