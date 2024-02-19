import React from 'react'

const ModeContext = React.createContext({
  darkMode: false,
  changeMode: () => {},
  savedVideosList: [],
  likedVideosList: [],
  dislikedVideosList: [],
  savetoVideos: () => {},
  AddLikedVideos: () => {},
  AddDislikedVideos: () => {},
})

export default ModeContext
