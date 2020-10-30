import React from 'react'
import { Link } from 'react-router-dom'

import './header.styles.scss'

function Header() {
  return (
    <header className="header">
      <Link className="logo" to="/">
        <span>Sport</span>
        <span>Store</span>
      </Link>
    </header>
  )
}

export default Header
