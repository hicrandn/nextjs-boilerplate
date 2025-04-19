import React from 'react'
import Image from 'next/image'

export default function  NotFound  ()  {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>

     <Image
        src="/images/404.png"
        alt="404"
        width={500}
        height={500}
        className="object-cover"
      /> 

    </div>
  )
}


