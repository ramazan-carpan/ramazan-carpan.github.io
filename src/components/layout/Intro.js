import React from 'react';
import ProfilPhoto from '../../assets/img/profil/ProfilPhoto.jpg';


const Intro = () => {
  return (
    <section className="intro" id="home">
      <img
        src={ProfilPhoto}
        alt="Ramazan Carpan smiling"
        className="intro__img"
      />
      <div className="intro__content">
        <h1 className="section__title section__title--intro">
          Hi, I am <strong>Ramazan Carpan</strong>
        </h1>
        <p className="section__subtitle section__subtitle--intro">Full Stack Developer</p>
      </div>
    </section>
  );
};

export default Intro;
