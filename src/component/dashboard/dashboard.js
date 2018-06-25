import React from 'react'
import { connect } from 'react-redux'
import { NavBar } from 'antd-mobile'
import {Switch, Route} from 'react-router-dom'
import NavLinkBar from '../navlink/navlink'
import Boss from '../../component/boss/boss'
import JobSeekers from '../../component/jobseekers/jobseekers'
import User from '../../component/user/user'

function Msg() {
  return <h2>消息列表</h2>
}

@connect(
  state => state
)
class Dashboard extends React.Component {
  render() {
    const user = this.props.user
    const { pathname } = this.props.location

    const navList = [{
      path: '/boss',
      text: '求职者',
      icon: 'boss',
      title: '求职者列表',
      component: Boss,
      hide: user.type === 'jobSeekers'
    }, {
      path: '/jobSeekers',
      text: '老板',
      icon: 'job',
      title: 'BOSS列表',
      component: JobSeekers,
      hide: user.type === 'boss'
    }, {
      path: '/msg',
      text: '消息',
      icon: 'msg',
      title: '消息列表',
      component: Msg,
    }, {
      path: '/me',
      text: '我',
      icon: 'user',
      title: '个人中心',
      component: User
    }]

    return (
      <div>
        <NavBar className='fixed-header' mode="dard">
          {navList.find(v => v.path === pathname).title}
        </NavBar>
        <div style={{marginTop:45}}>
          <Switch>
            {navList.map(v=>(
              <Route key={v.path} path={v.path}
                component={v.component}></Route>
            ))}
          </Switch>
        </div>
    
        <NavLinkBar data={navList}></NavLinkBar>
      </div>
    )
  }
}

export default Dashboard