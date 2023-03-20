import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from '../shared/Header/Header'

const HomeLayout: React.FC = function () {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default HomeLayout
