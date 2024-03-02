import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'
import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'
import Header from '../Header'
import SideBarContainerView from '../SideBar'
import './index.css'

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

const ApiStatusConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

const ListItem = props => {
  const {ItemDetails, darkMode} = props
  const {id, viewCount, title, thumbnailUrl} = ItemDetails
  return (
    <Link to={`/videos/${id}`} className="LinkContainer">
      <VideoListItem>
        <ChannelImg src={thumbnailUrl} alt="video thumbnail" />
        <VideoListDetails darkMode={darkMode}>
          <Videotext fontSize="15px" fontWeight="bold">
            {title}
          </Videotext>
          <ChannelPara>{viewCount} views</ChannelPara>
        </VideoListDetails>
      </VideoListItem>
    </Link>
  )
}

class Gaming extends Component {
  state = {
    videosList: [],
    ApiStatus: ApiStatusConstants.initial,
  }

  componentDidMount = () => {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({ApiStatus: ApiStatusConstants.loading})
    const apiUrl = `https://apis.ccbp.in/videos/gaming`
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
        id: eachVideo.id,
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
            <SiYoutubegaming />
          </LogoCont>
          <TrendingHeader darkMode={darkMode}>Gaming</TrendingHeader>
        </TrendingHeaderContainer>
        <TrendingListContainer data-testid="gaming">
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

export default Gaming
