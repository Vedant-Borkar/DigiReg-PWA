import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import Icon from '../../Assets/logo.png'
import titleSponsorIcon from "../../Assets/Sponsors/teknowhiteremovebgicon.png"

import "./NavBar.css";
const NavBar = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const closeMenu = () => {
    setIsChecked(false);
  };
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <header >
        <nav className="menu--left" role="navigation">
          <div className="menuToggle">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={toggleCheckbox}
            />
            <span></span>
            <span></span>
            <span></span>

            <ul className="menuItem">
              <li>
                <a href="#home" onClick={closeMenu}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={closeMenu}>
                  About
                </a>
              </li>
              <li>
                <a href="#tracks" onClick={closeMenu}>
                  Tracks
                </a>
              </li>
              <li>
                <a href="#prizes" onClick={closeMenu}>
                  Prizes
                </a>
              </li>
              <li>
                <a href="#sponsors" onClick={closeMenu}>
                  Sponsors
                </a>
              </li>
              <li>
                <a href="#faqs" onClick={closeMenu}>
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          <div className="iconToggle">
          <Link to="home" smooth={true} duration={500}>
            <img src={Icon} alt="logo" width={60}/> </Link>
          </div>
        </nav>
        <nav>
          <div  className={scrolling ? 'navFull scrolled' : 'navFull glass'}>
          <div className="icon">
          <Link to="home" smooth={true} duration={500} > 
            <img src={Icon} alt="logo" width={70} /> </Link>
          </div>

            <ul className={scrolling ? 'navList whiteme' : 'navList'}>
              <li>
                <Link to="home" smooth={true} duration={500} className={scrolling ? 'whiteme' : ''}>
                  Homie
                  </Link>
              </li>
              <li>
                <Link to="about" smooth={true} duration={500} className={scrolling ? 'whiteme' : ''}>
                  About
                </Link>
              </li>
              <li>
                <Link to="tracks" smooth={true} duration={500} className={scrolling ? 'whiteme' : ''}>
                  Tracks
                </Link>
              </li>
              <li>
                <Link to="prizes" smooth={true} duration={500} className={scrolling ? 'whiteme' : ''}>
                  Prizes
                </Link>
              </li>
              <li>
                <Link to="sponsors" smooth={true} duration={500} className={scrolling ? 'whiteme' : ''}>
                  Sponsors
                </Link>
              </li>
              <li>
                <Link to="faqs" smooth={true} duration={500} className={scrolling ? 'whiteme' : ''}>
                  Faqs
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
