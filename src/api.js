const BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000'

export async function fetchProducts() {
  const res = await fetch(`${BASE}/api/products`)
  if (!res.ok) throw new Error('Failed to load products')
  return res.json()
}

export async function createCheckoutSession(items) {
  const res = await fetch(`${BASE}/create-checkout-session`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ items })
  })
  if (!res.ok) {
    const txt = await res.text()
    throw new Error(txt || 'Failed to create checkout session')
  }
  return res.json()
}
