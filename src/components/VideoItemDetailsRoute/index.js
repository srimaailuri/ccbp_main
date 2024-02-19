import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {formatDistanceToNow} from 'date-fns'
import {FaRegThumbsUp, FaRegThumbsDown, FaFire} from 'react-icons/fa'
import {MdPlaylistAdd} from 'react-icons/md'
import {withRouter} from 'react-router-dom'
import ReactPlayer from 'react-player'
import Header from '../Header'
import SideBarContainerView from '../SideBar'

import ModeContext from '../Context'
import {
  TrendingMainContainer,
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

const FormatVideoDetails = videoDetails => ({
  id: videoDetails.id,
  title: videoDetails.title,
  videoUrl: videoDetails.video_url,
  thumbnailUrl: videoDetails.thumbnail_url,
  channel: {
    name: videoDetails.channel.name,
    profileImageUrl: videoDetails.channel.profile_image_url,
    subscriberCount: videoDetails.channel.subscriber_count,
  },
  viewCount: videoDetails.view_count,
  publishedAt: videoDetails.published_at,
  description: videoDetails.description,
})

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
      const videoDetails = data.video_details
      const updatedData = FormatVideoDetails(videoDetails)
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

  renderSuccessView = darkMode => (
    <ModeContext.Consumer>
      {value => {
        const {
          savetoVideos,
          AddLikedVideos,
          AddDislikedVideos,
          savedVideosList,
          likedVideosList,
          dislikedVideosList,
        } = value
        const {videosList} = this.state
        const {
          id,
          title,
          description,
          videoUrl,
          thumbnailUrl,
          channel,
          viewCount,
          publishedAt,
        } = videosList
        const {name, profileImageUrl, subscriberCount} = channel
        const time = formatDistanceToNow(new Date(publishedAt))
          .split(' ')
          .slice(1)
          .join(' ')

        const onClickLikeButton = () => {
          AddLikedVideos(id)
        }

        const onClickDisLikeButton = () => {
          AddDislikedVideos(id)
        }

        const onClickSaveButton = () => {
          savedVideosList(videosList)
        }

        return (
          <TrendingContainer>
            <TopContainer>
              <ReactPlayer
                url={videoUrl}
                width="100%"
                height="450px"
                controls
              />
              <Shortdescription>{title}</Shortdescription>
              <CountLikesContainer>
                <VideoCountDetails>
                  <ChannelPara>{viewCount}</ChannelPara>
                  <ChannelPara>
                    <Dot> &#8226; </Dot>
                    {time}
                  </ChannelPara>
                </VideoCountDetails>
                <LikesDisLikeSaveContainer>
                  <LikeBox
                    type="button"
                    onClick={onClickLikeButton}
                    value={likedVideosList.includes(id)}
                  >
                    <FaRegThumbsUp />
                    <LikeTitle>Like</LikeTitle>
                  </LikeBox>
                  <LikeBox
                    type="button"
                    onClick={onClickDisLikeButton}
                    value={dislikedVideosList.includes(id)}
                  >
                    <FaRegThumbsDown />
                    <LikeTitle>Dislike</LikeTitle>
                  </LikeBox>
                  <LikeBox
                    type="button"
                    onClick={onClickSaveButton}
                    value={savedVideosList.includes(id)}
                  >
                    <MdPlaylistAdd />
                    <LikeTitle>Save</LikeTitle>
                  </LikeBox>
                </LikesDisLikeSaveContainer>
              </CountLikesContainer>
            </TopContainer>
            <BottomContainer>
              <HorizontalLine />
              <DescriptionContainer>
                <Logo src={profileImageUrl} />
                <DescriptionTextContainer>
                  <Subscribers>
                    <DescriptionText fontSize="17px">{name}</DescriptionText>
                    <DescriptionText fontSize="14px">
                      {subscriberCount} subscribers
                    </DescriptionText>
                  </Subscribers>
                  <DescriptionText fontSize="17px">
                    {description}
                  </DescriptionText>
                </DescriptionTextContainer>
              </DescriptionContainer>
            </BottomContainer>
          </TrendingContainer>
        )
      }}
    </ModeContext.Consumer>
  )

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
