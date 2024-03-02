import React from "react";
import "./Sponsors.css";
import x from "../../Assets/AiMlDomain.png";
import title from "../../Assets/Sponsors/crosscope.png";
import titleSponsor from "../../Assets/Sponsors/teknowhiteremovebg.png"
import platinum1 from "../../Assets/Sponsors/Devfolio_Logo-White.png";
import platinum2 from "../../Assets/Sponsors/Polygon_Logo-White.png";
import gold1 from "../../Assets/Sponsors/oha.png";
import gold2 from "../../Assets/Sponsors/logo-light-text-bg.svg";
import gold3 from "../../Assets/Sponsors/sahara.png";
import domainPartner from '../../Assets/Sponsors/xyz.png';
import drinkPartner from '../../Assets/Sponsors/redbull.png';
import ent from "../../Assets/entertainment_partner.png"
import postman from "../../Assets/Sponsors/postman.png";
import tech from "../../Assets/Sponsors/techblob.png"
// import gold4 from
const Sponsors = () => {
  return (
    <div>
      <div className="sponsor-page">
        {/* <div className="sponsor-section title-sponsor">
          <h2 className="y">Title Sponsor</h2>
          <div className="sponsort">
            <img src={title} alt="title Sponsor" />
          </div>
        </div> */}

        <div className="sponsor-section platinum">
          <h2 className="y">Title Sponsor</h2>
          <div className="platinum-sponsors">
          <a href="https://teknopoint.in" target='_blank'>
            <div className="title">
              <img src={titleSponsor} alt="Title sponsor LOGO" width={50}
              />
            </div>
            </a>
            
          </div>
        </div>
        <div className="sponsor-section platinum">
          <h2 className="y">Platinum Sponsors</h2>
          <div className="platinum-sponsors">
            <div className="sponsor">
              <img src={platinum1} alt="DEVFOLIO LOGO" />
            </div>
            <a href="https://onehealthassist.com">
            <div className="sponsor">
              <img src={gold1} alt="OHA LOGO" width={20} />
            </div>
              </a>
            <div className="sponsor">
              <img src={platinum2} alt="POLYGON LOGO" />
            </div>
          </div>
        </div>

        <div className="sponsor-section gold">
          <h2 className="y">Gold Sponsors</h2>
          <div className="platinum-sponsors">
            
            <div className="sponsorg">
              <img src={gold2} alt="REPLIT LOGO" />
            </div>
            {/* <div className="sponsorg">
              <img src={postman} alt="gold Sponsor POSTMAN" className="postman"/>
            </div> */}
            <div className="sponsorg">
              <img src={gold3} alt="gold Sponsor 3" />
            </div>
          </div>
        </div>


        <div className="sponsor-section gold">
          <h2 className="y">Our Partners</h2>
          <div className="platinum-sponsors">
            <div className="sponsorg">
              <img src={domainPartner} alt="domain partner" />
              <p>Domain Partner</p>
            </div>
            <div className="sponsorg">
              <img src={ent} alt="Entertrainment Partner" />
              <p>Entertainment Partner</p>
            </div>

            <div className="sponsorg education">
              <img src={tech} alt="Entertrainment Partner" />
              <p>Education Partner</p>
            </div>
            {/* <div className="sponsorg">
              <img src={gold2} alt="REPLIT LOGO" />
            </div>
            <div className="sponsorg">
              <img src={gold3} alt="gold Sponsor 3" />
            </div> */}
          </div>
        </div>



        {/* <div className="sponsor-section gold">
          <h2 className="y">Energy Drink Partner</h2>
          <div className="platinum-sponsors">
            <div className="sponsorg">
              <img src={drinkPartner} alt="drink partner" id="redbull" />
            </div>
           
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Sponsors;
