import './App.css'

import {Switch, Route, Redirect} from 'react-router-dom'

import {Component} from 'react'

import ModeContext from './components/Context'

import NotFound from './components/NotFound'

import Home from './components/Home'

import Login from './components/Login'

import ProtectedRoute from './components/ProtectedRoute'

class App extends Component {
  state = {
    darkMode: false,
  }

  changeMode = () => {
    this.setState(prevstate => ({darkMode: !prevstate.darkMode}))
  }

  render() {
    const {darkMode} = this.state
    return (
      <ModeContext.Provider
        value={{
          darkMode,
          changeMode: this.changeMode,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </ModeContext.Provider>
    )
  }
}

export default App
