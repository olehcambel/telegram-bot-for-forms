const dbmanager = require('./dbmanager');
const keyboards = require('./keyboards');

const strings = require('./strings');

function setLanguage(msg, bot) {
  dbmanager.findUser({ id: msg.chat.id })
    .then((user) => {
      const userCopy = Object.create(user)
      userCopy.input_state = strings(user).setLanguageState
      return userCopy.save()
        .then((savedUser) => {
          keyboards.setLanguageMenu(bot, msg.chat.id, savedUser)
        })
    })
}

module.exports = {
  setLanguage
};
