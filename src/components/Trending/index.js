import {Component} from 'react'
import {Link} from 'react-router-dom'
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
  LogoCont,
} from './styledComponents'

import './index.css'

const ApiStatusConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

const ListItem = props => {
  const {ItemDetails, darkMode} = props
  const {channel, publishedAt, viewCount, title, thumbnailUrl, id} = ItemDetails
  const time = formatDistanceToNow(new Date(publishedAt))
  return (
    <Link to={`/videos/${id}`} className="LinkContainer">
      <VideoListItem>
        <ChannelImg src={thumbnailUrl} alt="video thumbnail" />
        <VideoListDetails darkMode={darkMode}>
          <Videotext fontSize="25px" fontWeight="bold">
            {title}
          </Videotext>
          <Videotext fontSize="15px">{channel.name}</Videotext>
          <VideoCountDetails>
            <ChannelPara>{viewCount} views</ChannelPara>
            <ChannelPara>
              <Dot> &#8226; </Dot>
              <p>{publishedAt}</p>
            </ChannelPara>
          </VideoCountDetails>
        </VideoListDetails>
      </VideoListItem>
    </Link>
  )
}

class Trending extends Component {
  state = {
    videosList: [],
    ApiStatus: ApiStatusConstants.initial,
  }

  componentDidMount = () => {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({ApiStatus: ApiStatusConstants.loading})
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

  onRetry = () => {
    this.setState({ApiStatus: ApiStatusConstants.initial}, this.getVideos)
  }

  renderLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderFailureView = darkMode => (
    <div className="FailureContainer">
      <FailureView
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
      <FailureHead>Oops! Something Went Wrong</FailureHead>
      <FailurePara>
        We are having some trouble to complete your request.Please try again.
      </FailurePara>
      <Retry onClick={this.onRetry}>Retry</Retry>
    </div>
  )

  renderSuccessView = darkMode => {
    const {videosList} = this.state
    return (
      <TrendingContainer>
        <TrendingHeaderContainer darkMode={darkMode}>
          <LogoCont darkMode={darkMode}>
            <FaFire />
          </LogoCont>
          <TrendingHeader darkMode={darkMode}>Trending</TrendingHeader>
        </TrendingHeaderContainer>
        <TrendingListContainer data-testid="trending">
          {videosList.map(eachItem => (
            <ListItem
              key={eachItem.id}
              ItemDetails={eachItem}
              darkMode={darkMode}
            />
          ))}
        </TrendingListContainer>
      </TrendingContainer>
    )
  }

  renderMainContainer = darkMode => {
    const {ApiStatus} = this.state
    switch (ApiStatus) {
      case ApiStatusConstants.loading:
        return this.renderLoader()
      case ApiStatusConstants.success:
        return this.renderSuccessView(darkMode)
      case ApiStatusConstants.failure:
        return this.renderFailureView(darkMode)
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
                {this.renderMainContainer(darkMode)}
              </TrendingMainContainer>
            </>
          )
        }}
      </ModeContext.Consumer>
    )
  }
}

export default Trending
