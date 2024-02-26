import Cookies from 'js-cookie'
import {Link, withRouter} from 'react-router-dom'
import {FaMoon} from 'react-icons/fa'
import {BsBrightnessHigh} from 'react-icons/bs'
import {IoMenu} from 'react-icons/io5'
import {FcMenu} from 'react-icons/fc'
import {IoIosLogOut} from 'react-icons/io'
import Popup from 'reactjs-popup'

import './index.css'
import ModeContext from '../Context'

import {
  Navbar,
  HeaderCont,
  WebsiteLogo,
  NavbarItems,
  ListStyleButton,
  ListStyleItem,
  ListStyleMobileItem,
  ListStyleLaptopItem,
  ProfileImg,
  LogoutButton,
} from './styledComponents'

const Header = props => {
  const LogOutBtn = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  const {match} = props
  return (
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
              <Link to="/">
                <WebsiteLogo src={logoUrl} alt="website logo" />
              </Link>
              <NavbarItems>
                <ListStyleItem>
                  <ListStyleButton onClick={onChangeMode} data-testid="theme">
                    {darkMode ? (
                      <BsBrightnessHigh className={`NavbarIcon ${color}`} />
                    ) : (
                      <FaMoon className={`NavbarIcon ${color}`} />
                    )}
                  </ListStyleButton>
                </ListStyleItem>

                <ListStyleMobileItem>
                  <ListStyleButton>
                    {darkMode ? (
                      <FcMenu className={`NavbarIcon ${color}`} />
                    ) : (
                      <IoMenu className={`NavbarIcon ${color}`} />
                    )}
                  </ListStyleButton>
                </ListStyleMobileItem>

                <ListStyleLaptopItem>
                  <ListStyleButton>
                    <ProfileImg
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                      alt="profile"
                    />
                  </ListStyleButton>
                </ListStyleLaptopItem>

                <ListStyleLaptopItem>
                  <LogoutButton darkMode={darkMode}>
                    <Popup
                      modal
                      trigger={
                        <button type="button" className="trigger-button">
                          Logout
                        </button>
                      }
                    >
                      {close => (
                        <>
                          <div>
                            <p>Are you sure, you want to logout</p>
                          </div>
                          <button
                            type="button"
                            className="trigger-button"
                            onClick={() => close()}
                          >
                            cancel
                          </button>
                          <button
                            type="button"
                            className="trigger-button"
                            onClick={LogOutBtn}
                          >
                            confirm
                          </button>
                        </>
                      )}
                    </Popup>
                  </LogoutButton>
                </ListStyleLaptopItem>

                <ListStyleMobileItem>
                  <ListStyleButton onClick={onLogout}>
                    <IoIosLogOut className={`NavbarIcon ${color}`} />
                  </ListStyleButton>
                </ListStyleMobileItem>
              </NavbarItems>
            </HeaderCont>
          </Navbar>
        )
      }}
    </ModeContext.Consumer>
  )
}

export default withRouter(Header)
