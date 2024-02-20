import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {IoIosSearch, IoIosClose} from 'react-icons/io'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'
import Header from '../Header'

import ModeContext from '../Context'

import './index.css'

import SideBarContainerView from '../SideBar'

import {
  HomeContainer,
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
  VideoItemContainer,
  VideoImage,
  VideoTextDetails,
  ChannelLogo,
  ChannelDetails,
  ChannelPara,
  ChannelCount,
  VideosUnorderedList,
  Dot,
  CloseBtn,
  NoResultsSearchView,
  SearchImage,
  SearchHead,
  Searchpara,
} from './styledComponents'

const ApiStatusConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

const VideoItem = props => {
  const {videoItemDetails, darkMode} = props
  const {
    id,
    title,
    thumbnailUrl,
    channel,
    viewCount,
    publishedAt,
  } = videoItemDetails

  const time = formatDistanceToNow(new Date(publishedAt))
  return (
    <Link to={`/videos/${id}`} className="LinkContainer">
      <VideoItemContainer>
        <VideoImage src={thumbnailUrl} />
        <VideoTextDetails darkMode={darkMode}>
          <ChannelLogo src={channel.profile_image_url} />
          <ChannelDetails>
            <ChannelPara>{title}</ChannelPara>
            <ChannelPara color=" #606060">{channel.name}</ChannelPara>
            <ChannelCount>
              <ChannelPara color="  #606060">{viewCount} views</ChannelPara>
              <ChannelPara color="  #606060">
                <Dot> &#8226; </Dot>
                {time} ago
              </ChannelPara>
            </ChannelCount>
          </ChannelDetails>
        </VideoTextDetails>
      </VideoItemContainer>
    </Link>
  )
}

class Home extends Component {
  state = {
    searchInput: '',
    ApiStatus: ApiStatusConstants.initial,
    VideosList: [],
    showBanner: true,
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
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = data.videos.map(eachVideo => ({
        channel: eachVideo.channel,
        id: eachVideo.id,
        publishedAt: eachVideo.published_at,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
        title: eachVideo.title,
      }))
      this.setState({
        ApiStatus: ApiStatusConstants.success,
        VideosList: updatedData,
      })
    } else {
      this.setState({ApiStatus: ApiStatusConstants.failure})
    }
  }

  onSearchBtn = () => {
    this.getListOfVideosData()
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

  onRetry = () => {
    this.setState({searchInput: ''}, this.getListOfVideosData)
  }

  renderFailureView = darkMode => (
    <div className="FailureContainer">
      <FailureView src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png" />
      <FailureHead>Oops! Something Went Wrong</FailureHead>
      <FailurePara>
        We are having some trouble to complete your request.Please try again.
      </FailurePara>
      <Retry onClick={this.onRetry}>Retry</Retry>
    </div>
  )

  renderVideosList = darkMode => {
    const {VideosList} = this.state
    const VideosListLength = VideosList.length > 0
    console.log(VideosListLength)
    return VideosListLength ? (
      <VideosUnorderedList>
        {VideosList.map(eachItem => (
          <VideoItem
            key={eachItem.id}
            videoItemDetails={eachItem}
            darkMode={darkMode}
          />
        ))}
      </VideosUnorderedList>
    ) : (
      <NoResultsSearchView>
        <SearchImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
          alt="no videos"
        />
        <SearchHead>No Search results found</SearchHead>
        <Searchpara>
          Try different key words or remove search filter.
        </Searchpara>
        <Retry onClick={this.onRetry}>Retry</Retry>
      </NoResultsSearchView>
    )
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  renderMainContainer = darkMode => {
    const {ApiStatus} = this.state
    switch (ApiStatus) {
      case ApiStatusConstants.loading:
        return this.renderLoader()
      case ApiStatusConstants.success:
        return this.renderVideosList(darkMode)
      case ApiStatusConstants.failure:
        return this.renderFailureView(darkMode)
      default:
        return null
    }
  }

  onClickCloseBtn = () => {
    this.setState({showBanner: false})
  }

  render() {
    const {showBanner} = this.state
    return (
      <ModeContext.Consumer>
        {value => {
          const {darkMode} = value
          return (
            <div className="Home">
              <Header />
              <HomeContainer darkMode={darkMode}>
                <SideBarContainerView />
                <HomeContainerItem>
                  {showBanner && (
                    <BannerItem>
                      {this.renderBanner()}
                      <div data-testid="close">
                        <CloseBtn onClick={this.onClickCloseBtn}>
                          <IoIosClose className="closeBtn" />
                        </CloseBtn>
                      </div>
                    </BannerItem>
                  )}
                  <HomeMainContainer darkMode={darkMode}>
                    <SearchBarContainer>
                      <SearchBar
                        placeholder="Search"
                        type="Search"
                        onChange={this.onChangeSearchInput}
                        darkMode={darkMode}
                      />
                      <SearchButton
                        onClick={this.onSearchBtn}
                        darkMode={darkMode}
                      >
                        <IoIosSearch className="SearchIcon" />
                      </SearchButton>
                    </SearchBarContainer>
                    {this.renderMainContainer(darkMode)}
                  </HomeMainContainer>
                </HomeContainerItem>
              </HomeContainer>
            </div>
          )
        }}
      </ModeContext.Consumer>
    )
  }
}

export default Home
