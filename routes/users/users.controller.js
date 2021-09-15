const { getAllUsers, addNewUser, storeExercises} = require('../../models/users.models');

const formatDate=(date)=>{
  if(!date) {
    return Date().split(' ').slice(0,4).join(' ');
  }
  return new Date(date).toString().split(' ').slice(0,4).join(' ')
}


async function httpGetUsers(req, res) {
  const users = await getAllUsers();
  res.status(200).json(users)
}

async function httpPostUser(req, res) {
  const { username } = req.body;
  const user = await addNewUser(username);
  res.status(200).json(user);
}


async function httpPostUserExercises(req, res) {
  let { duration, description, date } = req.body;
  const userId = req.body[':_id'];

  if(!duration||!description){
    return res.json('duration and description required')
  }

  if(!date){
    date = formatDate();
  }

  date = formatDate(date);

  const user = await storeExercises(userId, { duration: Number(duration), description, date });
  return res.status(200).json(user);
}


module.exports = {
  httpGetUsers,
  httpPostUser,
  httpPostUserExercises,
}