import React from 'react';
import IMG1 from '../../assets/Memories_Apps.PNG';
import IMG2 from '../../assets/Quiz_App.PNG';
import IMG3 from '../../assets/Constraction.PNG';
import IMG4 from '../../assets/Resturent.PNG';
import IMG5 from '../../assets/online School.PNG';
import IMG6 from '../../assets/Grocery Store.PNG';

import { Slide } from "react-awesome-reveal";

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Memories Apps',
      img: IMG1,
      link: 'https://638a1bb030b5192c573da93b--papaya-empanada-5950b6.netlify.app/posts',
      github: 'https://github.com/sahebbali/project_mern_memories',
    },
    {
      id: 2,
      title: 'Quiz Application',
      img: IMG2,
      link: 'https://638a27681a495235f663eb3c--papaya-empanada-5950b6.netlify.app/',
      github: 'https://github.com/sahebbali/Quiz_App_Client',
    },
    {
      id: 3,
      title: 'Constraction Service',
      img: IMG3,
      link: 'https://verdant-melomakarona-f8d7b1.netlify.app/',
      github: 'https://github.com/sahebbali/constractions',
    },
    {
      id: 4,
      title: 'Resturant',
      img: IMG4,
      link: 'https://merry-peony-9a78e0.netlify.app/#',
      github: 'https://github.com/sahebbali/Resturant',
    },
    {
      id: 5,
      title: 'Online School',
      img: IMG5,
      link: 'https://precious-bombolone-0ef8f5.netlify.app/',
      github: 'https://github.com/sahebbali/Online-School',
    },
    {
      id: 6,
      title: 'Groco Store',
      img: IMG6,
      link: 'https://lovely-crostata-1e3524.netlify.app/',
      github: 'https://github.com/sahebbali/Groco-Store',
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
    </section>
  )
}

export default Portfolio