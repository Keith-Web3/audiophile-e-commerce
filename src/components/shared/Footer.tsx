import React from 'react'
import { NavLink } from 'react-router-dom'

import bestGear from '../../assets/shared/mobile/image-best-gear.jpg'
import logo from '../../assets/shared/desktop/logo.svg'
import facebook from '../../assets/social/facebook.svg'
import instagram from '../../assets/social/instagram.svg'
import twitter from '../../assets/social/twitter.svg'
import '../../sass/shared/footer.scss'

const Footer: React.FC = function () {
  return (
    <div className="footer">
      <div className="container">
        <h2>
          Bringing you the <span>best</span> audio gear
        </h2>
        <img src={bestGear} alt="best" />
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <footer>
        <div className="container">
          <img className="logo" src={logo} alt="logo" />
          <ul>
            <li>
              <NavLink to="/">home</NavLink>
            </li>
            <li>
              <NavLink to="/headphones">headphones</NavLink>
            </li>
            <li>
              <NavLink to="/speakers">speakers</NavLink>
            </li>
            <li>
              <NavLink to="/earphones">earphones</NavLink>
            </li>
          </ul>
          <p className="desc">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <p className="copyright">Copyright 2021. All Rights Reserved</p>
          <div className="social">
            <a href="https://twitter.com/Keith_Web3">
              <img src={facebook} alt="facebook-icon" />
            </a>
            <a href="https://twitter.com/Keith_Web3">
              <img src={twitter} alt="twitter-icon" />
            </a>
            <a href="https://twitter.com/Keith_Web3">
              <img src={instagram} alt="instagram-icon" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
