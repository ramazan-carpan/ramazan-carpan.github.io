import React from 'react';

const Services = () => {
  return (
    <section className="my-services" id="services">
      <h2 className="section__title section__title--services">What I Do</h2>
      <div className="services">
        <div className="service">
        <i className="fa-solid fa-laptop-code service__icon" aria-hidden="true"></i>
        <h3>Frontend Development</h3>
          <p>I design and build responsive, user-friendly interfaces using technologies like:</p>
            <ul>
              <li>React</li>
              <li>React Native</li>
              <li>JavaScript</li>
              <li>CSS and HTML</li>
              <li>Bootstrap and modern UI frameworks</li>
            </ul>
        </div>
        <div className="service">
        <i className="fa-solid fa-server service__icon" aria-hidden="true"></i>
        <h3>Backend Development</h3>
          <p>I develop robust and scalable back-end systems to support web and mobile applications. My expertise includes:</p>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>C# (for ASP.NET Core and MVC)</li>
              <li>Python</li>
              <li>RESTful API design</li>
              <li>Authentication and security (e.g., JWT, Auth)</li>
            </ul>
        </div>
        <div className="service">
        <i className="fa-solid fa-database service__icon" aria-hidden="true"></i>
        <h3>Database Management</h3>
          <p>I create efficient and optimized database solutions tailored to application needs, including:</p>
            <ul>
              <li>SQL Server</li>
              <li>MongoDB (NoSQL)</li>
              <li>Database schema design</li>
              <li>Performance tuning and indexing</li>
              <li>Cloud-based databases (Azure SQL, Cosmos DB)</li>
            </ul>
        </div>
        <div className="service">
        <i className="fa-solid fa-diagram-project service__icon" aria-hidden="true"></i>
        <h3>DevOps</h3>
          <p>I streamline application deployment and maintenance with expertise in:</p>
            <ul>
              <li>Docker</li>
              <li>CI/CD pipelines</li>
              <li>Agile</li>
              <li>Version control with GitHub and GitLab</li>
            </ul>
        </div>
      </div>
      <a href="#work" className="btn">
        My Work
      </a>
    </section>
  );
};

export default Services;
