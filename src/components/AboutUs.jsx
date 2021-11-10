import React from 'react';
import Prenumeration from './Prenumeration';

const AboutUs = () => {
  return (
  <>
    <div className="header-about">
      <img className="logo-about" src={'./vegan-plan-logo-white.png'} width={250} alt='vegan plan logo'/>
    </div>
    <div className="about">
      <img className="about-planet" src={'./planet-green.png'} width={180} alt='planet'/>
      <span className="text-over">Vegansk mat</span>
      <h1 className="about-h1">Mat som gör skillnad<br />– för din hälsa &amp; klimatet</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore.
      </p>
      <span className="text-under-small"><p>Till våra recept</p></span>
    </div>
    <Prenumeration />




 
  </>
    );
};

export default AboutUs;
