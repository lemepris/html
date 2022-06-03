const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log('数据库连接成功！'));
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    hobbies: [String],
    passowrd: String,
})
const abc = mongoose.model('User', userSchema);
//abc.find().then(r => console.log(r));
//abc.find({_id: '5c09f1e5aeb04b22f8460965'}).then(r => console.log(r));
//abc.findOne({_id: '5c09f2b6aeb04b22f846096a'}).then(r => console.log(r));
//abc.findOne({name: '狗蛋'}).then(r => console.log(r));
//abc.find({age: {$gt: 20, $lt: 50}}).then(r => console.log(r));
//abc.find({hobbies: {$in: ['吃饭']}}).then(r => console.log(r));
//abc.find().select(['name', 'email', '-_id']).then(r => console.log(r));
//abc.find().sort('age').then(r => console.log(r));
//abc.find().sort('-age').then(r => console.log(r));
//abc.find().skip(2).then(r => console.log(r));
//abc.find().limit(4).then(r => console.log(r));

