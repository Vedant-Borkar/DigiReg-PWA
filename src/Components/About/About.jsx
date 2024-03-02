import React, { useState, useEffect } from "react";
import AboutHacks from "../../Assets/abouthacks.png";
import Countup from "react-countup"
import ScrollTrigger from "react-scroll-trigger"
import "./About.css";
const About = () => {
 
  const [cou, setcou] = useState(true);

  const [Height, setHeight] = useState(0);
  const [isvalid,setvalid]=useState(false);
    const calculatedivvi = () => {
      const screenWidth = window.innerWidth;
      const motionalDivisionHeight = document.querySelector('.photo_one')?.clientHeight|| 0;
      if(motionalDivisionHeight){
        setHeight(motionalDivisionHeight);
      }
    };
  
    useEffect(() => {
      calculatedivvi();
      window.addEventListener('resize', calculatedivvi);
  
      return () => {
        window.removeEventListener('resize', calculatedivvi);
      };
    }, []);

  return (
    
    <div className="whole_about_section">
      <div className="about_heading">
        <p className="x">About us</p>
      </div>
      <ScrollTrigger onEnter={()=>{setcou(true);console.log("in");}} onExit={()=>setcou(false)}>
      <div className="card-container">
        <div className="card glassy-effect">
          <h1 className="text1">
            <span>{cou && <Countup start={0} end={4} duration={4}></Countup>}</span>
            {/* 4  */}
          </h1>
          <p>Themes</p>
        </div>
        <div className="card glassy-effect">
          <h1 className="text1">
            <span>{cou && <Countup start={0} end={23} duration={4}></Countup>} +</span>
            {/* 23 */}
          </h1>
          <p>Hours of Hacking</p>
        </div>
        <div className="card glassy-effect">
          <h1 className="text1">
            <span>{cou && <Countup start={0} end={914} duration={4}></Countup>} +</span>
            {/*914*/}
          </h1>
          <p>Participants</p>
        </div>
      </div>
      </ScrollTrigger>
      <div className="second-container">
        <div className="child-div" style={Height?{ height: `${Height}px` }:{}}>
          <p>What is hacks?</p>
          <p className="text_info">
            TSEC Hacks stands as the Flagship event by TSEC
            CodeCell at Thadomal Shahani Engineering College, Bandra. This
            annual hackathon is a 24-hour, in-person extravaganza crafted to
            cultivate inventive problem-solving skills in a real-world context.
            It serves as a dynamic platform, attracting participants from
            diverse backgrounds to collaboratively explore and innovate. Rooted
            in the ethos of TSEC, the event is more than just a hackathon—it's
            an immersive experience designed to inspire, empower, and propel technological innovators.
            {/* <br></br> <br></br>{" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. */}
          </p>
        </div>
        <div className="child-div photo_one"  >
          <h5>CodeCell's Team</h5>
          <div className="inside_image my-5 h-44 w-full sm:h-64 rounded-2xl"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
