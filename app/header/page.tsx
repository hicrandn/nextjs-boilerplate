import React from 'react'
import Link from 'next/link'

const HeaderPage = () => {
  return (
    <div className='m-4'>
      <h1 className="text-2xl text-black font-bold ">Header Example</h1>
      <ul className="space-y-2 text-blue-600 underline">
        <li>
          <Link href="/header/BasicHeader">Basic Header Page</Link>
        </li>
        <li>
          <Link href="/header/DarkHeader">Dark Header Page</Link>
        </li>
      </ul>
     
    </div>
  )
}

export default HeaderPage

