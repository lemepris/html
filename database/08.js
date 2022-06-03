const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/playground');
//创建用户集合
const User = mongoose.model('User', new mongoose.Schema({name: String, age: Number}));
//创建文章集合
const Post = mongoose.model('Post', new mongoose.Schema({tilte: String, author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}}));
//给用户集合添加一条数据
// User.create({name: 'lemepris', age: 30}).then(r => console.log(r));
// //本来二者井水不犯河水。但是一般来说，登录的用户也是文章的作者，所以用户集合中的name其实和
// //文章集合的author是一个东西。所以不妨假设，文章集合的author里面存的是用户这个文档。
// //将用户集合和文章集合关联
// //已经引用了
// //给文章添加一个数据
// //既然上面说author里面存的是用户这个数据，所以author里面应该写的就是用户的_id
// Post.create({title: '今天天气真不错', author: '629a066f990232055059aa69' }).then(r => console.log(r));
Post.find().populate('author').then(r => console.log(r));