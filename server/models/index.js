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
        // first look up user_id in our `users` table
        db.query('SELECT id FROM users WHERE username = ?', [body.username], (err, results) => {
          // if sql err return err
          debugger;
          if (err) {
            reject(err);
          } else if (results.length === 0) {
            // user didnt exist
            reject(err);
          } else {
            // if found, get user id from 1st result
            const userId = results[0].id;
            db.query('INSERT INTO messages (user_id, roomname, text) VALUES (?,?,?)', [
              userId, body.roomname, body.text
            ], (err, results) => {
              if (err) {
                reject(err);
                throw err;
              } else {
                resolve(results);
              }
            });
          }
        });
        // SELECT `user_id` FROM users WHERE body.username = username
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};
