// Dependecies
import React, {Component} from 'react'

// Styles
import styles from './Seasons.css'

class Seasons extends Component {
  render () {
    let {seasonSelected, episodes} = this.props.data
    let nroSeason = 0
    return (
      <div className={styles.seasonsContainer}>
        <div className={styles.seasons}>
          <ul className={styles.seasonOptions}>
            {
              episodes.map((item, index) => {
                if (item !== null) {
                  if (item.SeasonNumber > nroSeason) {
                    nroSeason = item.SeasonNumber
                    return (
                      <li
                        key={index}
                        className={item.SeasonNumber.toString() === seasonSelected.toString()
                          ? styles.seasonOn
                          : styles.seasonOff}>
                        <button
                          className={styles.seasonButton}
                          id={item.SeasonNumber}
                          onClick={this.props.onClickSeason}
                        >T{nroSeason}</button>
                      </li>
                    )
                  }
                }
              })
            }
          </ul>
          <ul className={styles.episodeList}>
            {
              episodes.map((item, index) => {
                if (item !== null && item.SeasonNumber.toString() === seasonSelected.toString()) {
                  return (
                    <li key={index}>
                      <div className={styles.episodeTitle}>
                        <button
                          className={styles.episodeButton}
                          id={item.ID}
                          onClick={this.props.onClickEpisode}>
                          {item.ID.split('-')[1]} {item.Title}
                        </button>
                        <button className={styles.episodeButtonPlay}>
                          <i className='fa fa-play' aria-hidden='true' />
                        </button>
                      </div>
                      {item.Selected === true
                        ? <div className={styles.episodeInfo}>
                          <img src={item.Image} />
                          <p>{item.Synopsis}</p>
                        </div>
                        : null}
                    </li>
                  )
                }
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default Seasons
