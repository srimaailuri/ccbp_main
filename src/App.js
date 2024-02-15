import './App.css'

import {Switch, Route, Redirect} from 'react-router-dom'

import {Component} from 'react'

import ModeContext from './components/Context'

import NotFound from './components/NotFound'

import Home from './components/Home'

import Login from './components/Login'

import Trending from './components/Trending'

import Gaming from './components/Gaming'

import ProtectedRoute from './components/ProtectedRoute'

import SavedVideos from './components/savedVideos'

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
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/Gaming" component={Gaming} />
          <ProtectedRoute exact path="/savedVideos" component={SavedVideos} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </ModeContext.Provider>
    )
  }
}

export default App
