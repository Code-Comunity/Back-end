const knex = require('knex')({
  client: 'mysql2',
  connection: {

    host : '192.185.176.80',
    port: 3306,
    user : 'better19_btuser',
    password : 'Wtx9rDca4WAkszQ',
    database : 'better19_batterbanco'
      
  }
})

module.exports = {
  knex: knex,
  hash: 'b0d68ca3aa45bcc2cc51f366b54d2a197cee24baca77053a92ff5436c9c57fd9'
};
