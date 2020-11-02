const pagarme = require("pagarme");

//Consulta de saldo

module.exports = {
  async Total(req, res) {
    pagarme.client
      .connect({ api_key: "ak_test_moyHJWO5yY9VUWgPvzHg5RAHR5uNn0" })
      .then((client) => client.balance.primary())
      .then((balance) => {
        return res.send(balance);
      });
  },

  async Sacar(req, res) {
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

  async PagamentoCartao(req, res) {
    //Resgatando o que vem do front-end
    const {
      amount,
      card_holder_name,
      card_expiration_date,
      card_number,
      card_cvv,
      customer,
      shipping,
      billing,
      items,
    } = req.body;

    pagarme.client
      .connect({ api_key: "ak_test_moyHJWO5yY9VUWgPvzHg5RAHR5uNn0" })
      .then((client) =>
        client.transactions.create({
          amount: amount,
          card_number: card_number,
          card_cvv: card_cvv,
          card_expiration_date: card_expiration_date,
          card_holder_name: card_holder_name,
          customer: customer,
          billing: billing,
          shipping: shipping,
          items: items,
        })
      )
      .then((transaction) => {
        return res.json({ transaction: transaction });
      })
      .catch((err) => {
        return res.json({ message: err.response.error });
      });
  },

  async PagamentoBoleto(req, res) {
    const { amount, payment_method, postback_url, costumer } = req.body;
    pagarme.client
      .connect({ api_key: "ak_test_moyHJWO5yY9VUWgPvzHg5RAHR5uNn0" })
      .then((client) =>
        client.transactions.create({
          amount: amount,
          payment_method: payment_method,
          postback_url: postback_url,
          customer: costumer,
        })
      )
      .then((transaction) => {
        return res.json({ transaction: transaction });
      })
      .catch((err) => {
        console.log(err.response);
        return res.json({ message: err.response.error });
      });
  },
};
