const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Trending extends Component {
  state = {
    videosList: [],
    apiStatus: apiStatusConstants.initial,
  }
  render() {
    return (
      <ModeContext.Consumer>
        {value => {
          const {darkMode} = value
          return (
            <>
              <Header />
              <TrendingMainContainer>
                <SideBar />
                <TrendingContainer>
                  <TrendingHeaderContainer>
                    <TrendingLogo />
                    <TrendingHeader></TrendingHeader>
                  </TrendingHeaderContainer>
                  <TrendingListContainer>
                    <ListItem />
                  </TrendingListContainer>
                </TrendingContainer>
              </TrendingMainContainer>
            </>
          )
        }}
      </ModeContext.Consumer>
    )
  }
}
