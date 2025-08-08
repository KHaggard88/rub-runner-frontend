import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export default function Success(){
  const [params] = useSearchParams()
  const sessionId = params.get('session_id')
  const [name, setName] = useState('Customer')

  useEffect(()=>{
    // Optionally fetch session details from backend if you implement that endpoint
    // fetch(`${import.meta.env.VITE_BACKEND_URL}/orders/${sessionId}`)...
  },[sessionId])

  return (
    <div className="container" style={{ textAlign:'center' }}>
      <h1>Thank you for your order!</h1>
      <p>We've received your payment. A confirmation email will arrive shortly.</p>
      <p className="small">Order ID: {sessionId}</p>
    </div>
  )
}
