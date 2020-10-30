const pagarme = require('pagarme');
const {request,response} = require('express')

//https://docs.pagar.me/docs/obtendo-os-dados-do-cartao
/*pagarme.client.connect({ encryption_key: 'ek_test_i6vE2KF2jaGTbObC6nH768kVAglUNN' })
          .then(client => client.security.encrypt(card))
          .then(card_hash => console.log(card_hash))

*/
//Consulta de saldo

module.exports = {

  async Total(Request = request,Response = response){
    pagarme.client
      .connect({ api_key: "ak_test_moyHJWO5yY9VUWgPvzHg5RAHR5uNn0" })
      .then((client) => client.balance.primary())
      .then((balance) => {
        return res.send(balance);
      });
  },

  async Sacar(Request = request,Response = response){
      pagarme.client
        .connect({ api_key: "ak_test_moyHJWO5yY9VUWgPvzHg5RAHR5uNn0" })
        .then((client) =>
          client.transfers.create({
            amount: 10000,
            bank_account_id: "id_conta_do_banco",
            recipient_id: "Recebedor_id",
          })
        )
        .then((transfer) => {
          return res.send(transfer);
        });
  },

  async PagamentoCartao(Request, Response) {
    const { valorTotal, nomeCartao, dataExpiracao, numeroCartao, cvv, costumer, items } = Request.body;

    pagarme.client.connect({ api_key: 'ak_test_moyHJWO5yY9VUWgPvzHg5RAHR5uNn0' })
    .then(client => client.transactions.create({
      "amount": valorTotal,
      "card_number": numeroCartao,
      "card_cvv": cvv,
      "card_expiration_date": dataExpiracao,
      "card_holder_name": nomeCartao,
      "customer": costumer,
      "billing": {
        "name": "Trinity Moss",
        "address": {
          "country": "br",
          "state": "sp",
          "city": "Cotia",
          "neighborhood": "Rio Cotia",
          "street": "Rua Matrix",
          "street_number": "9999",
          "zipcode": "06714360"
        }
      },
      "shipping": {
        "name": "Neo Reeves",
        "fee": 1000,
        "delivery_date": "2000-12-21",
        "expedited": true,
        "address": {
          "country": "br",
          "state": "sp",
          "city": "Cotia",
          "neighborhood": "Rio Cotia",
          "street": "Rua Matrix",
          "street_number": "9999",
          "zipcode": "06714360"
        }
      },
      "items": items
    }))
    .then((transaction) => {
      return res.json({transaction: transaction})
    })

  }

  }


