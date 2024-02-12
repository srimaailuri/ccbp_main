import styled from 'styled-components'

export const PageNotFoundViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100vw;
  min-height: 100vh;
`

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 100vw;
`

export const PageNotFound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: ${props => (props.darkMode ? '#000000' : 'white')};
  color: ${props => (props.darkMode ? 'white' : '000000')};
`
export const PageNotFoundImage = styled.img`
  width: 350px;
  height: 350px;
`
export const PageText = styled.p`
  font-size: props.fontsize;
  font-weight: props.fontWeight;
`
