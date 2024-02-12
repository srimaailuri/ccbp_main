import {Component} from 'react'

import Header from '../Header'

import {
  PageNotFoundViewContainer,
  NotFoundContainer,
  PageNotFound,
  PageNotFoundImage,
  PageText,
} from './styledComponents'

import SideBarContainerView from '../SideBar'
import ModeContext from '../Context'

class NotFound extends Component {
  render() {
    return (
      <ModeContext.Consumer>
        {value => {
          const {darkMode} = value
          const NotFoundImgUrl = darkMode
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
          return (
            <PageNotFoundViewContainer>
              <Header />
              <NotFoundContainer>
                <SideBarContainerView />
                <PageNotFound darkMode={darkMode}>
                  <PageNotFoundImage src={NotFoundImgUrl} alt="NotFoundImage" />
                  <PageText fontsize="20px" fontWeight="bold">
                    Page Not Found
                  </PageText>
                  <PageText fontsize="10px">
                    We are sorry,the page you requested could not be found
                  </PageText>
                </PageNotFound>
              </NotFoundContainer>
            </PageNotFoundViewContainer>
          )
        }}
      </ModeContext.Consumer>
    )
  }
}

export default NotFound
