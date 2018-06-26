const express = require('express')
const utils = require('utility')
const Router = express.Router()
const model = require('./model')

const User = model.getModel('user')
const Chat = model.getModel('chat')

const _filter = { 'pwd': 0, '__v': 0 }     //设置查询条件，不显示该字段

Router.get('/list', function (req, res) {
  // User.remove({}, function(err,doc){})
  const { type } = req.query

  User.find({ type }, function (err, doc) {
    return res.json({ code: 0, data: doc })
  })
})

Router.get('/getmsglist', function (req, res) {
  const userid = req.cookies.userid
  // {'$or':[{from:user,to:user}]}
  Chat.find({}, function (err, doc) {
    if (!err) {
      return res.json({ code: 0, msgs: doc })
    }
  })
})

Router.post('/update', function (req, res) {
  const userid = req.cookies.userid
  if (!userid) {
    return json.dumps({ code: 1 })
  }

  const body = req.body
  User.findByIdAndUpdate(userid, body, function (err, doc) {
    if (doc) {
      const data = Object.assign({}, {
        user: doc.user,
        type: doc.type
      }, body)

      return res.json({ code: 0, data })
    }
  })
})

Router.post('/login', function (req, res) {
  const { user, pwd } = req.body
  //'pwd: 0'表示不显示password字段
  User.findOne({ user, pwd: md5Pwd(pwd) }, _filter, function (err, doc) {
    if (!doc) {
      res.json({ code: 1, msg: '用户名或者密码错误' })
    }
    res.cookie('userid', doc._id)
    return res.json({ code: 0, data: doc })
  })
})

Router.post('/register', function (req, res) {
  const { user, pwd, type } = req.body

  User.findOne({ user: user }, function (err, doc) {
    if (doc) {
      return res.json({ code: 1, msg: '用户已存在' })
    }
    const userModal = new User({ user, type, pwd: md5Pwd(pwd) })

    userModal.save(function (e, d) {
      if (e) {
        return res.json({ code: 1, msg: '后端出错了!' })
      }

      const { user, type, _id } = d
      res.cookie('userid', _id)
      return res.json({ code: 0, data: { user, type, _id } })
    })
  })
})

Router.get('/info', function (req, res) {
  const { userid } = req.cookies
  if (!userid) {
    return res.json({ code: 1 })
  }

  User.findOne({ _id: userid }, _filter, function (err, doc) {
    if (err) {
      return res.json({ code: 1, msg: '后端出错了' })
    }

    if (doc) {
      return res.json({ code: 0, data: doc })
    }
  })
})

// 采用两层md5+盐的方式提高密码复杂度
function md5Pwd(pwd) {
  const salt = 'job_boss_chat@w123edc#'
  return utils.md5(utils.md5(pwd + salt))
}

module.exports = Router