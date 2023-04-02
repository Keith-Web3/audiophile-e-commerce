import React from 'react'
import { Link } from 'react-router-dom'

import errorImg from '../../assets/error/Ilustration.svg'
import '../../sass/pages/page_not_found.scss'
import backArrow from '../../assets/error/Icon.svg'

const PageNotFound = function () {
  return (
    <div className="page-not-found">
      <div className="container">
        <h1>Audiophile</h1>
        <main>
          <div className="message">
            <p>Oops...</p>
            <p>Page not found</p>
            <p>
              This Page doesn`t exist or was removed! We suggest you back to
              home.
            </p>
            <Link to="/" replace>
              <button>
                <img src={backArrow} alt="back" />
                Back to home
              </button>
            </Link>
          </div>
          <img src={errorImg} alt="404 error" />
        </main>
      </div>
    </div>
  )
}

export default PageNotFound
