var Client = require('mariasql');

var connection = new Client({
  host: '127.0.0.1',
  user: 'root',
  password: 'admin',
  db:'db'
});
module.exports=connection;