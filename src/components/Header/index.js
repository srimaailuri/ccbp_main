import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'
import {FaMoon} from 'react-icons/fa'
import {BsBrightnessHigh} from 'react-icons/bs'
import {IoMenu} from 'react-icons/io5'
import {FcMenu} from 'react-icons/fc'
import {IoIosLogOut} from 'react-icons/io'

import ModeContext from '../Context'

import './index.css'

import {
  Navbar,
  HeaderCont,
  WebsiteLogo,
  NavbarItems,
  ListStyleButton,
  listStyleItem,
  ProfileImg,
  LogOutButton,
  listStyleMobileItem,
  listStyleLaptopItem,
} from './styledComponents'

const Header = props => (
  <ModeContext.Consumer>
    {value => {
      const {darkMode, changeMode} = value
      const logoUrl = darkMode
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
      const color = darkMode ? 'lightColor' : ''

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
            <WebsiteLogo src={logoUrl} />

            <NavbarItems>
              <ListStyleButton>
                <listStyleItem onClick={onChangeMode}>
                  {darkMode ? (
                    <BsBrightnessHigh className={`ChangeModeIcon ${color}`} />
                  ) : (
                    <FaMoon className={`ChangeModeIcon ${color}`} />
                  )}
                </listStyleItem>
              </ListStyleButton>

              <ListStyleButton>
                <listStyleMobileItem>
                  {darkMode ? <FcMenu /> : <IoMenu />}
                </listStyleMobileItem>
              </ListStyleButton>

              <ListStyleButton>
                <listStyleLaptopItem>
                  <ProfileImg src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png" />
                </listStyleLaptopItem>
              </ListStyleButton>

              <ListStyleButton>
                <listStyleMobileItem onClick={onLogout}>
                  <IoIosLogOut />
                </listStyleMobileItem>
              </ListStyleButton>

              <ListStyleButton>
                <listStyleLaptopItem>
                  <LogOutButton>LogOut</LogOutButton>
                </listStyleLaptopItem>
              </ListStyleButton>
            </NavbarItems>
          </HeaderCont>
        </Navbar>
      )
    }}
  </ModeContext.Consumer>
)

export default withRouter(Header)
