import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'
import {FaMoon} from 'react-icons/fa'
import {FiSun} from 'react-icons/fi'
import {IoMenu} from 'react-icons/io5'
import {FcMenu} from 'react-icons/fc'
import {IoIosLogOut} from 'react-icons/io'

import ModeContext from '../Context'

import {
  Navbar,
  HeaderCont,
  WebsiteLogo,
  NavbarItems,
  ListStyleButton,
  listStyleItem,
} from './styledComponents'

const Header = props => (
  <ModeContext.Consumer>
    {value => {
      const {darkMode, changeMode} = value

      const onLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      const onChangeMode = () => {
        changeMode()
      }

      return (
        <Navbar darkMode={darkMode}>
          <HeaderCont>
            <WebsiteLogo
              src={
                darkMode
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
              }
            />
            <NavbarItems>
              <ListStyleButton onClick={onChangeMode}>
                <listStyleItem>
                  {darkMode ? <FiSun /> : <FaMoon />}
                </listStyleItem>
              </ListStyleButton>
              <ListStyleButton>
                <listStyleItem>
                  {darkMode ? <FcMenu /> : <IoMenu />}
                </listStyleItem>
              </ListStyleButton>
              <ListStyleButton onClick={onLogout}>
                <listStyleItem>
                  <IoIosLogOut />
                </listStyleItem>
              </ListStyleButton>
            </NavbarItems>
          </HeaderCont>
        </Navbar>
      )
    }}
  </ModeContext.Consumer>
)

export default withRouter(Header)
