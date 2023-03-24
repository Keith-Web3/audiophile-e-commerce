import { AnimatePresence } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom'
import { nanoid } from 'nanoid'

import Footer from '../shared/Footer'
import Header from '../shared/Header/Header'
import Dropdown from '../UI/Dropdown'

const HomeLayout: React.FC = function () {
  const [isNavOpen, setIsNavOpen] = useState<'open' | 'closed'>('open')
  const location = useLocation()

  useEffect(() => {
    setIsNavOpen('closed')
  }, [location.pathname])

  return (
    <>
      <Outlet />
      <AnimatePresence>
        {isNavOpen === 'open' && <Dropdown key={nanoid()} />}
      </AnimatePresence>
      <Header isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <Footer />
      <ScrollRestoration />
    </>
  )
}

export default HomeLayout
