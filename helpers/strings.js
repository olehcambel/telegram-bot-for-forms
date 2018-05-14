const englishObjectId = '581d0b8db33e47e7008726bd';
const russianObjectId = '581d0b8db33e47e7008726be';
const ukrainianObjectId = '581d0b8db33e47e7008726bk';


const english = {
  initialMessage: 'Welcome, whoever you are to the travel Telegram bot Letsgoshka.\n\nIf you are looking for a tour, please fill out your "Find tour".\n\nThank you for joining our friendly family!',
  mainMenuMessage: 'Hi again, dude! Select "Find tour" if you are looking for a tour,\nalso you can change language down below[not available]',
  findTourHideKeyboardMessage: 'So here will be only 6 qustions, after them our agents will find and kill ya.',

  countryChooseMessage: 'Lets start our form👳‍♂️🧕\n\n#1 Dude, type Country and City',
  adultChildChooseMessage: '#2. Adults and Children 2a 4c, mkay?',
  periodFromChooseMessage: '#3 Choose the date of departure',
  periodToChooseMessage: '#4 Choose the end date',
  priceChooseMessage: '#5 Mostly finished.. Man, whats your expected price for that sh..?)',
  phoneChooseMessage: '#6 Last question.. your phone number',
  sendAfterFindTourMessage: 'Okay, now go and wait for call, cuz your form has already been send into the hell\n😈👹👺💀👻',
  setLanguageMessage: 'wanna change language?\nchoose one of em in the bottom 🇬🇧 or 🇷🇺',

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
    findTour: '🛸🚁 Find tour',
    // help: '❔ Help',
    chooseLanguage: '👅 Choose language',
  },

  setLanguageOptions: {
    ru: 'Russian 🇷🇺',
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

}
const ukrainian = {}

function locale(user) {
  //|| user.language_code === 'ru' || user.language_code === 'eng' || user.language_code === 'ua'
  if (!user || user.language_code) {
    return english;
  } else {
    return russian;
  }
}

/** Exports */
module.exports = locale;