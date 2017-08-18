const mongoose = require('mongoose')
const { Schema } = mongoose

const personSchema = Schema({
    _id: Number,
    name: String,
    age: Number,
    stories: [{
        type: Schema.Types.ObjectId,
        ref: 'Story'
    }]
})

module.exports = personSchema