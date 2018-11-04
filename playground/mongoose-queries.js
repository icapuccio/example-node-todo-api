/* eslint-disable no-console */
const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// var id = '5bd5cb7d09d27d234499aba9';

// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });

// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Todo not found');
//   }
//   console.log('Todo by ID', todo);
// }).catch((e) => console.log('Error:', e));

const id = '5bd500b3ab50210dee4a8e59';

User.findById(id).then(
  user => {
    if (!user) {
      return console.log('User not found');
    }
    console.log(JSON.stringify(user, undefined, 2));
  },
  e => {
    console.log(e);
  }
);
