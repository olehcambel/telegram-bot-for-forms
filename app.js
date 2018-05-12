const mongoose = require('mongoose')
const events = require('events')

global.eventEmitter = new events.EventEmitter()

const config = require('./config');

mongoose.Promise = global.Promise
mongoose.connect(config.database)

require('./helpers/logic')

require('./helpers/statServer')

console.log('Bot is up and running')