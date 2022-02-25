const skills = [
  {text: 'git', done: true, _id: 123456 },
  {text: 'github', done: true, _id: 234567 },
  {text: 'HTML', done: true, _id: 345678 },
  {text: 'CSS', done: true, _id: 456789},
  {text: 'Javascript', done: true, _id: 567891},
  {text: 'Nodejs', done: true, _id: 678910}
]

const find = (conditions, callback) => {
  // see if this works, if not, execute the code in the catch block
  try {
    // make sure that conditions is an object - if not throw a TypeError
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    // If the object is empty, return all the todos
    if (Object.keys(conditions).length === 0) return callback(null, skills)
	// deal with errors
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}

const findById = (id, callback) =>{
  try {
    const skill = skills.find(skill => skill._id === parseInt(id))
    if (!skill) throw new Error ('No skill was found')
    return callback(null, skill)
  } catch (error) {
    return callback(error, null)
  }
}

export { 
	find,
  findById
}