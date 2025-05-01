import BasicButton from '@/components/button/BasicButton'
import GlassyButton from '@/components/button/GlassyButton'
import React from 'react'

const ButtonsPage = () => {
  return (
    <div className="h-screen flex">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <h1 className="text-2xl text-gray-900 font-semibold mb-4">Buttons</h1>
        <p className="text-gray-700 mb-4">
          This page shows an example of the button widget.
        </p>
       
        <div className="flex flex-col items-center space-y-4">
          <BasicButton />
          <GlassyButton />
          </div>
      </div>
    </div>
   
  )
}

export default ButtonsPage
