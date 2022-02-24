import { Router } from 'express'

import { app } from '../server.js'
const router = Router()

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource')
})


export {
  router
}

