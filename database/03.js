const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log('数据库连接成功！'));
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    isPublished: Boolean,
})
const Course = mongoose.model('Course', courseSchema);
Course.create({
    name: 'JavaScript',
    author: 'lemepris',
    isPublished: true,
}).then(result => console.log(result));
