import styled from 'styled-components'

export const TrendingMainContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${props => (props.darkMode ? '#212121' : '#f4f4f4')};
`
export const TrendingContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin: 0px;
  padding: 0px;
`

export const TrendingHeaderContainer = styled.div`
  background-color: ${props => (props.darkMode ? '#212121' : '#ebebeb')};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-left: 25px;
`

export const LogoCont = styled.p`
  border-radius: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.darkMode ? '#212121' : '#d7dfe9')};
  color: #ff0b37;
  width: 60px;
  height: 60px;
`
export const TrendingLogo = styled.img`
  width: 120px;
  height: 120px;
`
export const TrendingHeader = styled.h1`
  color: black;
  margin-left: 10px;
  color: ${props => (props.darkMode ? 'white' : '#212121')};
`
export const TrendingListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const FailureView = styled.img`
  width: 200px;
  height: 200px;
`
export const FailureHead = styled.h1`
  font-size: 20px;
`
export const FailurePara = styled.p`
  color: #909090;
`
export const Retry = styled.button`
  background-color: #4f46e5;
  color: #ebebeb;
  width: 100px;
  height: 35px;
  outline: none;
  border-radius: 5px;
  border: none;
`
export const VideoListItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  color: ${props => (props.darkMode ? 'white' : '#212121')};
  margin: 20px;
  width: 90%;
`
export const ChannelImg = styled.img`
  width: 350px;
  height: 200px;
  color: #ff0b37;
`
export const VideoListDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
  color: ${props => (props.darkMode ? 'white' : '#212121')};
`
export const Videotext = styled.p`
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
`
export const VideoCountDetails = styled.div`
  display: flex;
  flex-direction: row;
`
export const ChannelPara = styled.p`
  padding: none;
  margin-top: 1px;
  margin-bottom: 1px;
  margin-left: 2px;
`
export const Dot = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  padding-left: 5px;
  padding-right: 5px;
`
