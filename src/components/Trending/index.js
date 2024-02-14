import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {FaFire} from 'react-icons/fa'
import {formatDistanceToNow} from 'date-fns'
import Header from '../Header'
import SideBarContainerView from '../SideBar'

import ModeContext from '../Context'
import {
  TrendingMainContainer,
  VideoListItem,
  ChannelImg,
  VideoListDetails,
  Videotext,
  VideoCountDetails,
  ChannelPara,
  FailureView,
  FailureHead,
  FailurePara,
  Retry,
  TrendingContainer,
  TrendingHeaderContainer,
  TrendingHeader,
  TrendingListContainer,
  Dot,
} from './styledComponents'

const ApiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

const ListItem = props => {
  const {ItemDetails} = props
  const {channel, publishedAt, viewCount, title} = ItemDetails
  const time = formatDistanceToNow(new Date(publishedAt))
  return (
    <VideoListItem>
      <ChannelImg src={channel.profile_image_url} />
      <VideoListDetails>
        <Videotext fontSize="25px">{title}</Videotext>
        <Videotext fontSize="15px">{channel.name}</Videotext>
        <VideoCountDetails>
          <ChannelPara color="  #606060">{viewCount} views</ChannelPara>
          <ChannelPara color="  #606060">
            <Dot> &#8226; </Dot>
            {time} ago
          </ChannelPara>
        </VideoCountDetails>
      </VideoListDetails>
    </VideoListItem>
  )
}

class Trending extends Component {
  state = {
    videosList: [],
    ApiStatus: ApiStatusConstants.initial,
  }

  ComponentDidMount = () => {
    this.getVideos()
  }

  onRetry = () => {
    this.setState(
      {ApiStatus: ApiStatusConstants.initial},
      this.getListOfVideosData,
    )
  }

  getVideos = async () => {
    this.setState({ApiStatus: ApiStatusConstants.inProgress})
    const apiUrl = `https://apis.ccbp.in/videos/trending`
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
        videosList: updatedData,
      })
    } else {
      this.setState({ApiStatus: ApiStatusConstants.failure})
    }
  }

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
      <Retry onClick={this.onRetry}>Retry</Retry>
    </div>
  )

  renderSuccessView = () => {
    const {videosList} = this.state
    return (
      <TrendingContainer>
        <TrendingHeaderContainer>
          <FaFire className="SideItemStyle" />
          <TrendingHeader>Trending</TrendingHeader>
        </TrendingHeaderContainer>
        <TrendingListContainer>
          {videosList.map(eachItem => (
            <ListItem key={eachItem.id} ItemDetails={eachItem} />
          ))}
        </TrendingListContainer>
      </TrendingContainer>
    )
  }

  renderMainContainer = () => {
    const {ApiStatus} = this.state
    switch (ApiStatus) {
      case ApiStatusConstants.inProgress:
        return this.renderLoader()
      case ApiStatusConstants.success:
        return this.renderSuccessView()
      case ApiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <ModeContext.Consumer>
        {value => {
          const {darkMode} = value
          return (
            <>
              <Header />
              <TrendingMainContainer darkMode={darkMode}>
                <SideBarContainerView />
                {this.renderMainContainer()}
              </TrendingMainContainer>
            </>
          )
        }}
      </ModeContext.Consumer>
    )
  }
}

export default Trending
