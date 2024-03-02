import React, { useState, useEffect } from "react";
import "./Home.css";
import Header from "../../Assets/Heading.png";
import NavBar from "../NavBar/NavBar";
import About from "../About/About";
import Tracks from "../Tracks/Tracks";
import Icon from '../../Assets/logo.png'
//import Schedule from "../Schedule/Schedule";
import Faq from "../Faq/Faq";
import Prizes from "../Prizes/Prizes";
import Sponsors from "../Sponsors/Sponsors";
import Footer from "../Footer/Footer";
import titleSponsor from "../../Assets/Sponsors/teknowhiteremovebg.png";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
//import Shortlisted from "../Shortlisted/Shortlisted";

const Home = () => {
  const targetDate = "jan 31, 2024 23:59:59";
  const redirectToLink = () => {
    // Replace '/desired-link' with your target link
    window.location.href = "https://tsec-hacks-2024.devfolio.co/";
  };
  return (
    <div>
      <div className="navBar">
          <NavBar />
      </div>
      <div className="heroSection">  
      <Carousel className="carousel" infiniteLoop={true}>
          <div>
            <img src={Icon} alt="" width={80} />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src={Icon} alt="" width={80}/>
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src={Icon} alt="" width={80}/>
            <p className="legend">Legend 1</p>
          </div>
        </Carousel>
      </div>
      
      
      <div className="aboutSection" id="about">
        <About />
      </div>
      <div className="tracks_section" id="tracks">
        <Tracks />
      </div>
      <div className="Prizes_section" id="prizes">
        <Prizes />
      </div>
      <div className="sponsors_section" id="sponsors">
        <Sponsors />
      </div>
      <div className="faq_section" id="faqs">
        <Faq />
      </div>
      <Footer />
    </div>

    
  );

};
export default Home;
