import React from 'react'
import { BsJustify } from 'react-icons/bs'

function Header({ OpenSidebar }) {
  return (
    <header className='header'>
      <div className='menu-icon'>
        <BsJustify className='icon' onClick={OpenSidebar} />
      </div>
      <div className='header-left'>
        <h3>Expense Tracker Dashboard</h3>
      </div>
      <div className='header-right'>

      </div>
    </header>
  )
}

export default Header