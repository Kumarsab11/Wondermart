import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { RiFacebookFill } from "react-icons/ri";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="video">
            <video width='800px' height='350px' autoPlay muted loop>
              <source src="./videos/video.mp4"></source>
            </video>
          </div>
          <div className="about">
            <div className="logo">
              <img src="./img/logo.jpg" alt="logo" width='200px' height='200px'></img>
            </div>
            <div className="detail">
              <p><b>Thanks for shopping from our site.</b></p>
              <p><b>Hope this site is better.</b></p>
              <div className="icon">
                <li id="first">
                  <RiFacebookFill />
                </li>
                <li id="second">
                  <AiOutlineInstagram />
                </li>
                <li id="third">
                  <AiOutlineTwitter />
                </li>
                <li id="fourth">
                  <BsYoutube />
                </li>
              </div>
            </div>
          </div>
          <div className="page">
            <h3>Pages</h3>
            <ul>
              <Link to = "/" className="link">Home</Link>
              <br></br>
              <br></br>
              <Link to = "/about" className="link">About</Link>
              <br></br>
              <br></br>
              <Link to = "/contact" className="link">Contact</Link>
              <br></br>
              <br></br>
              <Link to = "/" className="link">Terms & Conditions</Link>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <h6><pre>        WONDRMART Inc.<br></br>
                  c/o WONDRMART Inc. Copyright Agent<br></br>
                  5900 Balcones Drive STE 100<br></br>
                  Austin, TX 78731 USA<br></br>
                  Phone: 925-726-3596<br></br>
                  Email: info@WONDRMART.com<br></br></pre></h6>
            </ul>
          </div>
        </div>
        <hr />
        <div className="tag">
          <br></br>
          <br></br>
          <h1>Our Team</h1><br></br>
          <br></br>
          <br></br>
          <br></br>
          <div className="team">
            <div className="fix">
              <img src="./img/profile/amit1.jpg" alt="team1" />
              <p>Amit Kumar</p>
            </div>
            <div className="fix">
              <img src="./img/profile/himanshu.jpg" alt="team2" />
              <p>Himanshu Kumar</p>
            </div>
            <div className="fix">
              <img src="./img/profile/pradosh.jpg" alt="team3" />
              <p>Pradosh Pradhan</p>
            </div>
            <div className="fix">
              <img src="./img/profile/rajib.jpg" alt="team4" />
              <p>Rajib Lochana Bishoyi</p>
            </div>
            <div className="fix">
              <img src="./img/profile/sai.jpg" alt="team5" />
              <p>Sai Chandan Majhi</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
