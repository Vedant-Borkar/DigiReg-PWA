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
          <img className="img1" src={VF} alt="" / >
          <p className="img-content">Fruits & Vegetables</p>

        </div>
        <div className="domain">
          <img className="img2" src={GROCERY} alt="" / >
          <p className="img-content">Grocery</p>
        </div>
        <div className="domain">
          <img className="img3" src={DAIRY} alt="" / >
          <p className="img-content">Dairy</p>
        </div>
        <div className="domain">
          <img className="img4" src={ESS} alt="" / >
          <p className="img-content">Essentials</p>
        </div>
      </div>
    </div>
  );
};

export default Tracks;
