const mongoose = require('mongoose')
const { Schema } = mongoose

const storySchema = Schema({
    _creator: {
        type: Number, ref: 'Person'
    },
    title: String,
    fans: [{
        type: Number,
        ref: 'Person'
    }]
})

module.exports = storySchema