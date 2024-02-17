import React from 'react'

const ModeContext = React.createContext({
  darkMode: false,
  changeMode: () => {},
  savedVideos: [],
  savetoVideos: () => {},
})

export default ModeContext
