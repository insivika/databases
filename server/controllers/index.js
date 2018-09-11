var models = require('../models/index.js');
var db = require('../db/index.js');

module.exports = {
  messages: {
    get: function (req, res) { // a function which handles a get request for all messages
      models.messages.get().then((results) => {
        console.log('results received: ', results);
        debugger;
        res.writeHead(200, {
          'Content-Type': 'application/json'
        });
        res.end(JSON.stringify(results));
      }).catch((err) => {
        console.log('err occurred when fetching messages: ', err);
      });
    },
    post: function (req, res) {} // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

