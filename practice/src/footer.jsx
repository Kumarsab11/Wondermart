import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { RiFacebookFill } from "react-icons/ri";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import "./footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="about">
            <div className="logo">
              <img src="./img/logo.svg" alt="logo"></img>
            </div>
            <div className="detail">
              <p>Thanks for shopping from our site.</p>
              <p>Hope this site is better.</p>
              <div className="icon">
                <li>
                  <RiFacebookFill />
                </li>
                <li>
                  <AiOutlineInstagram />
                </li>
                <li>
                  <AiOutlineTwitter />
                </li>
                <li>
                  <BsYoutube />
                </li>
              </div>
            </div>
          </div>
          <div className="page">
            <h3>Pages</h3>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="tag">
          <h2>Our Team</h2>
          <div className="team">
            <div className="fix">
              <img src="" alt="team1" />
            </div>
            <div className="fix">
              <img src="./img/4.jpeg" alt="team2" />
              <p>Himanshu</p>
            </div>
            <div className="fix">
              <img src="" alt="team3" />
            </div>
            <div className="fix">
              <img src="" alt="team4" />
            </div>
            <div className="fix">
              <img src="" alt="team5" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
