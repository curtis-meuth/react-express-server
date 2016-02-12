var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var groceryModel = new Schema({
    name: {
        type: String
    },
    purchased: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Grocery', groceryModel);