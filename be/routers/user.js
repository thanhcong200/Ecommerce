const userRouters = require('express').Router()
const userControllers = require('../controllers/user')

userRouters.post('/register', userControllers.register)
userRouters.post('/login', userControllers.login)
userRouters.get('/', userControllers.getUsers)


module.exports = userRouters