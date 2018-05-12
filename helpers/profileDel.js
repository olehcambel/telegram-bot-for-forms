// const adminReports = require('./adminReports');
const dbmanager = require('./dbmanager');
const keyboards = require('./keyboards');
const strings = require('./strings');
// const hourlyRatePicker = require('./hourlyRatePicker')
// const tutorial = require('./tutorial');

global.eventEmitter.on(strings().countryChooseState, ({ msg, user, bot }) => {

  const newCountry = msg.text.substring(0, 20)
  const userCopy = Object.create(user)
  userCopy.country_choose = newCountry
  userCopy.input_state = undefined
  userCopy.save()
    .then((savedUser) => {
      editAdultChildChoose(msg, savedUser)
    })
    .catch(/** todo: handle error */)
})

global.eventEmitter.on(strings().adultChildChooseState, ({ msg, user, bot }) => {
  const newAdultChild = msg.text.substring(0, 30)
  const userCopy = Object.create(user)
  userCopy.adult_child = newAdultChild
  userCopy.input_state = undefined
  userCopy.save()
    .then((savedUser) => {
      hourlyRatePicker.editNightsChoose(msg, savedUser)
      // editPhoneNumChoose(msg, savedUser)
      // bot.sendMessage(msg.chat.id, strings().botCommandThree)
    })
})

global.eventEmitter.on(strings().phoneNumChooseState, ({ msg, user, bot }) => {
  const newPhoneNum = msg.text.substring(0, 25)
  const userCopy = Object.create(user)
  userCopy.phone_num = newPhoneNum
  userCopy.input_state = undefined
  userCopy.save()
    .then((savedUser) => {
      keyboards.botInGroup(msg.chat.id, bot)
      bot.sendMessage(msg.chat.id, strings().sendAfterFindTourMessage)
      // hourlyRatePicker.editNightsChoose(msg, savedUser) // What will be after?
    })
})

function editAdultChildChoose(msg, user) {
  bot.sendMessage(msg.chat.id, strings().adultChildChooseMessage)
  // bot.sendMessage(msg.chat.id, strings().changedBioMessage + savedUser.bio)
  user.input_state = strings().adultChildChooseState //delete then
  user.save()
}

function startFindTour(msg, bot) {
  dbmanager.findUser({ id: msg.chat.id })
    .then((user) => {
      const userCopy = Object.create(user);
      userCopy.input_state = strings().countryChooseState;
      return userCopy.save()
        .then((savedUser) => {
          const message = strings().countryChooseMessage
          return keyboards.hideKeyboard(bot, msg.chat.id, strings().findTourHideKeyboardMessage)
            .then(() => {
              keyboards.sendInline(bot, msg.chat.id, message,
                // [[{
                //   text: strings().cancel,
                //   callback_data: `${strings().inputFindTourCancelInline}${strings().inlineSeparator}`,
                // }]]
              );
            });
        });
    })
    .catch(/** todo: handle error */);
}

module.exports = {
  // createProfile,
  // updateProfile,
  startFindTour,
  //   toggleAvailability,
  // textInputCheck,
  // editPhoneNumChoose,
  //   sendAskForUsername,
};
