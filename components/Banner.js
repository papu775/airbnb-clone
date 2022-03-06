import React from 'react'
import Image from 'next/image'

const Banner = () => {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:[700px]'>
      <Image src="https://links.papareact.com/0fm" 
      layout='fill'
      objectFit='cover'
      />
      <div className='absolute top-1/2 text-center w-full'>
        <p className=' my-3 font-medium text-sm sm:text-2xl md:text-4xl'>Not sure where to go? Perfect.</p>
        <button className='bg-white py-4 px-10 rounded-full shadow-md text-purple-500 font-bold hover:shadow-xl active:scale-90 transition duration-150'>I'm flexible</button>
      </div>
    </div>
  )
}

export default Banner