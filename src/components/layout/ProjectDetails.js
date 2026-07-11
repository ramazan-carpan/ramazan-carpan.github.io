import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import portfolioItems from '../../data/projets/index';

const ProjectDetails = () => {
  const { id } = useParams(); // Get project ID from the URL

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component loads
  }, []);

  // Use .find() to locate the project by ID
  const project = portfolioItems.find((item) => item.id === parseInt(id, 10));

  if (!project) {
    return (
      <section className="project-details text-center">
        <h2 className="error-title">Project Not Found</h2>
        <p>The project you're looking for doesn't exist.</p>
        <a href="/" className="error-link">Go Back to Home</a>
      </section>
    );
  }

  return (
    <div className="project-details">
      <div className="project-details__container">
        <Link to="/#work" className="project-back-link">
          <i className="fa-solid fa-arrow-left" aria-hidden="true"></i> Back to Work
        </Link>

        {/* Hero Section */}
        <section className="project-hero">
          <img src={project.ProjectImage} alt={project.title} className="project-hero__img" />
          <div className="project-hero__body">
            <span className="project-hero__eyebrow">Case Study</span>
            <h1 className="project-hero__title">{project.title}</h1>
            <p className="project-hero__desc">{project.description}</p>
          </div>
        </section>

        {/* Purpose Section */}
        <section className="project-card">
          <h2 className="project-card__title">
            <i className="fa-solid fa-bullseye" aria-hidden="true"></i> Project Purpose
          </h2>
          <p className="project-purpose">{project.purpose}</p>
        </section>

        {/* Features Section */}
        <section className="project-card">
          <h2 className="project-card__title">
            <i className="fa-solid fa-list-check" aria-hidden="true"></i> Features
          </h2>
          <div className="feature-grid">
            {project.features.map((featureItem, index) => (
              <div className="feature-block" key={index}>
                <span className="feature-block__role">{featureItem.feature}</span>
                <ul>
                  {featureItem.info.map((infoDetail, idx) => (
                    <li key={idx}>{infoDetail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Photo Section */}
        <section className="project-card project-card--photos">
          <h2 className="project-card__title">
            <i className="fa-solid fa-images" aria-hidden="true"></i> Photos
          </h2>
          <div id="projectCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {project.images.map((image, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? 'active' : ''}`}
                >
                  <div className="carousel-image-container">
                    <img
                      src={image}
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="carousel-image"
                    />
                  </div>
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#projectCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#projectCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </section>

        {/* What I Used Section */}
        <section className="project-card">
          <h2 className="project-card__title">
            <i className="fa-solid fa-toolbox" aria-hidden="true"></i> What I Used
          </h2>
          <div className="services services--tools">
            <div className="service">
              <i className="fa-solid fa-code service__icon" aria-hidden="true"></i>
              <h3>Languages</h3>
              <ul>
                {project.tools.languages.map((language, index) => (
                  <li key={index}>{language}</li>
                ))}
              </ul>
            </div>
            <div className="service">
              <i className="fa-solid fa-layer-group service__icon" aria-hidden="true"></i>
              <h3>Frameworks &amp; Libraries</h3>
              <ul>
                {project.tools.frameworks.map((framework, index) => (
                  <li key={index}>{framework}</li>
                ))}
              </ul>
            </div>
            <div className="service">
              <i className="fa-solid fa-cloud service__icon" aria-hidden="true"></i>
              <h3>Cloud and DevOps</h3>
              <ul>
                {project.tools.devops.map((tool, index) => (
                  <li key={index}>{tool}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Demo Video Section */}
        <section className="project-card">
          <h2 className="project-card__title">
            <i className="fa-solid fa-circle-play" aria-hidden="true"></i> Demo Video
          </h2>
          <div className="video-container">
            <video controls className="video">
              <source src={project.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>

        {/* Source Section */}
        <section className="project-card project-card--center">
          <h2 className="project-card__title">
            <i className="fa-brands fa-github" aria-hidden="true"></i> Source
          </h2>
          <div className="source-links">
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="source-link">
              <i className="fab fa-github source-icon" aria-hidden="true"></i>
              <span>View Source Code</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectDetails;
