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

  dbConnection.query('INSERT INTO users (name) value (\'' + username + '\')', function(err, res) {  
    if (err) {
      console.error(err);
    }
    console.log('posted ' + username);
  });
};

exports.postRoom = function(roomname) {
  dbConnection.query('INSERT INTO rooms (name) value (\'' + roomname + '\')', function(err, res) {  
    if (err) {
      console.error(err);
    }
    console.log('posted ' + roomname);
  });
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
  // var userId;
  // var roomId;
  // var createdAt;


  // var queryString = 'INSERT INTO messages (text) value (\'' + message + '\')';
  var queryString = 'INSERT INTO messages (user_id, room_id, text) value ' + 
    '((select id from users where name = \'' + user + '\'),(select id from rooms where name = \'' + room + '\'),\'' + message + '\');';

  dbConnection.query(queryString, function(err, res) {
    if (err) {
      console.error(err);
    }
    console.log('posted ' + message);
  });
};

exports.getUsers = function() {
  console.log('this gets users.');
};

exports.getRooms = function() {
  console.log('this gets rooms.');
};

exports.getMessages = function(res) {
  console.log("ENTERED GET MESSAGES DB");
  dbConnection.query('select * from messages', function(err, result) {
    console.log('ABOUT TO ENTER RES.JSON');
    res.json(result);
  });

  // return dbConnection.query('select * from messages', function(err, res) {
  //   return res;
  // });
};
