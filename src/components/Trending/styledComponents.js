import styled from 'styled-components'

export const TrendingMainContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${props => (props.darkMode ? '#212121' : 'white')};
`
export const TrendingContainer = styled.ul`
  display: flex;
  flex-direction: column;
`
export const TrendingHeaderContainer = styled.div`
  background-color: #cccccc;
  display: flex;
  flex-direction: row;
`
export const TrendingLogo = styled.img`
  width: 100px;
  height: 100px;
`
export const TrendingHeader = styled.h1`
  color: black;
`
export const TrendingListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
`
export const ChannelImg = styled.img`
  width: 250px;
  height: 250px;
`
export const VideoListDetails = styled.div`
  display: flex;
  flex-direction: column;
`
export const Videotext = styled.p`
  font-size: ${props => props.fontSize};
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
  color: ${props => props.color};
`
export const Dot = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  padding-left: 5px;
  padding-right: 5px;
`
