import React from 'react'
import './logo.css'

class Login extends React.Component {

  render() {
    return (
      <div className="logoWrapper">
        <img src={require('./jobChat.png')} alt="" />
      </div>
    ) 
  }
}

export default Login