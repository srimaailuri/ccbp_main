import styled from 'styled-components'

export const Navbar = styled.nav`
  min-width: 100vw;
  min-height: 45px;
  background-color: ${props => (props.darkMode ? '#383838' : 'white')};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const HeaderCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;
`

export const WebsiteLogo = styled.img`
  width: 120px;
  height: 30px;
`

export const NavbarItems = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  min-width: 15%;
`

export const ListStyleButton = styled.button`
  width: 45px;
  height: 45px;
  outline: none;
  border: none;
  background-color: transparent;
`
export const ListStyleItem = styled.li`
  width: 40px;
  height: 40px;
`

export const ListStyleMobileItem = styled.li`
  width: 40px;
  height: 40px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const ListStyleLaptopItem = styled.li`
  width: 40px;
  height: 40px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const ProfileImg = styled.img`
  width: 30px;
  height: 30px;
`
export const LogoutButton = styled.button`
  background-color: transparent;
  border-radius: 3px;
  border-color: ${props => (props.darkMode ? 'white' : '#212121')};
  color: ${props => (props.darkMode ? 'white' : '#212121')};
  outline: none;
  margin: 10px;
`
