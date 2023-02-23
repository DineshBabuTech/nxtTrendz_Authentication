// Write your JS code here
import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', error: ''}

  onSubmitSuccessful = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = msg => {
    this.setState({error: `*${msg}`})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccessful()
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  getUsernameInput = event => {
    this.setState({username: event.target.value})
  }

  getPasswordInput = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {username, password, error} = this.state
    return (
      <div className="login-container">
        <img
          className="lg-website-login"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
        />
        <form className="form-cont" onSubmit={this.onSubmitForm}>
          <img
            className="website-logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
          />
          <img
            className="sm-website-login"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
          />
          <label className="label-text" htmlFor="username">
            USERNAME
          </label>
          <input
            value={username}
            onChange={this.getUsernameInput}
            className="input"
            type="text"
            id="username"
            placeholder="Username"
          />
          <label className="label-text" htmlFor="password">
            PASSWORD
          </label>
          <input
            value={password}
            onChange={this.getPasswordInput}
            className="input"
            type="password"
            id="password"
            placeholder="Password"
          />
          <button className="login-btn" type="submit">
            Login
          </button>
          <p className="error">{error}</p>
        </form>
      </div>
    )
  }
}

export default LoginForm
