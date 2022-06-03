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
//abc.findOneAndDelete({_id: '5c09f267aeb04b22f8460968'}).then(r => console.log(r));
abc.deleteMany({}).then(r => console.log(r));
