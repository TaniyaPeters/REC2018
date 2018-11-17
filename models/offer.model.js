const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let OfferSchema = new Schema({
    offerName: {type: String, required: true, max: 30},
    description: {type: String, required: false, max: 250},
    offerType: {type: String, required: true, max: 30},
    longitude: {type: Number, required: true},
    latitude: {type: Number, required: true}
});

// Export Models
module.exports = mongoose.model('Offer', OfferSchema);
