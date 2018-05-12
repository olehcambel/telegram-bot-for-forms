const keyboards = require('./keyboards');
const states = require('./states');
const findTour = require('./findTour');
const dbmanager = require('./dbmanager');
const strings = require('./strings');
const check = require('./messageParser');
const bot = require('./telegramBot');
// const botan = require('botanio')('9d8af571-f1bc-4557-ae9c-0610d5392686');

bot.on('message', (msg) => {
  check.textInputCheck(msg, (isTextInput, user) => {
    console.log(`chooseState ${isTextInput}`)

    if (user) {
      check.updateProfile(msg, user);

      if (isTextInput) {
        console.log(isTextInput + " isTextInput one")
        global.eventEmitter.emit(isTextInput, { msg, user, bot });
      } else if (check.replyMarkup(msg)) {
        console.log(check.replyMarkup(msg) + " replyMarkup two")
        handleKeyboard(msg);
      } else if (check.botCommandStart(msg)) {
        console.log(check.botCommandStart(msg) + " bCS sendMainMenu three")
        keyboards.sendMainMenu(bot, msg.chat.id, false);
      }
      // } else {
      //   bot.sendMessage(-272614853, `@${user.username} sent strange message:\n\n\`${msg.text}\``, { parse_mode: 'Markdown' });
      // }
    } else if (check.botCommandStart(msg)) {
      console.log(check.botCommandStart(msg) + " bCS createProfile four")
      check.createProfile(bot, msg);
    }
  });
  // botan.track(msg, 'message');
});

bot.on('callback_query', (msg) => {
  dbmanager.findUser({ id: msg.from.id })
    .then((user) => {
      const options = msg.data.split(strings().inlineSeparator)
      const inlineQuery = options[0]
      console.log(`options - ${options}`)

      global.eventEmitter.emit(inlineQuery, { bot, msg, user })
    })
})

function handleKeyboard(msg) {
  const text = msg.text;
  const mainMenuOptions = strings().mainMenuOptions;

  if (text === mainMenuOptions.findJobs) {
    keyboards.botInGroup(msg.chat.id, bot);
  } else if (text === mainMenuOptions.chooseLanguage) {
    languagePicker.sendInterfaceLanguagePicker(bot, msg.chat.id);
  } else if (text === mainMenuOptions.findTour) {
    findTour.startFindTour(msg, bot)
  }
}