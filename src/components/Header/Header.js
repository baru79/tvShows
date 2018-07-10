// Dependecies
import React, { Component } from 'react'

// Styles
import styles from './Header.css'

function Title (tvShow) {
  let generosStr = ''
  let generos = tvShow.data.Genres
  for (var i = 0; i < generos.length; i++) {
    generosStr += generos[i].Title
    if (i < generos.length - 1) {
      generosStr += ' / '
    }
  }
  return (
    <div className={styles.title}>
      <h1>{tvShow.data.Title}</h1>
      <p>80% indicado / {generosStr} / {tvShow.data.Year} / EUA / 14</p>
    </div>
  )
}

class Header extends Component {
  render () {
    let generalInfo = this.props.data
    return (
      <div className={styles.header}>
        {generalInfo ? <Title data={generalInfo} /> : ''}
        <div className={styles.button}>
          <button className={styles.buttonClose}>X</button>
        </div>
      </div>)
  }
}

export default Header
