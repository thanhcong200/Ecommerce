const userModel = require('../models/User')
const roomModel = require('../models/Room')

exports.register = async(req, res) => {
    const {name, email, password, isAdmin} = req.body
    const regEmail = /@gmail.com/
    if( !regEmail.test(email)) throw('Email invalid!')
    if(password.length < 6) throw('Password must be 6 character least!')
    if(name.length < 4) throw(' Username must be 6 character least!')

    const isEmail = await userModel.findOne({email})
    if(isEmail) throw('Email is already used!')

    const user = await userModel({
        name,
        email, 
        password,
        isAdmin
    })

    const room = await roomModel({
        name
    })

    await room.save()
    await user.save()

    res.json({
        status: 201,
        user: user,
        room: room
    })

}


exports.login = async(req, res) => {
    const {email, password} = req.body 
    const user = await userModel.findOne({email, password})
    if(!user) throw('Login fail!')

    res.json({
        status: 200,
        user: user
    })
}


exports.getUsers = async(req, res) => {
    const users = await userModel.find({})

    res.json({
        status: 200,
        users: users
    })
} 

