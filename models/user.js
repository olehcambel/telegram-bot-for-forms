/** Dependencies */
const mongoose = require('mongoose');
const strings = require('../helpers/strings');

/** Schema */
const Schema = mongoose.Schema;
const userSchema = new Schema({
  id: Number,
  first_name: String,
  last_name: String,
  username: String,
  language_code: String,
  forms_id: Number,
  status: {
    type: String,
    default: '#open'
  },
  country_choose: String,
  adult_child: String,
  month_from_choose: String,
  day_from_choose: Number,
  year_from_choose: Number,
  month_to_choose: String,
  day_to_choose: Number,
  year_to_choose: Number,
  price_choose: String,
  phone_num: String,
  input_state: String,
  input_state_data: String,
}, { timestamps: true });

module.exports = mongoose.model('user', userSchema);
