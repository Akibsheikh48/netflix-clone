import React from "react";
import './Footer.css';
import { Link } from "react-router-dom";
import {SiNetflix} from 'react-icons/si'
import {   
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaLinkedin, FaGithub
  } from "react-icons/fa";





function Footer() {
  return (
    <div className='footer_container'>
      <section className="social_media">
        <div className="social_media_wrap">
          <div className="footer_logo">
            <div className="social_logo">
              <SiNetflix  className="n_logo"/>
              
            </div>
          </div>
          <small className="website_rights">AKIB © 2020</small>
          <div className="social_icons">
            <Link
              className="social_icon_link"
              to={"//www.github.com/Akibsheikh48"}
              target="_blank"
              aria_label="Facebook"
            >
              <FaGithub />
            </Link>
            <Link
              className="social_icon_link"
              to={"//www.instagram.com/akibsheikh1/?igshid=1n35acwkvzx00"}
              target="_blank"
              aria_label="Instagram"
            >
              <FaInstagram />
            </Link>
            <Link
              className="social_icon_link"
              to={
                "//www.youtube.com/channel/UC3rtUUwsd09W6yZ6dkR8Wmw?view_as=subscriber"
              }
              target="_blank"
              aria_label="Youtube"
            >
              <FaYoutube />
            </Link>
            <Link
              className="social_icon_link"
              to={"//WWW.twitter.com/akibsheikh48?s=03"}
              target="_blank"
              aria_label="Twitter"
            >
              <FaTwitter />
            </Link>
            <Link
              className="social_icon_link"
              to="//www.linkedin.com/in/akib-sheikh-bb5a17190"
              target="_blank"
              aria_label="LinkedIn"
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
