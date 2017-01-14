var db = require('../db');

module.exports = {
  messages: {
    get: function (req, res) {
      console.log('inside messages GET');
      res.end();
    }, // a function which produces all the messages
    post: function (req, res) {
      console.log('inside messages POST ==>', req.body.message);
      db.postMessage(req.body);
      res.end();
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (req, res) {
      console.log('inside users GET');
      res.end();
    },
    post: function (req, res) {
      db.postUser(req.body.username);

      // console.log('INSIDE MODELS USERS POST');
      // console.log('method: ', req.method);
      // console.log('body: ', req.body);
      // console.log('username: ', req.body.username);
      // console.log('entire request: ' + req);
      // restart
      res.end();
    }
  }
};

