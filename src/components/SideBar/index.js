import {AiFillHome} from 'react-icons/ai'
import {FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import {
  SideBarListItem,
  MenuSideBar,
  SideBarItemsContainer,
  ContactSection,
  ContactSectionHead,
  IconsImage,
  ContactSectionPara,
  ContactIconSection,
} from './styledComponents'
import ModeContext from '../Context'

const SideBarMenu = [
  {
    id: 'HOME',
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
  const {Details} = props
  const {Icon, displaytext} = Details
  return (
    <SideBarListItem>
      {Icon}
      <p className="sideBarText">{displaytext}</p>
    </SideBarListItem>
  )
}

const SideBarContainerView = () => (
  <ModeContext.Consumer>
    {value => {
      const {darkMode} = value
      return (
        <MenuSideBar darkMode={darkMode}>
          <SideBarItemsContainer>
            {SideBarMenu.map(eachItem => (
              <SideBarItem key={eachItem.id} Details={eachItem} />
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

export default SideBarContainerView
