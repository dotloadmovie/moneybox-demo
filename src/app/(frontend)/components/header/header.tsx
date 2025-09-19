import React from 'react'

import styles from './header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <img src="/img/moneybox-logo.svg" alt="moneybox logo" />
      <a className={styles.button} href="https://webapp.moneyboxapp.com/auth/login">
        Login
      </a>
    </div>
  )
}

export default Header
