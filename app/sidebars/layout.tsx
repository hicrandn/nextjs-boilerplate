import React from 'react'

const SidebarLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default SidebarLayout
