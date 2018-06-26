import React from 'react'
import { NavBar, List, InputItem } from 'antd-mobile'
import { connect } from 'react-redux'
import { getMsgList, sendMsg, recvMsg } from '../../redux/chat.redux'

@connect(
  state => state,
  { getMsgList, sendMsg, recvMsg }
)
class Chat extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      msg: []
    }
  }

  componentDidMount() {
    
  }

  handleSubmit() {
    const from = this.props.user._id
    const to = this.props.match.params.user
    const msg = this.state.text
    this.props.sendMsg({ from, to, msg })
    this.setState({ text: '' })
  }

  render() {
    console.log(this.props)
    const user = this.props.match.params.user
    const Item = List.Item

    return (
      <div>
        <NavBar mode="dark">
          {this.props.match.params.user}
        </NavBar>

        {this.props.chat.chatmsg.map(v => {
          return v.from === user ? (
            <List key={v._id}>
              <Item>{v.content}</Item>
            </List>
          ) : (
              <List key={v._id}>
                <Item
                  className='chat-me'
                  extra={'avatar'}
                >{v.content}</Item>
              </List>
            )
        })}
        <div className="stick-footer">
          <List>
            <InputItem
              placeholder="请输入"
              value={this.state.text}
              onChange={v => { this.setState({ text: v }) }}
              extra={<span onClick={() => this.handleSubmit()}>发送</span>}
            >
              信息
          </InputItem>
          </List>
        </div>
      </div>
    )
  }
}

export default Chat