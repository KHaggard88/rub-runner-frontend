import React from 'react'
import { createCheckoutSession } from '../api'
import { useNavigate } from 'react-router-dom'

export default function Cart({ cart, remove, clear }) {
  const navigate = useNavigate()
  const total = cart.reduce((s,i)=> s + i.price * i.quantity, 0)

  const handleCheckout = async () => {
    try {
      // Stripe backend expects items: [{ id, quantity }]
      const items = cart.map(i => ({ id: i.id, quantity: i.quantity }))
      const { url } = await createCheckoutSession(items)
      // redirect to Stripe Checkout
      window.location.href = url
    } catch (e) {
      alert('Checkout failed: ' + e.message)
    }
  }

  if (!cart.length) return <div className="container"><p>Your cart is empty.</p></div>

  return (
    <div className="container">
      <h1>Your Cart</h1>
      {cart.map(i => (
        <div key={i.id} className="card" style={{ marginBottom: 12 }}>
          <div style={{ display:'flex', justifyContent:'space-between' }}>
            <div>
              <strong>{i.name}</strong>
              <div className="small">Qty: {i.quantity}</div>
              <div className="small">Price: ${(i.price/100).toFixed(2)}</div>
            </div>
            <div>
              <button onClick={()=>remove(i.id)} className="btn" style={{ background:'#b83232' }}>Remove</button>
            </div>
          </div>
        </div>
      ))}
      <h3>Total: ${(total/100).toFixed(2)}</h3>
      <div style={{ display:'flex', gap:8 }}>
        <button className="btn" onClick={handleCheckout}>Proceed to Checkout</button>
        <button onClick={clear} className="btn" style={{ background:'#666' }}>Clear</button>
      </div>
    </div>
  )
}
