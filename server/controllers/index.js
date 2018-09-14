var models = require('../models/index.js');

module.exports = {
  messages: {
    get: function (req, res) { // a function which handles a get request for all messages
      models.messages.get().then((results) => {
        res.writeHead(200, {
          'Content-Type': 'application/json'
        });
        res.end(JSON.stringify(results));
      }).catch((err) => {
        console.log('err occurred when fetching messages: ', err);
      });
    },
    post: function (req, res) { // a function which handles posting a message to the database
      // get the body..
      models.messages.post(req.body).then(() => {
        res.writeHead(201, {
          'Content-Type': 'application/json'
        });
        res.end();
      }).catch((err) => {
        console.log('err occurred when posting message: ', err);
        res.writeHead(405, {
          'Content-Type': 'application/json'
        });
        res.end(JSON.stringify({error: err}));
      });
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get().then((results) => {
        res.writeHead(200, {
          'Content-Type': 'application/json'
        });
        res.end(JSON.stringify(results));
      }).catch((err) => {
        console.log('err occurred when fetching users: ', err);
        res.writeHead(500, {
          'Content-Type': 'application/json'
        });
        res.end(JSON.stringify({error: err}));
      });
    },
    post: function (req, res) {
      models.users.post(req.body).then((message) => {
        res.writeHead(201, {
          'Content-Type': 'application/json'
        });
        res.end();
      }).catch((err) => {
        console.log('err occurred when creating user: ', err);
        res.writeHead(405, {
          'Content-Type': 'application/json'
        });
        res.end(JSON.stringify({error: err}));
      });
    }
  }
};

