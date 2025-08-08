import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Recipes from './pages/Recipes'
import About from './pages/About'
import Success from './pages/Success'

export default function App(){
  const [cart, setCart] = useState([])
  const [products, setProducts] = useState([]) // optional cache

  const addToCart = (p) => {
    setCart(prev => {
      const found = prev.find(x=> x.id === p.id)
      if (found) return prev.map(x => x.id===p.id ? { ...x, quantity: x.quantity+1 } : x)
      return [ ...prev, { id: p.id, name: p.name, price: p.price, quantity: 1 } ]
    })
  }

  const removeFromCart = (id) => setCart(prev => prev.filter(x=>x.id!==id))
  const clearCart = () => setCart([])

  return (
    <>
      <Header cartCount={cart.reduce((s,i)=>s+i.quantity,0)} />
      <Routes>
        <Route path="/" element={<Home onAdd={addToCart} />} />
        <Route path="/product/:id" element={<Product products={products} onAdd={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} remove={removeFromCart} clear={clearCart} />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/about" element={<About />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </>
  )
}
