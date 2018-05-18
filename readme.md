telegram-bot-for-forms was done to create tourism forms using final state machine with reply_markup and inline keyboards, with button to change language. After creating form and saving into MongoDB - it will be sent into the group or channel with that information. 

### Instalation
***
npm i

npm run start
***
use [mlab.com](https://mlab.com/) for mongoDB

file .env.example to add Environment Variables
***
uncomment in config.js

*// const dotenv = require('dotenv')*

*// const path = require('path')*

*// const root = path.join.bind(this, __dirname)*

*// dotenv.config({ path: root('.env') })*