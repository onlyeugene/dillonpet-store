import React from 'react'
import TransitionLink from './transition-link'
// import { usePathname } from 'next/navigation'

const UserMenu = () => {
  // const path = usePathname()

  return (
    <div className="md:flex hidden gap-5 justify-between w-full text-2xl">
      <TransitionLink
        href="/"
        label="Home"
        // className={path === '/' ? 'text-[#ff8800]' : ''}
      />
      <TransitionLink
        href="/services"
        label="Services"
        // className={path === '/services' ? 'text-[#FF9800]' : ''}
      />
      <TransitionLink
        href="/products"
        label="Products"
        // className={path === '/products' ? 'text-[#FF9800]' : ''}
      />
      <TransitionLink
        href="/about"
        label="About"
        // className={path === '/about' ? 'text-[#FF9800]' : ''}
      />
      <TransitionLink
        href="/contact"
        label="Contact"
        // className={path === '/contact' ? 'text-[#FF9800]' : ''}
      />
    </div>
  )
}

export default UserMenu