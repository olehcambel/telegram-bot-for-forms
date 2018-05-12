const strings = require('./strings');

const {
  User,
} = require('../models');

function findUser(query) {
  return new Promise((fullfill) => {
    User.findOne(query)
      .exec((err, user) => {
        if (err) throw err;
        else fullfill(user);
      });
  });
}

function addUser(user) {
  return new Promise((fullfill, reject) => 
    findUser({ id: user.id })
      .then((dbuserObject) => {
        console.log(`dbuserObject ${dbuserObject}`)
        if (dbuserObject) fullfill({ user: dbuserObject, new: false });
        else {
          const userObject = new User(user);

          userObject.save()
            .then(savedUser => fullfill({ user: savedUser, new: true }))
            .catch(reject);
        }
      })
  );
}

module.exports = {
  findUser,
  addUser,
};
