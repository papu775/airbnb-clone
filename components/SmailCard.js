import React from 'react'
import Image from 'next/image'

const SmailCard = ({ img, location, distance }) => {
    return (
        <div className='flex items-center m-2 my-5 space-x-4 rounded-xl cursor-pointe hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out'>
            {/* left */}
            <div className="relative h-16 w-16">
                <Image
                    src={img}
                    alt='...'
                    layout='fill'
                    className='rounded-lg'
                />
            </div>
            {/* right */}
            <div>
                <h2 className='font-bold'>{location}</h2>
                <h3 className='font-semibold text-gray-500'>{distance}</h3>
            </div>
        </div>
    )
}

export default SmailCard