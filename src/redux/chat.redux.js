import io from 'socket.io-client'
import axios from 'axios'

const socket = io('ws://localhost:8080')

// 获取聊天列表
const MSG_LIST = 'MSG_LIST'
// 读取信息
const MSG_RECV = 'MSG_RECV'
// 标识已读
const MSG_READ = 'MSG_READ'

const initState = {
  chatmsg: [],
  unread: 0,
  users: {}
}

// Reducer
export function chat(state = initState, action) {
  switch (action.type) {
    case MSG_LIST:
      return {
        ...state,
        chatmsg: action.payload.msgs,
        users: action.payload.users,
        unread: action.payload.msgs.filter(v => !v.read && v.to === action.payload.userid).length
      }
    case MSG_RECV:
      const n = action.payload.to === action.userid ? 1 : 0
      return {
        ...state,
        chatmsg: [...state.chatmsg, action.payload],
        unread: state.unread + n
      }
    case MSG_READ:
      const { from } = action.payload

      return {
        ...state,
        chatmsg: state.chatmsg.map(v => ({ ...v, read: from === v.from ? true : v.read })),
        unread: state.unread > action.payload.num ? (state.unread - action.payload.num) : 0
      }
    default:
      return state
  }
}

function msgList(msgs, users, userid) {
  return { type: MSG_LIST, payload: { msgs, users, userid } }
}

function msgRecv(msg, userid) {
  return { type: MSG_RECV, payload: msg, userid }
}

function msgRead({ from, userid, num }) {
  return { type: MSG_READ, payload: { from, userid, num } }
}

export function getMsgList() {
  return (dispatch, getState) => {
    axios.get('/user/getmsglist')
      .then(res => {
        if (res.status === 200 && res.data.code === 0) {
          const userid = getState().user._id
          dispatch(msgList(res.data.msgs, res.data.users, userid))
        }
      })
  }
}

export function sendMsg({ from, to, msg }) {
  return dispatch => {
    socket.emit('sendmsg', { from, to, msg })
  }
}

export function recvMsg() {
  return (dispatch, getState) => {
    socket.on('recvmsg', function (data) {
      const userid = getState().user._id
      dispatch(msgRecv(data, userid))
    })
  }
}

export function readMsg(from) {
  return async (dispatch, getState) => {
    const res = await axios.post('/user/readmsg', { from })
    const userid = getState().user._id
    if (res.status == 200 && res.data.code == 0) {
      dispatch(msgRead({ userid, from, num: res.data.num }))
    }
  }
}