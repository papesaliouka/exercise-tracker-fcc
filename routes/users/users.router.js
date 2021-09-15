const express = require('express');
const userRouter = express.Router();

const {
  httpGetUsers,
  httpPostUser,
  httpPostUserExercises,
} = require('./users.controller')

userRouter.get('/', httpGetUsers);

userRouter.post('/', httpPostUser);
userRouter.post('/:_id/exercises', httpPostUserExercises);




module.exports = userRouter;