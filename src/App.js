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

import VideoItemDetailsRoute from './components/VideoItemDetailsRoute'

class App extends Component {
  state = {
    darkMode: false,
    savedVideosList: [],
    likedVideosList: [],
    dislikedVideosList: [],
  }

  changeMode = () => {
    this.setState(prevstate => ({darkMode: !prevstate.darkMode}))
  }

  saveToVideos = videoDetails => {
    const {id} = videoDetails
    const {savedVideosList} = this.state
    let savedListIds = []
    if (savedVideosList.length !== 0) {
      savedListIds = savedVideosList.map(each => each.id)
    }

    if (savedListIds.includes(id)) {
      this.setState({
        savedVideosList: savedVideosList.filter(each => each.id !== id),
      })
    } else {
      this.setState({savedVideosList: [...savedVideosList, videoDetails]})
    }
  }

  AddLikedVideos = id => {
    const {likedVideosList, dislikedVideosList} = this.state
    if (dislikedVideosList.includes(id)) {
      this.setState({
        dislikedVideosList: dislikedVideosList.filter(eachId => eachId !== id),
      })
    }
    if (likedVideosList.includes(id)) {
      this.setState({
        likedVideosList: likedVideosList.filter(eachId => eachId !== id),
      })
    } else {
      this.setState({likedVideosList: [...likedVideosList, id]})
    }
  }

  AddDislikedVideos = id => {
    const {likedVideosList, dislikedVideosList} = this.state
    if (likedVideosList.includes(id)) {
      this.setState({
        likedVideosList: likedVideosList.filter(eachId => eachId !== id),
      })
    }
    if (dislikedVideosList.includes(id)) {
      this.setState({
        dislikedVideosList: dislikedVideosList.filter(eachId => eachId !== id),
      })
    } else {
      this.setState({dislikedVideosList: [...dislikedVideosList, id]})
    }
  }

  render() {
    const {
      darkMode,
      savedVideosList,
      likedVideosList,
      dislikedVideosList,
    } = this.state
    return (
      <ModeContext.Provider
        value={{
          darkMode,
          changeMode: this.changeMode,
          savedVideosList,
          likedVideosList,
          dislikedVideosList,
          savetoVideos: this.saveToVideos,
          AddLikedVideos: this.AddLikedVideos,
          AddDislikedVideos: this.AddDislikedVideos,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/Gaming" component={Gaming} />
          <ProtectedRoute exact path="/savedVideos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetailsRoute}
          />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </ModeContext.Provider>
    )
  }
}

export default App
