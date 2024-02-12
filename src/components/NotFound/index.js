import Header from '../Header'

import {
  PageNotFoundViewContainer,
  PageNotFound,
  PageNotFoundImage,
  PageText,
} from './styledComponents'

import SideBarContainerView from '../SideBar'
import ModeContext from '../Context'

const NotFound = () => (
  <ModeContext.Consumer>
    {value => {
      const {darkMode} = value
      return (
        <PageNotFoundViewContainer>
          <Header />
          <div className="NotFoundContainer">
            <SideBarContainerView />
            <PageNotFound>
              <PageNotFoundImage />
              <PageText fontsize="20px" fontWeight="bold">
                Page Not Found
              </PageText>
              <PageText fontsize="10px">
                We are sorry,the page you requested could not be found
              </PageText>
            </PageNotFound>
          </div>
        </PageNotFoundViewContainer>
      )
    }}
  </ModeContext.Consumer>
)

export default NotFound
