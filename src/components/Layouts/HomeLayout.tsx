import React from 'react'
import { Outlet } from 'react-router-dom'

import Footer from '../shared/Footer'
import Header from '../shared/Header/Header'

const HomeLayout: React.FC = function () {
  return (
    <>
      <Outlet />
      <Header />
      <Footer />
    </>
  )
}

export default HomeLayout
