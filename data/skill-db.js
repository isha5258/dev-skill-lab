const skills = [
  {text: 'git', done: true, skillLevel: 'proficient' },
  {text: 'github', done: true, skillLevel: 'proficient' },
  {text: 'HTML', done: true, skillLevel: 'proficient' },
  {text: 'CSS', done: true, skillLevel: 'adept'},
  {text: 'Javascript', done: true, skillLevel: 'adept'},
  {text: 'Nodejs', done: true, skillLevel: 'adept'},
  {text: 'Python', done: true, skillLevel: 'adept'},
  {text: 'SQL', done: true, skillLevel: 'adept'},
]

const find = (conditions, callback) => {
  // see if this works, if not, execute the code in the catch block
  try {
    // make sure that conditions is an object - if not throw a TypeError
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    // If the object is empty, return all the todos
    if (Object.keys(conditions).length === 0) return callback(null, todos)
	// deal with errors
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}

export { 
	find
}