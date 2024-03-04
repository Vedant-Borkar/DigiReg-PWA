import React from "react";
import Domains from "../../Assets/domains.png";
import AIML from "../../Assets/AiMlDomain.png";
import BlockChain from "../../Assets/BlockChainDomain.png";
import WebApp from "../../Assets/WebDevDomain.png";
import SocialApp from "../../Assets/SocialDomain.png";
import VF from "../../Assets/vegetables&fruits.webp";
import ESS from "../../Assets/essentials.webp";
import GROCERY from "../../Assets/grocery.jpg";
import DAIRY from "../../Assets/Dairy.jpg";
import "./Tracks.css";
const Tracks = () => {
  return (
    <div className="whole_track_section">
      {/* <div className="about_heading">
        <img src={Domains} alt="" />
      </div> */}
      <div className="about_heading">
        <p className="x">Categories</p>
      </div>
      <div className="domainsDiv">
        <div className="domain">
          <img src={FV} alt="" />
        </div>
        <div className="domain">
          <img src={WebApp} alt="" />
        </div>
        <div className="domain">
          <img src={BlockChain} alt="" />
        </div>
        <div className="domain">
          <img src={SocialApp} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Tracks;