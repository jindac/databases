var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(req, res);
    },
    post: function (req, res) {
      models.messages.post(req, res);
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(req, res);
    },
    post: function (req, res) {
      models.users.post(req, res);
    }
  },

  rooms: {
    get: function (req, res) {
      models.users.get(req, res);
    },
    post: function (req, res) {
      console.log('POST ROOMS CONTROLLER');
      console.log('room ====>', req.body.roomname);
      models.rooms.post(req, res);
    }
  },
};

