import React from 'react'
import { useParams } from 'react-router-dom'

export default function Product({ products, onAdd }) {
  const { id } = useParams()
  const p = products.find(x => String(x.id) === id)
  if (!p) return <div className="container"><p>Product not found.</p></div>

  return (
    <div className="container">
      <div style={{ display:'flex', gap:20 }}>
        <img src={p.image} alt={p.name} style={{ width:320, height:320, objectFit:'cover', borderRadius:8 }} />
        <div>
          <h1>{p.name}</h1>
          <p className="small">{p.description}</p>
          <p className="small"><em>Ingredients: {p.ingredients}</em></p>
          <p><strong>${(p.price/100).toFixed(2)}</strong></p>
          <button className="btn" onClick={()=>onAdd(p)}>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}
