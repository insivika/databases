const Sequelize = require('sequelize');
const db = new Sequelize('chat', 'root', 'password', {logging: false});

const user = db.define('user',
  {
    username: Sequelize.STRING
  },
  {
    timestamps: false
  }
);

const message = db.define('message',
  {
    'user_id': Sequelize.INTEGER,
    text: Sequelize.TEXT,
    roomname: Sequelize.STRING
  },
  {
    createdAt: 'created_at',
    updatedAt: false
  }
);

user.hasMany(message, {foreignKey: 'user_id'});
message.belongsTo(user, {foreignKey: 'user_id'});

module.exports = {user, message, db};
