import React from 'react'

import speaker from '../../assets/home/mobile/image-speaker-zx9.png'
import Button from '../UI/Button'
import Products from '../shared/Products'
import '../../sass/pages/homepage.scss'

const Homepage: React.FC = function () {
  return (
    <div className="homepage">
      <section className="hero-section">
        <div className="container">
          <h1>XX99 Mark II Headphones</h1>
          <p>NEW PRODUCT</p>
          <p>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button className="button-one">see product</Button>
        </div>
      </section>
      <section className="section-two">
        <div className="container">
          <Products />
          <div className="zx9">
            <img src={speaker} alt="speaker" />
            <h2>ZX9 SPEAKER</h2>
            <p>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Button className="button-four">see product</Button>
          </div>
          <div className="zx7">
            <h2>ZX7 SPEAKER</h2>
            <Button className="button-two">see product</Button>
          </div>
          <div className="yx1">
            <div className="img"></div>
            <div className="info">
              <h2>YX1 EARPHONES</h2>
              <Button className="button-two">see product</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Homepage
