var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      console.log('messages GET');
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('messages POST');
      models.messages.post(req, res);
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log('users GET');
    },
    post: function (req, res) {
      models.users.post(req, res);
    }
  }
};

