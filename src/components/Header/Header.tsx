import React from 'react';
import styles from './Header.module.css'

const Header = () => { 
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <p>Z2H Team Faucet</p>
        <p>v 1.0</p>
      </div>
    </header>
  )
 };

 export default Header;