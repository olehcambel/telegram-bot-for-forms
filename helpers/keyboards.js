const config = require('../config')
const strings = require('./strings');
const dbmanager = require('./dbmanager');

function mainMenuKeyboard(user) {
  return [
    [
      { text: strings(user).mainMenuOptions.chooseLanguage },
      { text: strings(user).mainMenuOptions.findTour },
    ],
  ];
}

function sendMainMenu(bot, chatId, firstTime) {
  return dbmanager.findUser({ id: chatId })
    .then((user) => {
      return sendKeyboard(
        bot,
        chatId,
        ((firstTime) ? strings(user).initialMessage : strings(user).mainMenuMessage),
        mainMenuKeyboard(user)
      );
    })
    .catch(/** todo: handle error */);
}

function setLanguageMenu(bot, chatId, user) {
  // const currentLanguage = ((user.language_code === 'ru') ? 
  // strings(user).currentChoose + strings(user).setLanguageOptions.ru :
  // strings(user).currentChoose + strings(user).setLanguageOptions.eng
  // )
  return sendKeyboard(
    bot,
    chatId,
    strings(user).setLanguageMessage,
    setLanguageKeyboard(user)
  )
}

function setLanguageKeyboard(user) {
  return [
    [
      { text: strings(user).setLanguageOptions.ru },
      { text: strings(user).setLanguageOptions.eng },
    ],
  ];
}

function botInGroup(chatId, bot) {
  dbmanager.findUser({ id: chatId })
    .then((user) => {
      let text = sendTextInGroup(user)
      sendInline(bot,
        config.adminChatId,
        text,
        [[{
          text: strings(user).checkedInGroup,
          callback_data: `${strings(user).checkedInGroupInline}`,
        }]],
        undefined,
        true
      )
    })
    .catch(/** todo: hangle error */)
}

function sendKeyboard(bot, chatId, text, keyboard, then) {
  const options = {
    reply_markup: {
      keyboard,
      resize_keyboard: true,
    },
    disable_web_page_preview: 'true',
  };
  options.reply_markup = JSON.stringify(options.reply_markup);
  return bot.sendMessage(chatId, text, options)
    .then(then)
    .catch(err => console.log(err));
}

function sendInline(bot, chatId, text, keyboard, then, markdown) {
  const options = {
    reply_markup: { inline_keyboard: keyboard },
    disable_web_page_preview: 'true',
  };
  if (markdown) {
    options.parse_mode = 'HTML';
  }
  bot.sendMessage(chatId, text, options)
    .then(then)
    .catch(err => console.log(err));
}

function editInline(bot, chatId, messageId, keyboard) {
  const inlineMarkup = JSON.stringify({
    inline_keyboard: keyboard
  })
  const options = {
    chat_id: chatId,
    message_id: messageId

  }
  bot.editMessageReplyMarkup(inlineMarkup, options)
    .catch()
}

function editMessage(bot, chatId, messageId, text, keyboard, markdown) {
  let html = undefined
  if (markdown) {
    html = 'HTML'
  }
  return bot.editMessageText(text, {
    chat_id: chatId,
    message_id: messageId,
    reply_markup: JSON.stringify({
      inline_keyboard: keyboard,
    }),
    parse_mode: html
    // disable_web_page_preview: 'true',
  }).catch(/** todo: handle error */);
}

function hideKeyboard(bot, chatId, text) {
  return bot.sendMessage(chatId, text, {
    reply_markup: JSON.stringify({
      hide_keyboard: true,
    }),
    disable_web_page_preview: 'true',
  })

}

function sendTextInGroup(user) {
  const toggleUserId = (user.username)
    ? `${user.first_name} (@${user.username})`                                                    // &lt;a href="tg://user?id=${user.id}"&gt; ${user.first_name}&lt; /a&gt;
    : `<a href="tg://user?id=${user.id}">${user.first_name}</a> (<code>&lt;a href="tg://user?id=${user.id}"&gt;${user.first_name}&lt;/a&gt;</code>)`

  let text = `------- Заявка #${user.forms_id} -------\nstatus: ${user.status}\n ${toggleUserId}`
  if (user.country_choose || user.phone_num) {
    text = `${text}\n`
    if (user.country_choose) {
      text = `${text}\n${strings(user).countryGroupHtml} ${user.country_choose}`
    }
    if (user.adult_child) {
      text = `${text}\n${strings(user).adultChildGroupHtml} ${user.adult_child}`
    }
    if (user.month_from_choose && user.day_from_choose && user.year_from_choose) {
      text = `${text}\n${strings(user).monthFromGroupHtml} ${user.month_from_choose} ${user.day_from_choose}.${user.year_from_choose}`
    }
    if (user.month_to_choose && user.day_to_choose && user.year_to_choose) {
      text = `${text}\n${strings(user).monthToGroupHtml} ${user.month_to_choose} ${user.day_to_choose}.${user.year_to_choose}`
    }
    if (user.price_choose) {
      text = `${text}\n${strings(user).priceGroupHtml} ${user.price_choose}`
    }
    if (user.phone_num) {
      text = `${text}\n${strings(user).phoneNumGroupHtml} <b>${user.phone_num}</b>`
    }
  }
  return text
}
module.exports = {
  mainMenuKeyboard,
  sendMainMenu,
  setLanguageMenu,
  setLanguageKeyboard,
  botInGroup,
  sendKeyboard,
  sendInline,
  editInline,
  editMessage,
  hideKeyboard,
};
