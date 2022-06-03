const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost1/playground')
        .then(() => console.log('数据库连接成功'))
        .catch((err) => console.log(err,'数据库连接失败'));
