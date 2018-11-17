const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let SupporterSchema = new Schema({
    username: {type: String, required: true, max: 30},
    password: {type: String, required: true, max: 30},
    verified: {type: Boolean, required:true},
    name: {type: String, required: true, max: 30},
    description: {type: String, required: false, max: 250}
});

// Export Models
module.exports = mongoose.model('Supporter', SupporterSchema);
