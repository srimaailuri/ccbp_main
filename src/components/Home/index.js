import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {IoIosSearch} from 'react-icons/io'
import Cookies from 'js-cookie'

import Header from '../Header'

import ModeContext from '../Context'

import './index.css'

import {
  HomeContainer,
  MenuSideBar,
  HomeContainerItem,
  BannerItem,
  SearchBarContainer,
  SearchBar,
  BannerDetails,
  NxtWatchLogo,
  NxtWatchPara,
  GetItNow,
  SearchButton,
  HomeMainContainer,
  FailureView,
  FailureHead,
  FailurePara,
  Retry,
} from './styledComponents'

const ApiStatusConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    searchInput: '',
    ApiStatus: ApiStatusConstants.initial,
    VideosList: [],
  }

  componentDidMount = () => {
    this.getListOfVideosData()
  }

  getListOfVideosData = async () => {
    this.setState({ApiStatus: ApiStatusConstants.loading})
    const {searchInput} = this.state
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      this.setState({
        ApiStatus: ApiStatusConstants.SUCCESS,
        VideosList: data.videos,
      })
    } else {
      this.setState({ApiStatus: ApiStatusConstants.failure})
    }
  }

  renderBanner = () => (
    <BannerDetails>
      <NxtWatchLogo src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" />
      <NxtWatchPara> Buy NXT Watch prepaid plans with UPI</NxtWatchPara>
      <GetItNow>GET IT NOW</GetItNow>
    </BannerDetails>
  )

  renderLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderFailureView = () => (
    <div className="FailureContainer">
      <FailureView src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png" />
      <FailureHead>Oops! Something Went Wrong</FailureHead>
      <FailurePara>
        We are having some trouble to complete your request.Please try again.
      </FailurePara>
      <Retry>Retry</Retry>
    </div>
  )

  renderVideosList = () => {
    const {VideosList} = this.state
    const videosListInCamelCase = VideosList.map(eachItem =>
      toCamelCase(eachItem),
    )
  }

  renderMainContainer = () => {
    const {ApiStatus} = this.state
    switch (ApiStatus) {
      case ApiStatusConstants.loading:
        return this.renderLoader()
      case ApiStatusConstants.success:
        return this.renderVideosList()
      case ApiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <div>
        <Header />
        <HomeContainer>
          <MenuSideBar>
            <p>Home container elements</p>
          </MenuSideBar>
          <HomeContainerItem>
            <BannerItem>{this.renderBanner()}</BannerItem>
            <HomeMainContainer>
              <SearchBarContainer>
                <SearchBar
                  placeholder="Search"
                  type="Search"
                  onChange={this.onChangeSearchInput}
                />
                <SearchButton>
                  <IoIosSearch className="SearchIcon" />
                </SearchButton>
              </SearchBarContainer>
              {this.renderMainContainer()}
            </HomeMainContainer>
          </HomeContainerItem>
        </HomeContainer>
      </div>
    )
  }
}

export default Home
