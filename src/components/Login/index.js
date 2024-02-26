import {Component} from 'react'

import Cookies from 'js-cookie'

import {Redirect} from 'react-router-dom'

import {
  LoginContainer,
  LoginForm,
  Logo,
  InputContainer,
  Label,
  Input,
  CheckBoxContainer,
  CheckBoxInput,
  LoginBtn,
} from './styledComponents'

class Login extends Component {
  state = {
    Username: '',
    Password: '',
    showPassword: false,
    showErrorMsg: false,
    errMsg: '',
  }

  onSuccessFullLogin = JwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', JwtToken, {
      expires: 2,
    })
    history.replace('/')
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {Username, Password} = this.state
    const userDetails = {username: Username, password: Password}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok) {
      this.onSuccessFullLogin(data.jwt_token)
    } else {
      this.onFailureLogin(data.error_msg)
    }
  }

  onFailureLogin = errorMsg => {
    this.setState({showErrorMsg: true, errMsg: errorMsg})
  }

  onChangeUsername = event => {
    this.setState({Username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({Password: event.target.value})
  }

  updateCheckBox = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  render() {
    const {errMsg, showErrorMsg, Username, Password, showPassword} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <LoginContainer>
        <LoginForm onSubmit={this.onSubmitForm}>
          <Logo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <InputContainer>
            <Label htmlFor="username" color="#94a3b8">
              USERNAME
            </Label>
            <Input
              id="username"
              placeholder="Username"
              type="text"
              onChange={this.onChangeUsername}
              value={Username}
            />
          </InputContainer>

          <InputContainer>
            <Label htmlFor="password" color="#94a3b8">
              PASSWORD
            </Label>
            <Input
              id="password"
              placeholder="Password"
              type={showPassword ? 'text' : 'password'}
              onChange={this.onChangePassword}
              value={Password}
            />
          </InputContainer>

          <CheckBoxContainer>
            <CheckBoxInput
              id="checkbox"
              type="checkbox"
              onChange={this.updateCheckBox}
            />
            <Label color="#1e293b" htmlFor="checkbox">
              Show Password
            </Label>
          </CheckBoxContainer>

          <LoginBtn type="submit">Login</LoginBtn>
          {showErrorMsg && <p>*{errMsg}</p>}
        </LoginForm>
      </LoginContainer>
    )
  }
}

export default Login
