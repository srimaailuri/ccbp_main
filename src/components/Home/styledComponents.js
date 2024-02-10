import styled from 'styled-components'

export const HomeContainer = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
`
export const MenuSideBar = styled.div`
  display: flex;
  flex-direction: row;
  width: 20%;
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
  padding: 15px;
  min-height: 200px;
`

export const BannerDetails = styled.div`
  width: 50%;
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
  margin: 3px;
  justify-content: flex-start;
  align-items: center;
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
  padding: 15px;
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
