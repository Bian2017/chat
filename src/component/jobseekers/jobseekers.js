import React from 'react'
import { getUserList } from '../../redux/chatuser.redux'
import { connect } from 'react-redux'
import UserCard from '../usercard/usercard'

@connect(
  state => state.chatUser,
  { getUserList }
)
class JobSeekers extends React.Component {
  componentDidMount() {
    this.props.getUserList('boss')
  }

  render() {
   return  <UserCard userList={this.props.userList}></UserCard>
  }
}

export default JobSeekers 