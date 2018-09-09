var models = require('../models/index.js');
var db = require('../db/index.js');

module.exports = {
  messages: {
    get: function (req, res) {
      console.log('on message page.', models);
      db;
      debugger;
    }, // a function which handles a get request for all messages
    post: function (req, res) {} // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

