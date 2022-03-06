import React from 'react'
import Image from 'next/image'
import { SearchIcon,GlobeAltIcon,MenuIcon,UserCircleIcon } from '@heroicons/react/solid'

const Header = () => {
  return (
    <header className=' sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
      {/* left */}
      <div className='relative h-10 flex items-center cursor-pointer my-auto'>
        <Image
          src={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/768px-Airbnb_Logo_B%C3%A9lo.svg.png?20140813142239"}
          alt="..."
          layout='fill'
          objectFit='contain'
          objectPosition='left'
        />
      </div>

      {/* middle -Search */}
      <div className='flex md:border-2 rounded-full py-2 md:shadow-sm'>
         <input type="text" className=' flex-grow outline-none pl-5 bg-transparent text-sm text-gray-600 placeholder-gray-400' placeholder='Start your Search'/>
         <SearchIcon className="h-8 text-white bg-red-400 rounded-full p-2 cursor-pointer hidden md:inline-flex md:mx-2"/>
      </div>

      {/* right */}
      <div className='flex items-center space-x-4 justify-end text-gray-400 cursor-pointer'>
         <p className='hidden md:inline-flex'>Become a host</p>
         <GlobeAltIcon className='h-6'/>
         <div className='flex items-center space-x-2 p-2 shadow-sm border-2 rounded-full'>
            <MenuIcon className='h-6' />
            <UserCircleIcon className='h-6'/>
         </div>
      </div>
    </header>
  )
}

export default Header