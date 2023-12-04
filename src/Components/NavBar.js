import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import "./navbar.css";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import { Home } from "./Home";
import { Blog } from "./Blog";
import { Contact } from "./Contact";
import { NoPage } from "./NoPage";
import CycleThrough from "./CycleThrough";
const NavBar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <h2>
            {/* <span>S</span>hreya */}
            <span>P</span>ortfolio
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <Routes>
              <Route index element={<Home />} />
             <Route path="layout" element={<CycleThrough />}/> 
              <Route path="blog" element={<Blog />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<NoPage />} />
              <Route path="weather" element={<NoPage />} />
              {/* /Users/shreyakasare/Documents/ForBack/forwback/src/Weather/WeatherApp/index.html */}
            {/* </Route> */}
          </Routes>

          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="layout">CycleThrough</NavLink>
            </li>
            <li>
              <NavLink to="/about">about</NavLink>
            </li>{" "}
            <li>
              <NavLink to="/service">services</NavLink>
            </li>{" "}
            <li>
              <NavLink to="/contact">contact</NavLink>
            </li>
            <li>
              <NavLink to="/weather">Weather App</NavLink>
            </li>
          </ul>
        </div>

        {/* Social media links */}

        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a href="" target="_shreya">
                <FaFacebookSquare className="facebook" />
              </a>
            </li>

            <li>
              <a href="" target="_shreya">
                <FaInstagramSquare className="instagram" />
              </a>
            </li>

            <li>
              <a href="" target="_shreya">
                <FaYoutubeSquare className="youtube" />
              </a>
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

      {/* <section className="hero-section">
        <p>Welcome</p>
      </section> */}
    </>
  );
};

export default NavBar;
