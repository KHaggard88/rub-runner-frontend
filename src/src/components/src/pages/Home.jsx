import React, { useEffect, useState } from 'react'
import { fetchProducts } from '../api'
import ProductCard from '../components/ProductCard'

export default function Home({ onAdd }) {
  const [products, setProducts] = useState([])
  const [err, setErr] = useState(null)

  useEffect(()=>{
    fetchProducts().then(setProducts).catch(e=>setErr(e.message))
  },[])

  if (err) return <div className="container"><p>Error: {err}</p></div>
  if (!products.length) return <div className="container"><p>Loading products…</p></div>

  return (
    <div className="container">
      <h1>Our Rubs & Seasonings</h1>
      <div className="grid">
        {products.map(p=> <ProductCard key={p.id} p={p} onAdd={onAdd} />)}
      </div>
    </div>
  )
}
