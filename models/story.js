const mongoose = require('mongoose')
const storySchema = require('./../schemas/story')

const Story = mongoose.model('Story', storySchema)

module.exports = Story