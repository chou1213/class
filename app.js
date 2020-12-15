const mongoose = require('mongoose');

mongoose.connect('mongodb://test:1233210@47.98.198.243:27017/testdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const User = mongoose.model('users', {
    name: String,
    age: Number,
    email: String
});

const test = new User({
    name: 'lee',
    age: 28,
    email: 'chenliqiong.bb@163.com'
})

test.save().then(() => {
    console.log('save ok');
})