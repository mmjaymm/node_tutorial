const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create Schema & model
const SystemSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required.']
    },
    rank: {
        type: String
    },
    available: {
        type: Boolean,
        default: false
    }
    // add in geo location
});

const System = mongoose.model('system', SystemSchema);

module.exports = System;