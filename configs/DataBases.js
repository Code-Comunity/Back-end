const knex = require('knex')({
  client: 'mysql2',
  connection: {
      host : 'tcp://4.tcp.ngrok.io:18303',
      user : 'root',
      password : '',
      database : 'test_ecommece'
    }
})

module.exports = {
  knex: knex,
  hash: 'b0d68ca3aa45bcc2cc51f366b54d2a197cee24baca77053a92ff5436c9c57fd9'
};
