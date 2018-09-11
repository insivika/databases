var db = require('../db/index.js');


module.exports = {
  messages: {
    get: function () {
      return new Promise((resolve, reject) => {
        db.query('SELECT * FROM messages', (err, results) => {
          if (err) {
            reject(err);
            throw err;
          } else {
            resolve(results);
          }
        });
      });
    }, // a function which produces all the messages
    post: function (body) {
      return new Promise((resolve, reject) => {
        db.query('INSERT INTO messages (username, roomname, text) VALUES (?,?,?)', [
          body.username, body.roomname, body.text
        ], (err, results) => {
          if (err) {
            reject(err);
            throw err;
          } else {
            resolve(results);
          }
        });
      });

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};
