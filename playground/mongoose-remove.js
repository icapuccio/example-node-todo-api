/* eslint-disable no-console */
const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// Todo.deleteMany({}).then((result) => {
//   console.log(result);
// });

Todo.findByIdAndDelete('5bd60cad06ddf08888515929').then(todo => {
  console.log(todo);
});
