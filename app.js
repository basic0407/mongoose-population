const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/test', {
    useMongoClient: true
})
mongoose.Promise = global.Promise
const { Person, Story } = require('./models')


var aaron = new Person({
    _id: 1,
    name: 'Aaron',
    age: 100
})
const story1 = new Story({
    title: "Once upon a timex.",
    _creator: aaron._id
})

aaron.stories.push(story1)
aaron.save((err) => {
    if(err) console.error(err)
    story1.save((err) => {
        if(err) console.error('err', err)
    })
})

/* Story.findOne({ title: 'Once upon a timex.'}).populate('_creator').exec().then(story => {
    console.log(story)
    // console.log(`The creator is ${story._creator.name}`)
}).catch(err => console.error('err', err)) */

/* Story.findOne({ title: 'Once upon a timex.' }).exec().then(story => {
    story._creator = aaron
    console.log(story._creator.name)
}).catch(err => console.error('err', err)) */
/* 
Story.findOne({ title: /timex/i }).populate('_creator', 'name').exec().then(story => {
    console.log(story)
}).catch(err => console.error('err', err)) */

Person.findOne({ name: 'Aaron' }).sort({_id:-1}).populate('stories').exec().then(person => {
    console.log(person)
}).catch(err => console.error('err', err))