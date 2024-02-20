import {AiFillHome} from 'react-icons/ai'
import {FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import {Link, withRouter} from 'react-router-dom'

import {
  SideBarListItem,
  MenuSideBar,
  SideBarItemsContainer,
  ContactSection,
  ContactSectionHead,
  IconsImage,
  ContactSectionPara,
  ContactIconSection,
  SideText,
} from './styledComponents'
import ModeContext from '../Context'
import './index.css'

const SideBarMenu = [
  {
    id: '',
    Icon: <AiFillHome className="SideItemStyle" />,
    displaytext: 'Home',
  },
  {
    id: 'TRENDING',
    Icon: <FaFire className="SideItemStyle" />,
    displaytext: 'Trending',
  },
  {
    id: 'GAMING',
    Icon: <SiYoutubegaming className="SideItemStyle" />,
    displaytext: 'Gaming',
  },
  {
    id: 'SAVEDVIDEOS',
    Icon: <MdPlaylistAdd className="SideItemStyle" />,
    displaytext: 'Saved Videos',
  },
]

const SideBarItem = props => {
  const {Details, match, darkMode} = props
  const {id, Icon, displaytext} = Details
  const active = true
  console.log(match)

  return (
    <Link to={`/${id}`} className={`SideBarLink ${active}`}>
      <SideBarListItem darkMode={darkMode}>
        {Icon}
        <SideText>{displaytext}</SideText>
      </SideBarListItem>
    </Link>
  )
}

const SideBarContainerView = props => {
  const {match} = props
  return (
    <ModeContext.Consumer>
      {value => {
        const {darkMode} = value
        return (
          <MenuSideBar darkMode={darkMode}>
            <SideBarItemsContainer>
              {SideBarMenu.map(eachItem => (
                <SideBarItem
                  key={eachItem.id}
                  Details={eachItem}
                  match={match}
                  darkMode={darkMode}
                />
              ))}
            </SideBarItemsContainer>
            <ContactSection>
              <ContactSectionHead>CONTACT US</ContactSectionHead>
              <ContactIconSection>
                <IconsImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <IconsImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <IconsImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </ContactIconSection>
              <ContactSectionPara>
                Enjoy! Now to See your channels and recommendations!
              </ContactSectionPara>
            </ContactSection>
          </MenuSideBar>
        )
      }}
    </ModeContext.Consumer>
  )
}

export default withRouter(SideBarContainerView)
