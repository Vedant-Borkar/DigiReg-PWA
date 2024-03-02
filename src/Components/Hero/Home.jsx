import React, { useState, useEffect } from "react";
import "./Home.css";
import Header from "../../Assets/Heading.png";
import NavBar from "../NavBar/NavBar";
import About from "../About/About";
import Tracks from "../Tracks/Tracks";
import Schedule from "../Schedule/Schedule";
import Faq from "../Faq/Faq";
import Prizes from "../Prizes/Prizes";
import Sponsors from "../Sponsors/Sponsors";
import Footer from "../Footer/Footer";
import titleSponsor from "../../Assets/Sponsors/teknowhiteremovebg.png";
import Shortlisted from "../Shortlisted/Shortlisted";

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeRemaining = () => {
    const now = new Date();
    const difference = new Date(targetDate) - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return {
        days,
        hours,
        minutes,
        seconds,
      };
    } else {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = "https://apply.devfolio.co/v2/sdk.js";
  //   script.async = true;
  //   script.defer = true;
  //   document.body.appendChild(script);
  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  return (
    <div>
      <div className="timerDiv">
        <h1>Journey into the real of code starts in:</h1>
        <div className="timerBox">
          <div className="indvSection">
            <div className="timerIndvBox glassTimer">
              <span className="timerfont">{timeRemaining.days}</span>
              <p>DAYS</p>
            </div>
          </div>
          <div className="indvSection">
            <div className="timerIndvBox glassTimer">
              <span className="timerfont">{timeRemaining.hours}</span>
              <p>HOURS</p>
            </div>
          </div>
          <div className="indvSection">
            <div className="timerIndvBox glassTimer">
              <span className="timerfont">{timeRemaining.minutes}</span>
              <p>MINUTES</p>
            </div>
          </div>
          <div className="indvSection">
            <div className="timerIndvBox glassTimer">
              <span className="timerfont">{timeRemaining.seconds}</span>
              <p>SECONDS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const targetDate = "jan 31, 2024 23:59:59";
  const redirectToLink = () => {
    // Replace '/desired-link' with your target link
    window.location.href = "https://tsec-hacks-2024.devfolio.co/";
  };
  return (
    <div>
      <div className="heroSection" id="home">
        <div className="navBar">
          <NavBar />
        </div>
        <div className="hero">
            <div className="heroHeader">
          <a href="https://teknopoint.in"  target='_blank'>
              <img src={titleSponsor} alt="" className="titlewala" />
          </a>
              <p >PRESENTS</p>
              <img src={Header} alt="" />
            </div>
          <div className="heroTimer">
            <CountdownTimer targetDate={targetDate} />
            {/* <div className="regButtonDiv"> */}
            {/*  <button className="regBtn" onClick={redirectToLink}>Register Now</button>
            <div
              className="apply-button"
              data-hackathon-slug="tsec-hacks-2024"
              data-button-theme="light"
              style={{ height: "44px", width: "312px" }}
            ></div>*/}
            {/* </div> */}
          </div>
        </div>
      </div>
      <div className="aboutSection" id="about">
        <About />
      </div>
      <div className="shortlisted_section" id="shortlisted">
        <Shortlisted />
      </div>
      <div className="tracks_section" id="tracks">
        <Tracks />
      </div>
      <div className="schedule_section" id="schedule">
        <Schedule />
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
