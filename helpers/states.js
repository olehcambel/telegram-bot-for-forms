const dbmanager = require('./dbmanager');
const keyboards = require('./keyboards');
const strings = require('./strings');
const findTour = require('./findTour');
const config = require('../config');

global.eventEmitter.on(strings().countryChooseState, ({ msg, user, bot }) => {
  const newCountry = msg.text.substring(0, 30)
  const userCopy = Object.create(user)
  userCopy.country_choose = newCountry
  userCopy.input_state = undefined
  userCopy.save()
    .then((savedUser) => {
      findTour.editAdultChildChoose(msg, bot, savedUser)
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
      findTour.editMonthFromChoose(msg, bot, savedUser)
    })
    .catch()
})

global.eventEmitter.on(strings().monthFromChooseInline, ({ msg, bot }) => {
  const command = msg.data.split(strings().inlineSeparator)[1]
  dbmanager.findUser({ id: msg.message.chat.id })
    .then((user) => {
      const userCopy = Object.create(user)
      userCopy.month_from_choose = command
      return userCopy.save()
        .then((savedUser) => {
          findTour.editDayFromChoose(msg, bot, savedUser)
        })
    })
    .catch()
})

global.eventEmitter.on(strings().dayFromChooseInline, ({ msg, bot }) => {
  const command = msg.data.split(strings().inlineSeparator)[1]
  dbmanager.findUser({ id: msg.message.chat.id })
    .then((user) => {
      const userCopy = Object.create(user)
      userCopy.day_from_choose = command
      return userCopy.save()
        .then((savedUser) => {
          findTour.editYearFromChoose(msg, bot, savedUser)
        })
    })
    .catch()
})

global.eventEmitter.on(strings().yearFromChooseInline, ({ msg, bot }) => {
  const command = msg.data.split(strings().inlineSeparator)[1]
  dbmanager.findUser({ id: msg.message.chat.id })
    .then((user) => {
      const userCopy = Object.create(user)
      userCopy.year_from_choose = command
      return userCopy.save()
        .then((savedUser) => {
          findTour.editMonthToChoose(msg, bot, savedUser)
        })
    })
    .catch()
})

global.eventEmitter.on(strings().monthToChooseInline, ({ msg, bot }) => {
  const command = msg.data.split(strings().inlineSeparator)[1]
  dbmanager.findUser({ id: msg.message.chat.id })
    .then((user) => {
      const userCopy = Object.create(user)
      userCopy.month_to_choose = command
      return userCopy.save()
        .then((savedUser) => {
          findTour.editDayToChoose(msg, bot, savedUser)
        })
    })
    .catch()
})

global.eventEmitter.on(strings().dayToChooseInline, ({ msg, bot }) => {
  const command = msg.data.split(strings().inlineSeparator)[1]
  dbmanager.findUser({ id: msg.message.chat.id })
    .then((user) => {
      const userCopy = Object.create(user)
      userCopy.day_to_choose = command
      return userCopy.save()
        .then((savedUser) => {
          findTour.editYearToChoose(msg, bot, savedUser)
        })
    })
    .catch()
})

global.eventEmitter.on(strings().yearToChooseInline, ({ msg, bot }) => {
  const command = msg.data.split(strings().inlineSeparator)[1]
  dbmanager.findUser({ id: msg.message.chat.id })
    .then((user) => {
      const userCopy = Object.create(user)
      userCopy.year_to_choose = command
      return userCopy.save()
        .then((savedUser) => {
          findTour.editPriceChoose(msg, bot, savedUser)
        })
    })
    .catch()
})

global.eventEmitter.on(strings().priceChooseInline, ({ msg, bot }) => {
  const command = msg.data.split(strings().inlineSeparator)[1]

  dbmanager.findUser({ id: msg.message.chat.id })
    .then((user) => {
      const userCopy = Object.create(user)
      userCopy.price_choose = command
      return userCopy.save()
        .then((savedUser) => {
          findTour.editPhoneNumChoose(msg, bot, savedUser)
        })
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
      keyboards.sendKeyboard(bot, msg.chat.id,
        strings(user).sendAfterFindTourMessage,
        keyboards.mainMenuKeyboard(savedUser)
      )
    })
})

global.eventEmitter.on(strings().checkedInGroupInline, ({ msg, bot }) => {
  let text = msg.message.text.replace(strings().statusInGroupOpen, strings(user).statusInGroupConfirmed)
    .replace(strings().countryGroup, strings().countryGroupHtml)
    .replace(strings().adultChildGroup, strings().adultChildGroupHtml)
    .replace(strings().monthFromGroup, strings().monthFromGroupHtml)
    .replace(strings().monthToGroup, strings().monthToGroupHtml)
    .replace(strings().priceGroup, strings().priceGroupHtml)
    .replace(strings().phoneNumGroup, strings().phoneNumGroupHtml)
  keyboards.editMessage(bot,
    config.adminChatId,
    msg.message.message_id,
    text,
    undefined,
    true
  )
})

global.eventEmitter.on(strings().setLanguageState, ({ msg, user, bot }) => {
  const userCopy = Object.create(user)
  userCopy.language_code = ((msg.text === strings(user).setLanguageOptions.ru) ?
    strings(user).ru :
    strings(user).eng
  )
  userCopy.input_state = undefined
  userCopy.save()
    .then((savedUser) => {
      keyboards.sendKeyboard(bot, msg.chat.id,
        strings(savedUser).mainMenuMessage,
        keyboards.mainMenuKeyboard(savedUser)
      )
    })
})
// module.exports = {
// };