var db = require('../db/index.js');


module.exports = {
  messages: {
    get: function () {

      console.log('Get fired');
      return new Promise((resolve, reject) => {
        db.query('SELECT * FROM messages', (err, results, fields) => {
          // console.log('Error: ', err);
          // console.log('Results: ', results);
          // console.log('Fields: ', fields);
          if (err) {
            reject(err);
            throw err;
          } else {
            resolve(results);
          }
        });
      });
    }, // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};
