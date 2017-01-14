var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".
console.log('inside index db');
var dbConnection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'chat'
});
dbConnection.connect();

// exports.dbConnection = dbConnection;


exports.postUser = function(username) {
  // construct SQL string
  //insert into users (name) value ('user1');
  dbConnection.query('INSERT INTO users (name) value (\'' + username + '\')', function(err, res) {
  
    if (err) {
      console.error(err);
    }
    console.log('INSERTION WORKED');
    // console.log('last insert id: ');
  });

  console.log('user INSIDE DB INDEX');
  console.log(username);
  // res.end();
  //WRITE SOME SQL
};

exports.postMessage = function(body) {
  // deals with messages that have apostrophe
  console.log('body.message ==>', body.message);
  var message = body.message.split('').map(function(char) {
    if (char === '\'') {
      return '\\' + char;
    }
    return char;
  }).join('');


  var user = body.username;
  var room = body.roomname;

  dbConnection.query('SELECT u.id FROM users u WHERE u.name = \'' + user + '\'', function(err, res) {
    if (err) {
      console.error(err);
    }
    console.log('results ===>', res);
  });

  // var user_id, room_id;
  var createdAt;

  // dbConnection.query('INSERT INTO messages (user_id, room_id, text, createdAt) value (1, 1, \'' + message + '\', 1)', function(err, res) {
  var queryString = 'INSERT INTO messages (text) value (\'' + message + '\')';
  // console.log('queryString ===> ', message);
  dbConnection.query(queryString, function(err, res) {
    if (err) {
      console.error(err);
    }
    console.log('Message INSERTION WORKED');
    // console.log('last insert id: ');
  });
};