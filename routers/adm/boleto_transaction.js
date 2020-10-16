const express = require("express");
const router = express.Router();
const pagarme = require('pagarme');

router.post('/', (req,res) => {
  //Objetos vindo do FRONT END, com as variaveis que serão usadas na transação
  const { amount, payment_method, postback_url, costumer } = req.body;

  pagarme.client.connect({ api_key: 'ak_test_moyHJWO5yY9VUWgPvzHg5RAHR5uNn0' })
  .then(client => client.transactions.create({
    amount: amount,
    payment_method: payment_method,
    postback_url: postback_url,
    customer: costumer
  }))
  .then((transaction) => {
    return res.json({transaction: transaction});
  })
  .catch(err=>{
  console.log(err.response)
   return res.json({message: err.response.error});
  })
})

module.exports = router;