import React from 'react';
import { Link } from 'react-router-dom';
import portfolioItems from '../../data/projets/index';

const Work = () => {
  return (
    <section className="my-work" id="work">
      <h2 className="section__title section__title--work">My Work</h2>
      <p className="section__subtitle section__subtitle--work">
        A selection of my range of work
      </p>
      <div className="portfolio">
        {portfolioItems.map((project) => (
          <Link
            key={project.id}
            to={`/project/${project.id}`}
            state={{ project }}
            className="portfolio__item"
          >
            <div className="portfolio__card">
              <div className="portfolio__img-wrap">
                <img
                  src={project.ProjectImage}
                  alt={project.title}
                  className="portfolio__img"
                />
              </div>
              <div className="portfolio__info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <span className="portfolio__cta">
                  View Case Study <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Work;
