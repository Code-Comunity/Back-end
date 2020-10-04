const express = require("express");
const router = express.Router();
const pagarme = require('pagarme');

router.post("/", (req,res) => {
  const { amount, card_holder_name, card_expiration_date, card_number, card_cvv, customer, shipping, billing, items } = req.body;
  pagarme.client.connect({ api_key: 'ak_test_moyHJWO5yY9VUWgPvzHg5RAHR5uNn0' })
  .then(client => client.transactions.create({
    "amount": amount,
    "card_number": card_number,
    "card_cvv": card_cvv,
    "card_expiration_date": card_expiration_date,
    "card_holder_name": card_holder_name,
    "customer": customer,
    "billing": billing,
    "shipping": shipping,
    "items": items
  }))
  .then((transaction) => {
    return res.json({transaction: transaction})
  })
  .catch((error)=>{
    console.error(error.response.errors);
  })

})

module.exports = router;