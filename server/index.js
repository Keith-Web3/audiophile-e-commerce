require('dotenv').config()

const express = require('express')
const app = express()

const cors = require('cors')
app.use(express.json())
// app.use(
//   cors({
//     origin: '*',
//     methods: ['GET', 'POST', 'OPTIONS'],
//     credentials: true,
//   })
// )

app.use(cors())

const stripe = require('stripe')(process.env.STRIPE_KEY)

const storeItems = new Map([
  [1, { priceInCents: 10000, name: 'Learn React Today' }],
  [2, { priceInCents: 20000, name: 'Learn CSS Today' }],
])

app.get('/', async (req, res) => {
  // console.log("rocess.env.STRIPE_KEY)
  let congrats = JSON.stringify('It is working fine')
  res.status(200).send(congrats)
  // try {
  //   const session = await stripe.checkout.sessions.create({
  //     payment_method_types: ['card'],
  //     mode: 'payment',
  //     line_items: req.body.items.map(item => {
  //       const storeItem = storeItems.get(item.id)
  //       return {
  //         price_data: {
  //           currency: 'ngn',
  //           product_data: {
  //             name: storeItem.name,
  //           },
  //           unit_amount: storeItem.priceInCents,
  //         },
  //         quantity: item.quantity,
  //       }
  //     }),
  //     success_url: `${process.env.SERVER_URL}/success.html`,
  //     cancel_url: `${process.env.SERVER_URL}/cancel.html`,
  //   })
  //   res.json({ url: session.url })
  // } catch (e) {
  //   res.status(500).json({ error: e.message })
  // }
})

app.listen(3000)
