const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log('数据库连接成功！'));
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, '必填字段'],
        maxlength: [8, '最大长度为8'],
        minlength: [3, '最小长度为3'],
        trim: true,
    },
    age: {
        type: Number,
        min: 18,
        max: 100,
    },
    publishedDate: {
        type: Date,
        default: Date.now,
    },
    course: {
        type: String,
        enum: {
            values: ['javascript', 'node.js', 'html', 'css'],
            message: '分类值一定要在范围内', 
        }
        
    },
    author: {
        type: String,
        validate: {
            validator: (v) => {
                return v&&v.length>5;
            },
            message: '输入的值不匹配',
        }
    }
})
const Post = mongoose.model('Post', postSchema);
Post.create({
    title: '    aaaa  ',
    age: 27,
    course: 'java',
    author: 'bd',
})
.catch(
    (err) => {
        for(var key in err.errors){
            console.log(err.errors[key].message);
        }
        
        // for(var key in err.errors) {
        //     console.log(err.errors[key]);
        // }
    }
);
