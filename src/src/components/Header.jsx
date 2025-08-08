import React from 'react'
import { Link } from 'react-router-dom'

export default function Header({ cartCount }) {
  return (
    <header className="container header">
      <div>
        <Link to="/"><strong>Rub Runner</strong></Link>
      </div>
      <nav>
        <Link to="/" style={{ marginRight: 12 }}>Shop</Link>
        <Link to="/recipes" style={{ marginRight: 12 }}>Recipes</Link>
        <Link to="/about" style={{ marginRight: 12 }}>About</Link>
        <Link to="/cart">Cart ({cartCount})</Link>
      </nav>
    </header>
  )
}
