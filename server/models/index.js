const {db, user, message} = require('../db/index.js');


module.exports = {
  messages: {
    get: function () {

      return message.sync()
        .then(() => {

          return message.findAll({include: [user]}).then((results) => {
            return results.map((row) => {
              row = row.get();
              row.username = row.user.get('username');
              delete row.user;
              return row;
            });
          });

        });
    },



    post: function (body) {

      return message.sync()
        .then(() => {

          return user.find({where: {username: body.username}})
            .then((user) => {
              if (user) {
                return message.create(
                  {
                    'user_id': user.get('id'),
                    roomname: body.roomname,
                    text: body.text
                  }
                );
              } else {
                throw ('user doesn\'t exist');
              }
            });
        });
    }
  },

  users: {
    // Ditto as above.
    get: function () {

    },
    post: function (body) {

      return user.sync()
        .then(() => {
          return user.count({where: {username: body.username}})
            .then((count) => {
              if (count > 0) {
                throw 'user already exists';
              } else {
                return user.create({username: body.username});
              }
            });
        });

      // return new Promise((resolve, reject) => {
      //   db.query('SELECT COUNT(id) FROM users WHERE username = ?', [body.username], (error, results) => {
      //     if (error) {
      //       reject(error);
      //     } else if (results[0]['COUNT(id)'] > 0) {
      //       reject('User already exists');
      //     } else {

      //       db.query('INSERT INTO users (username) VALUES (?)', [body.username], (error, results) => {
      //         if (error) {
      //           reject(error);
      //         } else {
      //           resolve(body.username + ' has been added.');
      //         }
      //       });
      //     }
      //   });

      // });
    }
  }
};
