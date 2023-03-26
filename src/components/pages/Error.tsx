import React from 'react'
import { NavLink, useNavigate, useRouteError } from 'react-router-dom'

import arrow from '../../assets/error/Element 08.svg'
import memphics from '../../assets/error/memphics_017.svg'
import clock from '../../assets/error/material-symbols_nest-clock-farsight-analog-outline.svg'
import '../../sass/pages/error.scss'

const Error: React.FC = function () {
  const error: any = useRouteError()
  const navigate = useNavigate()
  const date = new Date()

  const today = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
  return (
    <div className="error">
      <div className="error__header">
        <button className="home-btn" onClick={() => navigate('/')}>
          Go Home
        </button>
        <nav>
          <NavLink to="/headphones">Headphones</NavLink>
          <NavLink to="/speakers">Speakers</NavLink>
          <NavLink to="/earphones">Earphones</NavLink>
        </nav>
      </div>
      <section className="section-one">
        <div className="container">
          <p>An error has occured. Don't worry it's not you, it's us 🙂</p>
          <button>Alert the developer 💻</button>
          <img src={arrow} alt="arrow" />
        </div>
        <img src={memphics} alt="memphic" />
      </section>
      <section className="section-two">
        <div className="date">
          <img src={clock} alt="clock" />
          <p className="day">{today}</p>
        </div>
        <div className="context">
          <p>For more context:</p>
          <p>{error.message}</p>
        </div>
      </section>
    </div>
  )
}

export default Error
