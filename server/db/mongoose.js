var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
var dbUrl = process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp'
mongoose.connect(dbUrl, { useNewUrlParser: true });

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

module.exports = { mongoose };
