import styled from 'styled-components'

export const TrendingMainContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${props => (props.darkMode ? '#0f0f0f' : '#f4f4f4')};
`
export const TrendingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin: 0px;
  padding: 10px;
`
export const YoutubeVideo = styled.img`
  width: 90%;
`
export const CountBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
  justify-content: flex-start;
  align-items: flex-start;
  color: ${props => (props.darkMode ? 'white' : '#212121')};
  margin: 20px;
  width: 90%;
`

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const HorizontalLine = styled.hr`
  margin: 25px 0;
  border: 1px solid #cccccc;
`
export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const Logo = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 10px;
`
export const DescriptionTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 8px;
`

export const Subscribers = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`
export const DescriptionText = styled.p`
  font-size: ${props => props.fontSize};
  padding: 0px;
  margin: 0px;
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
export const CountLikesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const LikesDisLikeSaveContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const LikeTitle = styled.p`
  margin-left: 3px;
`
export const LikeBox = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 6px;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: ${props => (props.value === true ? '#2563eb' : '#64748b')};
`
export const Shortdescription = styled.p`
  font-size: 20px;
`
