import { AnimatePresence } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom'
import { nanoid } from 'nanoid'

import Footer from '../shared/Footer'
import Header from '../shared/Header/Header'
import Dropdown from '../UI/Dropdown'
import Cart from '../shared/Cart'

const HomeLayout: React.FC = function () {
  const [isNavOpen, setIsNavOpen] = useState<'open' | 'closed'>('open')
  const [isCartOpen, setIsCartOpen] = useState(false)
  const location = useLocation()

  const closeCart = function (e: MouseEvent) {
    if (
      !(
        (e.target as HTMLElement).closest('.cart__container') ||
        (e.target as HTMLElement).className === 'cartIcon'
      )
    ) {
      setIsCartOpen(false)
    }
  }

  useEffect(() => {
    setIsNavOpen('closed')
  }, [location.pathname])

  useEffect(() => {
    document.getElementById('root')?.addEventListener('click', closeCart)

    return () => {
      document.getElementById('root')?.removeEventListener('click', closeCart)
    }
  }, [])

  return (
    <>
      <Outlet />
      <AnimatePresence>
        {isNavOpen === 'open' && <Dropdown key={nanoid()} />}
        {isCartOpen && <Cart />}
      </AnimatePresence>
      <Header
        isNavOpen={isNavOpen}
        setIsNavOpen={setIsNavOpen}
        setIsCartOpen={setIsCartOpen}
      />
      <Footer />
      <ScrollRestoration />
    </>
  )
}

export default HomeLayout
