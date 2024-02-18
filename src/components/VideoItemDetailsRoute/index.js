import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {formatDistanceToNow} from 'date-fns'
import {FaRegThumbsUp, FaRegThumbsDown, FaFire} from 'react-icons/fa'
import {MdPlaylistAdd} from 'react-icons/md'
import {withRouter} from 'react-router-dom'
import Header from '../Header'
import SideBarContainerView from '../SideBar'

import ModeContext from '../Context'
import {
  TrendingMainContainer,
  VideoListItem,
  ChannelImg,
  VideoListDetails,
  Videotext,
  YoutubeVideo,
  LikeTitle,
  LikeBox,
  Shortdescription,
  CountLikesContainer,
  TopContainer,
  BottomContainer,
  HorizontalLine,
  Logo,
  DescriptionText,
  Subscribers,
  DescriptionContainer,
  DescriptionTextContainer,
  LikesDisLikeSaveContainer,
  VideoCountDetails,
  ChannelPara,
  FailureView,
  FailureHead,
  FailurePara,
  Retry,
  TrendingContainer,
  Dot,
} from './styledComponents'

const ApiStatusConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

const ListItem = props => {
  const {ItemDetails, darkMode} = props
  const {channel, publishedAt, viewCount, title, thumbnailUrl} = ItemDetails
  const time = formatDistanceToNow(new Date(publishedAt))
  return (
    <VideoListItem>
      <ChannelImg src={thumbnailUrl} />
      <VideoListDetails darkMode={darkMode}>
        <Videotext fontSize="25px" fontWeight="bold">
          {title}
        </Videotext>
        <Videotext fontSize="15px">{channel.name}</Videotext>
        <VideoCountDetails>
          <ChannelPara>{viewCount} views</ChannelPara>
          <ChannelPara>
            <Dot> &#8226; </Dot>
            {time} ago
          </ChannelPara>
        </VideoCountDetails>
      </VideoListDetails>
    </VideoListItem>
  )
}

class VideoItemDetails extends Component {
  state = {
    videosList: [],
    ApiStatus: ApiStatusConstants.initial,
  }

  componentDidMount = () => {
    this.getVideos()
  }

  onRetry = () => {
    this.setState(
      {ApiStatus: ApiStatusConstants.initial},
      this.getListOfVideosData,
    )
  }

  getVideos = async () => {
    this.setState({ApiStatus: ApiStatusConstants.loading})
    const {match} = this.props
    const {id} = match.params
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
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
        videoUrl: eachVideo.video_url,
        viewCount: eachVideo.view_count,
        title: eachVideo.title,
        description: eachVideo.description,
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

  renderSuccessView = darkMode => {
    const {videosList} = this.state
    const {title, description, videoUrl, thumbnailUrl, channel} = videosList
    return (
      <TrendingContainer>
        <TopContainer>
          <YoutubeVideo src={videoUrl} />
          <Shortdescription>{title}</Shortdescription>
          <CountLikesContainer>
            <VideoCountDetails>
              <ChannelPara>12 views</ChannelPara>
              <ChannelPara>
                <Dot> &#8226; </Dot>3 ago
              </ChannelPara>
            </VideoCountDetails>
            <LikesDisLikeSaveContainer>
              <LikeBox>
                <FaRegThumbsUp />
                <LikeTitle>Like</LikeTitle>
              </LikeBox>
              <LikeBox>
                <FaRegThumbsDown />
                <LikeTitle>Dislike</LikeTitle>
              </LikeBox>
              <LikeBox>
                <MdPlaylistAdd />
                <LikeTitle>Save</LikeTitle>
              </LikeBox>
            </LikesDisLikeSaveContainer>
          </CountLikesContainer>
        </TopContainer>
        <BottomContainer>
          <HorizontalLine />
          <DescriptionContainer>
            <Logo src={channel.profile_image_url} />
            <DescriptionTextContainer>
              <Subscribers>
                <DescriptionText fontSize="20px">
                  {channel.name}
                </DescriptionText>
                <DescriptionText fontSize="12px">
                  {channel.subscribers_count}
                </DescriptionText>
              </Subscribers>
              <DescriptionText fontSize="20px">{description}</DescriptionText>
            </DescriptionTextContainer>
          </DescriptionContainer>
        </BottomContainer>
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

export default VideoItemDetails
