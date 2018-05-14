const dbmanager = require('./dbmanager');
const keyboards = require('./keyboards');
const strings = require('./strings');

function startFindTour(msg, bot) {
  dbmanager.findUser({ id: msg.chat.id })
    .then((user) => {
      const userCopy = Object.create(user);
      userCopy.input_state = strings().countryChooseState;
      userCopy.forms_id = msg.message_id;
      return userCopy.save()
        .then((savedUser) => {
          const message = strings().countryChooseMessage
          // return keyboards.hideKeyboard(bot, msg.chat.id, strings().findTourHideKeyboardMessage)
            // .then(() => {
              return keyboards.sendInline(bot, msg.chat.id, message, keyboards.hideKeyboard()
                // [[{ //   text: strings().cancel, //   callback_data: `${strings().inputFindTourCancelInline}${strings().inlineSeparator}`, // }]]
              );
            // });
        });
    })
    .catch(/** todo: handle error */);
}

function editAdultChildChoose(msg, bot, user) {
  bot.sendMessage(msg.chat.id, strings().adultChildChooseMessage)
  user.input_state = strings().adultChildChooseState //delete then
  user.save()
}

function editMonthFromChoose(msg, bot, user) {
  keyboards.sendInline(
    bot,
    msg.chat.id,
    strings().periodFromChooseMessage,
    editorChooseKeyboards(
      user,
      user.month_from_choose,
      strings().monthFromChooseInline,
      strings().monthChooseOptions
    )
  )
}

function editDayFromChoose(msg, bot, user) {
  keyboards.editMessage(
    bot,
    msg.message.chat.id,
    msg.message.message_id,
    `${strings().periodFromChooseMessage}\n${user.month_from_choose}`,
    editorChooseKeyboards(
      user,
      user.day_from_choose,
      strings().dayFromChooseInline,
      strings().dayChooseOptions,
    )
  )
}

function editYearFromChoose(msg, bot, user) {
  keyboards.editMessage(
    bot,
    msg.message.chat.id,
    msg.message.message_id,
    `${strings().periodFromChooseMessage}\n${user.month_from_choose} ${user.day_from_choose}`,
    editorChooseKeyboards(
      user,
      user.year_from_choose,
      strings().yearFromChooseInline,
      strings().yearChooseOptions
    )
  )
}

function editMonthToChoose(msg, bot, user) {
  keyboards.editMessage(
    bot,
    msg.message.chat.id,
    msg.message.message_id,
    `${strings().periodFromChooseMessage}\n${user.month_from_choose} ${user.day_from_choose} ${user.year_from_choose}`,
  )
  keyboards.sendInline(
    bot,
    msg.message.chat.id,
    strings().periodToChooseMessage,
    editorChooseKeyboards(
      user,
      user.month_to_choose,
      strings().monthToChooseInline,
      strings().monthChooseOptions
    )
  )
}


function editDayToChoose(msg, bot, user) {
  keyboards.editMessage(
    bot,
    msg.message.chat.id,
    msg.message.message_id,
    `${strings().periodToChooseMessage} \n${user.month_to_choose}`,
    editorChooseKeyboards(
      user,
      user.day_to_choose,
      strings().dayToChooseInline,
      strings().dayChooseOptions,
    )
  )
}

function editYearToChoose(msg, bot, user) {
  keyboards.editMessage(
    bot,
    msg.message.chat.id,
    msg.message.message_id,
    `${strings().periodToChooseMessage} \n${user.month_to_choose} ${user.day_to_choose}`,
    editorChooseKeyboards(
      user,
      user.year_to_choose,
      strings().yearToChooseInline,
      strings().yearChooseOptions
    )
  )
}

function editPriceChoose(msg, bot, user) {
  keyboards.editMessage(
    bot,
    msg.message.chat.id,
    msg.message.message_id,
    `${strings().periodToChooseMessage} \n${user.month_to_choose} ${user.day_to_choose} ${user.year_to_choose}`,
  )
  keyboards.sendInline(
    bot,
    msg.message.chat.id,
    strings().priceChooseMessage,
    editorChooseKeyboards(
      user,
      user.price_choose,
      strings().priceChooseInline,
      strings().priceChooseOptions
    )
  )
}

function editPhoneNumChoose(msg, bot, user) {
  keyboards.editMessage(bot, msg.message.chat.id, msg.message.message_id, strings().phoneChooseMessage)
  user.input_state = strings().phoneNumChooseState
  user.save()
}

function editorChooseKeyboards(user, period_choose, periodInline, periodOptions) {
  const periodChoose = period_choose
  const keyboard = []
  let tempRow = []

  for (let i = 0; i < periodOptions.length; i++) {
    const currentPeriod = periodOptions[i]
    const text = currentPeriod
    let periodDivider = i % 2 === 1
    if (periodInline === strings().dayFromChooseInline ||
      periodInline === strings().dayToChooseInline) {
      periodDivider = i === 6 || i === 13 || i === 20 || i === 27 || i === 30
    } else if (periodInline === strings().yearFromChooseInline ||
      periodInline === strings().yearToChooseInline) {
      periodDivider = i === 2
    }
    tempRow.push({
      text,
      callback_data: periodInline + strings().inlineSeparator + currentPeriod
    })
    if (periodDivider) {
      keyboard.push(tempRow)
      tempRow = []
    }
  }
  return keyboard
}

module.exports = {
  startFindTour,
  editAdultChildChoose,
  editMonthFromChoose,
  editDayFromChoose,
  editYearFromChoose,
  editMonthToChoose,
  editDayToChoose,
  editYearToChoose,
  editPriceChoose,
  editPhoneNumChoose,
};
