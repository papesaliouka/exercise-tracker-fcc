const userDatabase = require('./user.mongo');


async function getAllUsers() {
  return await userDatabase.find({}, { 'username': 1 })
}

async function addNewUser(username) {
  try{
    const user = await userDatabase.create({ username: username })
    return user
  }catch(e){
    console.log(e);
    return e
  }
}

async function storeExercises(userId, exercise) {
  try {
    const updatedUser = await userDatabase.findByIdAndUpdate(userId,{$push:{exercises:exercise}},{new:true});
    const {username, _id}= updatedUser
    const {date, description, duration} = exercise
    return {
      username,
      description,
      duration,
      date: new Date(date).toDateString(),
      _id,
    };
  } catch (e) {
    console.log(e);
    return {error:'failed to store exercise'}
  }

}



module.exports = {
  getAllUsers,
  addNewUser,
  storeExercises,
}











