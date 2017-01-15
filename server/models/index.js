var db = require('../db');

module.exports = {
  messages: {
    get: function (req, res) {
      db.getMessages(res);
      // res.json(db.getMessages());
      // res.end();
    },
    post: function (req, res) {
      db.postMessage(req.body);
      res.end();
    }
  },

  users: {
    get: function (req, res) {
      db.getUsers();
      res.end();
    },
    post: function (req, res) {
      db.postUser(req.body.username);
      res.end();
    },
  },

  rooms: {
    get: function (req, res) {
      db.getRooms();
      res.end();
    }, 
    post: function (req, res) {
      db.postRoom(req.body.roomname);
      res.end();
    }
  }
};

