import Link from 'next/link'
import React from 'react'
import MobileMenu from './MobileMenu'

const Navbar = () => {
  return (
      <div className='flex items-center justify-between h-24'>

        {/* //todo LEFT */}
    <div>
        <Link className='font-bold text-xl text-blue-600' href={"/"}>Insta 1915</Link>
    </div>
    {/* //todo CENTER */}
    <div className='hidden'>b</div>
    {/* //todo RIGHT */}
    <div><MobileMenu/></div>

    </div>

  )
}

export default Navbar