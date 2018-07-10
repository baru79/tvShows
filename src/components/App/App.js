// Dependecies
import React, {Component} from 'react'

// Components
import Header from '../Header/Header.js'
import Seasons from '../Seasons/Seasons.js'
import Footer from '../Footer/Footer.js'

// Styles
import styles from './App.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      menuOptionSelected: '1',
      seasonSelected: '1'
    }
    this.handleClickMenu = this.handleClickMenu.bind(this)
    this.handleClickSeason = this.handleClickSeason.bind(this)
    this.handleClickEpisode = this.handleClickEpisode.bind(this)
  }

  handleClickMenu (event) {
    const menuId = event.target.id
    this.setState({menuOptionSelected: menuId})
  }

  handleClickSeason (event) {
    const seasonId = event.target.id
    this.setState({seasonSelected: seasonId})
  }

  handleClickEpisode (event) {
    const episodeId = event.target.id
    if (this.state) {
      let episodes = this.state.episodes
      const episode = episodes.find(item => item && item.ID === episodeId)
      if (episode) {
        if (episode.hasOwnProperty('Selected')) {
          episode.Selected = !episode.Selected
        } else {
          // Add property Selected to object episode
          episode['Selected'] = true
        }
        this.setState({episodes})
      }
    }
  }

  getTvShowData () {
    fetch('https://sample-api-78c77.firebaseio.com/tv-shows/SHOW123.json')
      .then(response => { return response.json() })
      .then(data => {
        this.setState({generalInfo: data})
      })
  }

  getEpisodesData () {
    fetch('https://sample-api-78c77.firebaseio.com/episodes/SHOW123.json')
      .then(response => { return response.json() })
      .then(data => {
        this.setState({episodes: data})
      })
  }

  componentDidMount () {
    this.getTvShowData()
    this.getEpisodesData()
  }

  render () {
    const {generalInfo, episodes} = this.state
    let urlBackground
    if (generalInfo != null && episodes != null) {
      urlBackground = generalInfo.Images.Background
    }
    return (
      generalInfo && episodes
        ? <div
          className={styles.container}
          style={{'background': `linear-gradient(to right, rgba(0,0,0, 0.7), rgba(0,0,0, 0.8), rgba(0,0,0, 0.9), rgba(0,0,0, 1)),url(${urlBackground})`}}>
          <Header data={generalInfo} />
          <Seasons
            data={this.state}
            onClickSeason={this.handleClickSeason}
            onClickEpisode={this.handleClickEpisode} />
          <Footer
            data={this.state}
            onClickMenu={this.handleClickMenu}
          />
        </div>
        : null
    )
  }
}

export default App
