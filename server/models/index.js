var db = require('../db');


module.exports = {
  messages: {
    get: function () {

      console.log('Get fired');
      db.query('SELECT * FROM messages', [], (err, results, fields) => {
        debugger;
        if (err) { throw err; }
        console.log('Error: ', err);
        console.log('Results: ', results);
        console.log('Fields: ', fields);
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