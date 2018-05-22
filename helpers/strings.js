const englishObjectId = '581d0b8db33e47e7008726bd';
const russianObjectId = '581d0b8db33e47e7008726be';
const ukrainianObjectId = '581d0b8db33e47e7008726bk';


const english = {
  initialMessage: 'Welcome to the Telegram bot! It has been created to help you find the dream tour. Enjoy!\nIf you are looking for a tour, please click the "Find tour" button and to change language click the "Choose language".\nThanks for joining!',
  mainMenuMessage: 'Hi again!🙂\nIf you are looking for a tour, please click the "Find tour" button and to change language click the "Choose language".',

  countryChooseMessage: '🌆 What country and city do you want to go to? For example: "France, Paris".',
  adultChildChooseMessage: '👨‍👩‍👧‍👦 How many adults and children are there going to be? For example: "2 a 2 c".',
  periodFromChooseMessage: '✈️ Choose the start day of the tour',
  periodToChooseMessage: 'Choose the end date of the tour ✈️',
  priceChooseMessage: '💸 How much money are you ready to spend for your trip?',
  phoneChooseMessage: '📞 Please, type your number so that our agents are able to contact you.',
  sendAfterFindTourMessage: 'Thank you so much for your time! Have a nice day. 😊',
  setLanguageMessage: 'Wanna change language?\nchoose one of available below 🇬🇧 or 🇷🇺',

  countryGroupHtml: '<i>Страна:</i>',
  adultChildGroupHtml: '<i>Взрослые-дети:</i>', 
  monthFromGroupHtml: '<i>Вылет:</i>', 
  monthToGroupHtml: '<i>Прилет:</i>', 
  priceGroupHtml: '<i>Цена:</i>', 
  phoneNumGroupHtml: '<i>Телефон:</i>', 

  countryGroup: 'Страна:',
  adultChildGroup: 'Взрослые-дети:',
  monthFromGroup: 'Вылет:',
  monthToGroup: 'Прилет:',
  priceGroup: 'Цена:',
  phoneNumGroup: 'Телефон:',

  mainMenuOptions: {
    findTour: '🔍 Find tour',
    // help: '❔ Help',
    chooseLanguage: '🗣 Choose language',
  },

  setLanguageOptions: {
    ru: 'Русский 🇷🇺',
    eng: 'English 🇬🇧'
  },
  ru: 'ru',
  eng: 'eng',

  monthChooseOptions: [
    'January', 'February',
    'March', 'April',
    'May', 'June',
    'July', 'August',
    'September', 'October',
    'November', 'December'
  ],
  dayChooseOptions: [
    '1', '2', '3', '4', '5', '6', '7',
    '8', '9', '10', '11', '12', '13', '14',
    '15', '16', '17', '18', '19', '20', '21',
    '22', '23', '24', '25', '26', '27', '28',
    '29', '30', '31'
  ],
  yearChooseOptions: [
    '2018', '2019', '2020'
  ],

  priceChooseOptions: [
    '$99 - $299', '$299 - $499',
    '$499 - $999', '$999+'
  ],

  countryChooseState: 'cCS',
  adultChildChooseState: 'aCCS',
  monthFromChooseInline: 'mFCI',
  dayFromChooseInline: 'dFCI',
  yearFromChooseInline: 'yFCI',
  monthToChooseInline: 'mTCI',
  dayToChooseInline: 'dTCI',
  yearToChooseInline: 'yTCI',
  priceChooseInline: 'pCI',
  phoneNumChooseState: 'cNCS',

  setLanguageState: 'sLS',

  statusInGroupOpen: '#open',
  statusInGroupConfirmed: '#confirmed',
  checkedInGroup: '☣checked',
  checkedInGroupInline: 'cIGI',
  // cancel: '❌ Cancel',
  // inputFindTourCancelInline: 'iBCI',
  inlineSeparator: '~',
}

const russian = {
  initialMessage: 'Здравствуйте! Я - Телеграм бот!\nЕсли Вы ищете тур, то я помогу. Выберите "Найти тур", а для смены языка нажмите на "Выбрать язык".\nСпасибо за то, что выбрали меня!',
  mainMenuMessage: 'Снова привет!🙂\nЕсли Вы ищете тур, то я помогу. Выберите "Найти тур", а для смены языка нажмите на "Выбрать язык".',

  countryChooseMessage: '🌆 Выберите страну и город, которые хотите посетить. Например: Польша, Варшава.',
  adultChildChooseMessage: '👨‍👩‍👧‍👦 Сколько будет взрослых и детей? Например: 2 в 2 д',
  periodFromChooseMessage: ' ✈️ Выберите дату начала тура.',
  periodToChooseMessage: 'Выберите дату окончания тура. ✈️',
  priceChooseMessage: '💸 Сколько Вы готовы потратить на поездку?',
  phoneChooseMessage: '📞 Пожалуйста, укажите свой номер телефона, чтобы наши агенты смогли с Вами связаться.',
  sendAfterFindTourMessage: 'Большое спасибо за Ваше время! Отличного дня!  😊',
  setLanguageMessage: 'Хочешь сменить язык?\nВыбери один из доступних внизу 🇬🇧 или 🇷🇺',

  countryGroupHtml: '<i>Страна:</i>',
  adultChildGroupHtml: '<i>Взрослые-дети:</i>',
  monthFromGroupHtml: '<i>Вылет:</i>',
  monthToGroupHtml: '<i>Прилет:</i>',
  priceGroupHtml: '<i>Цена:</i>',
  phoneNumGroupHtml: '<i>Телефон:</i>',

  countryGroup: 'Страна:',
  adultChildGroup: 'Взрослые-дети:',
  monthFromGroup: 'Вылет:',
  monthToGroup: 'Прилет:',
  priceGroup: 'Цена:',
  phoneNumGroup: 'Телефон:',

  mainMenuOptions: {
    findTour: '🔍 Найти тур',
    // help: '❔ Help',
    chooseLanguage: '🗣 Выбрать язык',
  },

  setLanguageOptions: {
    ru: 'Русский 🇷🇺',
    eng: 'English 🇬🇧'
  },
  ru: 'ru',
  eng: 'eng',

  monthChooseOptions: [
    'Январь', 'Февраль',
    'Март', 'Апрель',
    'Май', 'Июнь',
    'Июль', 'Август',
    'Сентябрь', 'Октябрь',
    'Ноябрь', 'Декабрь'
  ],
  dayChooseOptions: [
    '1', '2', '3', '4', '5', '6', '7',
    '8', '9', '10', '11', '12', '13', '14',
    '15', '16', '17', '18', '19', '20', '21',
    '22', '23', '24', '25', '26', '27', '28',
    '29', '30', '31'
  ],
  yearChooseOptions: [
    '2018', '2019', '2020'
  ],

  priceChooseOptions: [
    '$99 - $299', '$299 - $499',
    '$499 - $999', '$999+'
  ],

  countryChooseState: 'cCS',
  adultChildChooseState: 'aCCS',
  monthFromChooseInline: 'mFCI',
  dayFromChooseInline: 'dFCI',
  yearFromChooseInline: 'yFCI',
  monthToChooseInline: 'mTCI',
  dayToChooseInline: 'dTCI',
  yearToChooseInline: 'yTCI',
  priceChooseInline: 'pCI',
  phoneNumChooseState: 'cNCS',

  setLanguageState: 'sLS',

  statusInGroupOpen: '#open',
  statusInGroupConfirmed: '#confirmed',
  checkedInGroup: '☣checked',
  checkedInGroupInline: 'cIGI',
  // cancel: '❌ Cancel',
  // inputFindTourCancelInline: 'iBCI',
  inlineSeparator: '~',
}
const ukrainian = {}

function locale(user) {
  //|| user.language_code === 'ru' || user.language_code === 'eng' || user.language_code === 'Uk-ua'
  if (!user) {return english
  }
  else if (user.language_code === 'ru' || user.language_code === 'ru-RU') {
    return russian;
  } else {
    return english;
  }
}

/** Exports */
module.exports = locale;