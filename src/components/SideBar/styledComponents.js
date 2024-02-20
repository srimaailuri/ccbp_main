import styled from 'styled-components'

export const MenuSideBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 20%;
  height: 100vh;
  background-color: ${props => (props.darkMode ? '#383838' : 'white')};
  color: ${props => (props.darkMode ? 'white' : '#212121')};
  position: fixed;

  @media screen and (max-width: 768px) {
    display: none;
    width: 0%;
  }
`

export const SideBarItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`
export const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px;
`

export const ContactSectionHead = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
`
export const ContactIconSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`
export const ContactSectionPara = styled.p`
  font-size: 18px;
  font-weight: 500;
`
export const IconsImage = styled.img`
  width: 35px;
  height: 35px;
  margin: 5px;
`

export const SideBarListItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  color: ${props => (props.darkMode ? 'white' : '#212121')};
  padding-left: 20px;
  width: 100%;
`

export const SideText = styled.p`
  margin-left: 5px;
`
