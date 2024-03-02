import React from 'react'
import "./Footer.css"
import logo from "../../Assets/codecell-logo.png"
import { FaUser } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
       <footer>
      <div className="container">
      <div className=" ContactStrap ">
        <div className=" contactDiv">
        <FaUser color='#fff' size='30'
        />
          <h4 className="text-white">Jagjeet Singh Sappal</h4>
          <p className="text-white">+91 77189 96469</p>
        </div>
        <div className="contactDiv ">
        <FaUser color='#fff' size='30'
        />
          <h4 className="text-white">Mohib Abbas Sayed</h4>
          <p className="text-white">+91 77180 99523</p>
        </div>
      </div>
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-12 col-xs-12">
          
            <div className="footer-logo">
              <img id="footer-logo" src={logo} alt=""/>
            </div>
            <div className="social-icons-footer">
              <ul>
                <li className="facebook"><a target="_blank" href="https://www.facebook.com/TSECCodeCell/"><i className="fa-brands fa-facebook"></i></a></li>
                <li className="twitter"><a target="_blank" href="https://www.linkedin.com/company/tsec-codecell/"><i className="fa-brands fa-linkedin"></i></a></li>
                <li className="pinterest"><a target="_blank" href="https://www.instagram.com/tseccodecell/"><i class="fa-brands fa-instagram"></i></a></li>
              </ul>
            </div>
            <div className="site-info">
              <p>Designed and Developed by <a href="https://www.tseccodecell.com" rel="nofollow">TSEC CodeCell</a></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer
