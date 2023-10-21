'use client'

import { Icon } from '@iconify/react/dist/iconify.js'

const Navbar = () => {
  return (
    <nav className='bg-black-color text-white p-4'>
      <div className='container'>
        <h1 className='text-xl font-semibold'>
          <Icon className='cursor-pointer' icon={'uil:home-alt'} width={'32px'} />
        </h1>
      </div>
    </nav>
  )
}
export default Navbar
