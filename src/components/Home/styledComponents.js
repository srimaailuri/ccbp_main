import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  min-width: 95%;
`
export const MenuSideBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 20%;
`

export const SideBarItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const SideBarListItem = styled.li`
  display: flex;
  flex-direction: row;
`

export const HomeContainerItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`
export const BannerItem = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
  min-height: 200px;
`

export const BannerDetails = styled.div`
  width: 50%;
`
export const CloseBtn = styled.button`
  width: 30px;
  height: 30px;
  background-color: transparent;
  border: none;
  outline: none;
  margin-right: 5px;
`

export const NxtWatchLogo = styled.img`
  width: 130px;
  height: 30px;
`
export const NxtWatchPara = styled.p`
  color: black;
  font-weight: bold;
`
export const GetItNow = styled.button`
  color: black;
  border-color: black;
  background-color: transparent;
  width: 100px;
  height: 30px;
  font-weight: bold;
`
export const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-left: 10px;
`
export const SearchBar = styled.input`
  width: 320px;
  height: 28px;
`
export const SearchButton = styled.button`
  width: 50px;
  height: 25px;
`
export const HomeMainContainer = styled.div`
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
  padding: 10px;
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
  background-color: #00306e;
  color: #ebebeb;
`
export const VideosUnorderedList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: none;
`
export const VideoItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 300px;
  margin-right: auto;
  margin-bottom: 20px;
`
export const VideoImage = styled.img`
  width: 300px;
  height: 300px;
`
export const VideoTextDetails = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5px;
`
export const ChannelLogo = styled.img`
  width: 40px;
  height: 40px;
`
export const ChannelDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
  font-weight: 500;
`
export const ChannelPara = styled.p`
  padding: none;
  margin-top: 1px;
  margin-bottom: 1px;
  margin-left: 2px;
  color: ${props => props.color};
`
export const ChannelCount = styled.div`
  display: flex;
  flex-direction: row;
`
export const Dot = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  padding-left: 5px;
  padding-right: 5px;
`
