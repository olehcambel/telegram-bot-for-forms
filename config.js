const dotenv = require('dotenv')
const path = require('path')

// const root = path.join.bind(this, __dirname)
// dotenv.config({ path: root('.env') })

module.exports = {
  telegram_api_key: process.env.TELEGRAM_API_KEY,
  database: process.env.MONGO_DB_URL,
  // production_url: process.env.LETSGOSHKA_BOT_PRODUCTION_URL,
  should_use_webhooks: false,
  // should_use_webhooks: process.env.USE_WEBHOOKS || false,
  // webhook_callback_url: process.env.WEBHOOK_CALLBACK_URL,
  // ssl_certificate_path: process.env.SSL_CERTIFICATE_PATH,
  // ssl_key_path: process.env.SSL_KEY_PATH,
  // ssh_rsa_path: process.env.SSH_RSA_PATH,
  //https://telegram-bot-for-forms.herokuapp.com/
  adminChatId: process.env.ADMIN_CHAT_ID,
};
