require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.URL_DATABASE, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

mongoose.connection.on('error', (err) => {
    console.log('Connect fail! ' + err.message)
})

mongoose.connection.once('open', () => {
    console.log('Connect success!')
})


require('./models/User')
require('./models/Room')
require('./models/Product')
require('./models/Message')
require('./models/Order')

const app = require('./app')


const server = app.listen(process.env.PORT, () => console.log(`Running at ${process.env.PORT} port.`))
const io = require('socket.io')(server);


io.on('connection', (socket) => {
    
    socket.on('disconnect', () => {
        console.log('Disconnected: ' );
    });

    socket.on('joinRoom', ({idRoom})=>{
        socket.join(idRoom);
        console.log('Join success id room: ' + idRoom);
    });

    socket.on('leaveRoom', ({idRoom}) => {
        socket.leave(idRoom);
        console.log('Leaved id room: ' + idRoom);
    })

    socket.on('messageRoom', async({room, message, user})=>{
        
        const userSend = await User.findOne({_id: user});
        if(message.trim().length > 0 && userSend){
            
            const newMessage = new Message({
                room,
                user,
                message
            });
          
            
            io.to(idRoom).emit('newMessage', {
                room,
                user,
                message
            })
            await newMessage.save();

        }
    })
})