const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const app = express()
const model = require('./model')
const Chat = model.getModel('chat')

// 将IO与express关联。
const server = require('http').Server(app)
const io = require('socket.io')(server)

io.on('connection', function (socket) {
  socket.on('sendmsg', function (data) {
    //广播这一消息
    const { from, to, msg } = data
    const chatid = [from, to].sort().join('_')
    Chat.create({chatid, from , to, content: msg}, function(err,doc){
      io.emit('recvmsg', Object.assign({},doc._doc))
    })

    console.log('接受数据', data)
  
  })
})

const userRouter = require('./user')

app.use(cookieParser())
app.use(bodyParser.json())      //解析Post传递过来的JOSN数据

app.use('/user', userRouter)
server.listen(8080, () => {
  console.log('Listen on 8080')
})
