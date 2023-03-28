require('dotenv').config()

const express = require('express')
const app = express()

const cors = require('cors')
app.use(express.json())
app.use(
  cors({
    origin: 'http://127.0.0.1:5173',
    methods: ['GET', 'POST', 'OPTIONS'],
    credentials: true,
  })
)

// app.use(cors())

const stripe = require('stripe')(process.env.STRIPE_KEY)

const storeItems = new Map([
  ['XX99 MK II', { priceInCents: 299900, name: 'XX99 Mark II Headphones' }],
  ['XX99 MK I', { priceInCents: 175000, name: 'XX99 Mark I Headphones' }],
  ['XX59', { priceInCents: 89900, name: 'XX59 Headphones' }],
  ['ZX9', { priceInCents: 450000, name: 'ZX9 SPEAKER' }],
  ['ZX7', { priceInCents: 350000, name: 'ZX7 SPEAKER' }],
  ['YX1', { priceInCents: 59900, name: 'YX1 SPEAKER' }],
])

app.post('/', async (req, res) => {
  console.log(process.env.STRIPE_KEY)
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: req.body.items.map(item => {
        const storeItem = storeItems.get(item.id)
        return {
          price_data: {
            currency: 'usd',
            product_data: {
              name: storeItem.name,
            },
            unit_amount: storeItem.priceInCents,
          },
          quantity: item.quantity,
        }
      }),
      success_url: `${process.env.SERVER_URL}/success.html`,
      cancel_url: `${process.env.SERVER_URL}/cancel.html`,
    })
    res.json({ url: session.url })
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
})

app.listen(3000)
