const skills = [
  {text: 'git', done: true, skillLevel: 'proficient' },
  {text: 'github', done: true, skillLevel: 'proficient' },
  {text: 'HTML', done: true, skillLevel: 'proficient' },
  {text: 'CSS', done: true, skillLevel: 'adept'},
  {text: 'Javascript', done: true, skillLevel: 'adept'},
  {text: 'Nodejs', done: true, skillLevel: 'novice'},
  {text: 'Python', done: false, skillLevel: ''},
  {text: 'SQL', done: false, skillLevel: ''},
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

export { 
	find
}