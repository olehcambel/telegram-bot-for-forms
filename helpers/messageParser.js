const strings = require('./strings');
const dbmanager = require('./dbmanager');
const keyboards = require('./keyboards');


function textInputCheck(msg, callback) {
  dbmanager.findUser({ id: msg.chat.id })
    .then((user) => {
      if (user) callback(user.input_state, user);
      else callback();
    })
    .catch(/** todo: handle error */);
}

function createProfile(bot, msg) {
  dbmanager.addUser(msg.from)
    .then((obj) => {
      const user = obj.user;
      const isNew = obj.new;
      // if (isNew) adminReports.userRegistered(bot, user);
      user.language_code = msg.from.language_code;
      user.save()
      keyboards.sendMainMenu(bot, msg.chat.id, true)
    })
    .catch(/** todo: handle error */);
}

function updateProfile(msg, user) {
  if (msg.from.first_name !== user.first_name ||
    msg.from.last_name !== user.last_name ||
    msg.from.username !== user.username ||
    msg.from.language_code !== user.language_code) {
    const userCopy = Object.create(user);
    userCopy.first_name = msg.from.first_name;
    userCopy.last_name = msg.from.last_name;
    userCopy.username = msg.from.username;

    userCopy.save()
      .catch(/** todo: handle error */);
  }
}

function botCommandStart(message) {
  if (!message.entities) return false;
  if (!message.entities[0]) return false;
  if (message.entities[0].type === 'bot_command') {
    return message.text === '/start';
  }
  return false;
}

function replyMarkup(message, user) {
  const mainMenuOptions = Object.keys(strings(user).mainMenuOptions).map(
    key => strings(user).mainMenuOptions[key]
  )
  return mainMenuOptions.indexOf(message.text) > -1
}

module.exports = {
  textInputCheck,
  createProfile,
  updateProfile,
  botCommandStart,
  replyMarkup,
};