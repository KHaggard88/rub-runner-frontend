import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard({ p, onAdd }) {
  return (
    <div className="card">
      {p.image && <img src={p.image} alt={p.name} style={{ width:'100%', height:160, objectFit:'cover', borderRadius:6 }} />}
      <h3>{p.name}</h3>
      <div className="small">{p.description}</div>
      <p><strong>${(p.price/100).toFixed(2)}</strong></p>
      <div style={{ display:'flex', gap:8 }}>
        <button className="btn" onClick={()=>onAdd(p)}>Add to Cart</button>
        <Link to={`/product/${p.id}`} className="small" style={{ alignSelf:'center' }}>Details</Link>
      </div>
    </div>
  )
}
