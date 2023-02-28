import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaInstagram,
  FaPlay,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="contactSection">
          <div className="row justifyConter">
            <div className="col-6">
              <div className="contactSection-logo">
                <img src="/images/logo.png" alt="" />
              </div>
              <p><center>Copyright © 2023 My Home | AUTHOR: Rakesh (Tuffan™)....</center></p>
              <ul className="contactCircles">
              <a href="https://www.facebook.com/profile.php?id=100018360588942">  <li>
                  <FaFacebookF className="contactIcon" />
                </li></a>
                <a href="https://www.linkedin.com/in/rakeshsahu15/">  <li>
                  <FaLinkedin className="contactIcon" />
                </li></a>
                <a href="https://www.github.com/rakeshsahu15">  <li>
                  <FaGithub className="contactIcon" />
                </li></a>
                <a href="https://www.instagram.com/ra.kesh._">  <li>
                  <FaInstagram className="contactIcon" />
                </li></a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
