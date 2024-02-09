import styled from 'styled-components'

export const Navbar = styled.nav`
  padding: 25px;
  min-width: 100vh;
  height: 50px;
  background-color: ${props => (props.darkMode ? '#212121' : 'white')};
`

export const HeaderCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const WebsiteLogo = styled.img`
  width: 130px;
  height: 30px;
`

export const NavbarItems = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
`

export const ListStyleButton = styled.button`
  width: 35px;
  height: 35px;
  outline: none;
  border: none;
  background-color: transparent;
`
export const listStyleItem = styled.li`
  width: 40px;
  height: 40px;
`
export const listStyleMobileItem = styled.li`
  width: 40px;
  height: 40px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const listStyleLaptopItem = styled.li`
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
export const LogOutButton = styled.btn`
  color: #ffffff;
  background-color: transparent;
  border-radius: 3px;
  border-color: #ffffff;
`
