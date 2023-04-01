require('dotenv').config()

const express = require('express')
const app = express()

const cors = require('cors')
app.use(express.json())
app.use(
  cors({
    origin: [
      'http://127.0.0.1:5173',
      'https://gleeful-medovik-88e4a5.netlify.app',
    ],
    methods: ['GET', 'POST', 'OPTIONS'],
    credentials: true,
  })
)

const stripe = require('stripe')(process.env.STRIPE_KEY)
const { Client, resources, Webhook } = require('coinbase-commerce-node')

Client.init(process.env.COINBASE_KEY)
const { Charge } = resources

const calculateTotal = function (items) {
  const prices = items.map(item => ({
    price: item.price.replace(/[^0-9]/g, ''),
    count: item.count,
  }))
  const total = prices.reduce((acc, item) => {
    return +item.price * item.count + acc
  }, 0)
  return total
}

const storeItems = new Map([
  ['XX99 MK II', { priceInCents: 299900, name: 'XX99 Mark II Headphones' }],
  ['XX99 MK I', { priceInCents: 175000, name: 'XX99 Mark I Headphones' }],
  ['XX59', { priceInCents: 89900, name: 'XX59 Headphones' }],
  ['ZX9', { priceInCents: 450000, name: 'ZX9 SPEAKER' }],
  ['ZX7', { priceInCents: 350000, name: 'ZX7 SPEAKER' }],
  ['YX1', { priceInCents: 59900, name: 'YX1 SPEAKER' }],
])

app.post('/create-checkout', async (req, res) => {
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
      success_url: `${process.env.SERVER_URL}/checkout?ordersuccess=true`,
      cancel_url: `${process.env.SERVER_URL}/checkout?ordersuccess=false`,
    })
    res.json({ url: session.url })
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
})
app.get('/create-charge', async (req, res) => {
  const orders = JSON.parse(req.query.params)
  const userName = req.query.userName

  try {
    const chargeData = {
      name: orders
        .map(val => {
          return val.name
        })
        .join(', '),
      description: 'Audiophile equipments',
      local_price: {
        amount: calculateTotal(orders),
        currency: 'USD',
      },
      pricing_type: 'fixed_price',
      metadata: {
        user: userName,
      },
    }
    const charge = await Charge.create(chargeData)
    res.send(charge)
  } catch (err) {
    res.status(400).send(err.message)
  }
})
app.get('/webhooks', async (req, res) => {
  const rawBody = req.rawBody
  const signature = req.headers['x-cc-webhook-signature']
  const webhookSecret = process.env.WEBHOOK_SECRET

  try {
    const event = Webhook.verifyEventBody(rawBody, signature, webhookSecret)
    res.send(`success ${event.id}`)
  } catch (err) {
    res.status(400).send('failure!')
  }
})

app.listen(3000)
