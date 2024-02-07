import {Component} from 'react'

import Header from '../Header'

class Home extends Component {
  state = {name: 'srima'}

  render() {
    const {name} = this.state
    return <Header />
  }
}

export default Home
