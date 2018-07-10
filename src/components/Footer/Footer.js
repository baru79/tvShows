// Dependecies
import React, { Component } from 'react'

// Styles
import styles from './Footer.css'

function OptionMenu1 (generalInfo) {
  const { Synopsis } = generalInfo.data
  return (
    <div className={styles.menuOption1}>
      <ul className={styles.menuOption1IconList}>
        <li>
          <div className={styles.menuOption1Icon}>
            <i className='fa fa-plus' aria-hidden='true' />
          </div>
          Mi Lista
        </li>
        <li>
          <div className={styles.menuOption1Icon}>
            <i className='fa fa-frown-o' aria-hidden='true' />
          </div>
          Evaluar
        </li>
        <li>
          <div className={styles.menuOption1Icon}>
            <i className='fa fa-circle' aria-hidden='true' />
          </div>
          Grabar
        </li>
        <li>
          <div className={styles.menuOption1Icon}>
            <i className='fa fa-upload' aria-hidden='true' />
          </div>
          Compartir
        </li>
      </ul>
      <div className={styles.menuSinopsis}>
        <p>Sinopse</p>
        <p>{Synopsis}</p>
      </div>
    </div>
  )
}

function OptionMenu2 (generalInfo) {
  const {Cast} = generalInfo.data
  return (
    <div className={styles.menuOption2}>
      <ul className={styles.menuOption2CastList}>
        {Cast.map((item, index) => {
          return (<li key={index} className={styles.menuOption2CastItem}>{item.Name}</li>)
        })}
      </ul>
    </div>
  )
}

function OptionMenu3 () {
  return (
    <div className={styles.menuOption3}>Principales Premios</div>
  )
}

class Footer extends Component {
  render () {
    const {menuOptionSelected, generalInfo} = this.props.data
    return (
      <footer className={styles.footer}>
        <ul className={styles.menuItems}>
          <li className={menuOptionSelected.toString() === '1' ? styles.menuOn : styles.menuOff}>
            <button
              id='1'
              className={styles.menuButton}
              onClick={this.props.onClickMenu}
            >General</button>
          </li>
          <li className={menuOptionSelected.toString() === '2' ? styles.menuOn : styles.menuOff}>
            <button
              id='2'
              className={styles.menuButton}
              onClick={this.props.onClickMenu}
            >Elenco</button>
          </li>
          <li className={menuOptionSelected.toString() === '3' ? styles.menuOn : styles.menuOff}>
            <button
              id='3'
              className={styles.menuButton}
              onClick={this.props.onClickMenu}
            >Principales Premios</button>
            <ul className={styles.menuLogo}>
              <li>Tele</li>
              <li>Cine</li>
            </ul>
          </li>
        </ul>
        {(() => {
          switch (menuOptionSelected.toString()) {
            case '1':
              return <OptionMenu1 data={generalInfo} />
            case '2':
              return <OptionMenu2 data={generalInfo} />
            case '3':
              return <OptionMenu3 />
          }
        })()}
      </footer>
    )
  }
}

export default Footer
