const dbmanager = require('./dbmanager');
const keyboards = require('./keyboards');
const strings = require('./strings');

function startFindTour(msg, bot) {
  dbmanager.findUser({ id: msg.chat.id })
    .then((user) => {
      const userCopy = Object.create(user);
      userCopy.input_state = strings(user).countryChooseState;
      userCopy.forms_id = msg.message_id;
      return userCopy.save()
        .then((savedUser) => {
          const message = strings(savedUser).countryChooseMessage
          return keyboards.hideKeyboard(bot, msg.chat.id, message)
            // .then(() => {
              // return keyboards.sendInline(bot, msg.chat.id, message, 
                // [[{ //   text: strings(user).cancel, //   callback_data: `${strings(user).inputFindTourCancelInline}${strings(user).inlineSeparator}`, // }]]
              // );
            // });
        });
    })
    .catch(/** todo: handle error */);
}

function editAdultChildChoose(msg, bot, user) {
  bot.sendMessage(msg.chat.id, strings(user).adultChildChooseMessage)
  user.input_state = strings(user).adultChildChooseState //delete then
  user.save()
}

function editMonthFromChoose(msg, bot, user) {
  keyboards.sendInline(
    bot,
    msg.chat.id,
    strings(user).periodFromChooseMessage,
    editorChooseKeyboards(
      user,
      user.month_from_choose,
      strings(user).monthFromChooseInline,
      strings(user).monthChooseOptions
    )
  )
}

function editDayFromChoose(msg, bot, user) {
  keyboards.editMessage(
    bot,
    msg.message.chat.id,
    msg.message.message_id,
    `${strings(user).periodFromChooseMessage}\n${user.month_from_choose}`,
    editorChooseKeyboards(
      user,
      user.day_from_choose,
      strings(user).dayFromChooseInline,
      strings(user).dayChooseOptions,
    )
  )
}

function editYearFromChoose(msg, bot, user) {
  keyboards.editMessage(
    bot,
    msg.message.chat.id,
    msg.message.message_id,
    `${strings(user).periodFromChooseMessage}\n${user.month_from_choose} ${user.day_from_choose}`,
    editorChooseKeyboards(
      user,
      user.year_from_choose,
      strings(user).yearFromChooseInline,
      strings(user).yearChooseOptions
    )
  )
}

function editMonthToChoose(msg, bot, user) {
  keyboards.editMessage(
    bot,
    msg.message.chat.id,
    msg.message.message_id,
    `${strings(user).periodFromChooseMessage}\n${user.month_from_choose} ${user.day_from_choose} ${user.year_from_choose}`,
  )
  keyboards.sendInline(
    bot,
    msg.message.chat.id,
    strings(user).periodToChooseMessage,
    editorChooseKeyboards(
      user,
      user.month_to_choose,
      strings(user).monthToChooseInline,
      strings(user).monthChooseOptions
    )
  )
}


function editDayToChoose(msg, bot, user) {
  keyboards.editMessage(
    bot,
    msg.message.chat.id,
    msg.message.message_id,
    `${strings(user).periodToChooseMessage} \n${user.month_to_choose}`,
    editorChooseKeyboards(
      user,
      user.day_to_choose,
      strings(user).dayToChooseInline,
      strings(user).dayChooseOptions,
    )
  )
}

function editYearToChoose(msg, bot, user) {
  keyboards.editMessage(
    bot,
    msg.message.chat.id,
    msg.message.message_id,
    `${strings(user).periodToChooseMessage} \n${user.month_to_choose} ${user.day_to_choose}`,
    editorChooseKeyboards(
      user,
      user.year_to_choose,
      strings(user).yearToChooseInline,
      strings(user).yearChooseOptions
    )
  )
}

function editPriceChoose(msg, bot, user) {
  keyboards.editMessage(
    bot,
    msg.message.chat.id,
    msg.message.message_id,
    `${strings(user).periodToChooseMessage} \n${user.month_to_choose} ${user.day_to_choose} ${user.year_to_choose}`,
  )
  keyboards.sendInline(
    bot,
    msg.message.chat.id,
    strings(user).priceChooseMessage,
    editorChooseKeyboards(
      user,
      user.price_choose,
      strings(user).priceChooseInline,
      strings(user).priceChooseOptions
    )
  )
}

function editPhoneNumChoose(msg, bot, user) {
  keyboards.editMessage(bot, msg.message.chat.id, msg.message.message_id, strings(user).phoneChooseMessage)
  user.input_state = strings(user).phoneNumChooseState
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
    if (periodInline === strings(user).dayFromChooseInline ||
      periodInline === strings(user).dayToChooseInline) {
      periodDivider = i === 6 || i === 13 || i === 20 || i === 27 || i === 30
    } else if (periodInline === strings(user).yearFromChooseInline ||
      periodInline === strings(user).yearToChooseInline) {
      periodDivider = i === 2
    }
    tempRow.push({
      text,
      callback_data: periodInline + strings(user).inlineSeparator + currentPeriod
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
