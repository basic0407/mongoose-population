const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/test', {
    useMongoClient: true
})
mongoose.Promise = global.Promise
const { Schema } = mongoose

const personSchema = Schema({
    _id : Number,
    name: String,
    age : Number,
    stories: [{
        type: Schema.Types.ObjectId,
        ref: 'Story'
    }]
})

const storySchema = Schema({
    _creator: {
        type: Number, ref: 'Person'
    },
    title: String,
    fans : [{
        type: Number, ref: 'Person'
    }]
})

const Story = mongoose.model('Story', storySchema)
const Person = mongoose.model('Person', personSchema)


const aaron = new Person({
    _id: 2,
    name: 'Aaron',
    age: 100
})

aaron.save((err) => {
    if(err) console.error('err', err)
    console.log('id', aaron._id)
    const story1 = new Story({
        title: "Once upon a times.",
        _creator: aaron._id
    })

    story1.save((err) => {
        if(err) console.error('err', err)
        console.log('Awesome')
    })
})

Story.findOne({ title: 'Once upon a times.'}).
populate('_creator').
exec((err, story) => {
    if(err) console.error('err', err)
    console.log('The creator is %s', story._creator.name)
})