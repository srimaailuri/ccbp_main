import styled from 'styled-components'

export const Navbar = styled.nav`
  width: 100vh;
  height: 50px;
  background-color: ${props => (props.darkMode ? '#212121' : 'white')};
  display: flex;
  justify-content: center;
`
export const HeaderCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const WebsiteLogo = styled.img`
  width: 150px;
  height: 40px;
`

export const NavbarItems = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
`

export const ListStyleButton = styled.button`
  width: 45px;
  height: 45px;
  outline: none;
  border: none;
  background-color: transparent;
`
export const listStyleItem = styled.li`
  width: 40px;
  width: 40px;
`
