import React from 'react'
import "./Prizes.css"
import firstPrize from "../../Assets/firstprize.png"
import secondPrize from "../../Assets/secondprize.png"
import thirdPrize from "../../Assets/thirdprize.png"
import ScheduleHeading from "../../Assets/schedule.png";
const Prizes = () => {
  return (
    <div className='whole_price_section'>
        <div className="about_heading">
          {/* <img src={ScheduleHeading} alt="" /> */}
          <p className='x'>Prizes</p>
          {/* <p className='x'><i>---- TO BE <br/>DECLARED SOON ----</i></p> */}
        </div>
        <div className="prizes">
          <div className="price_image item1">
            <img src={firstPrize} alt="" />
          </div>
          <div className="price_image">
            <img src={secondPrize} alt="" />
          </div>
          <div className="price_image">
            <img src={thirdPrize} alt="" />
          </div>
        </div>
        
    </div>
  )
}

export default Prizes
