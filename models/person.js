const mongoose = require('mongoose')
const personSchema = require('./../schemas/person')

const Person = mongoose.model('Person', personSchema)

module.exports = Person