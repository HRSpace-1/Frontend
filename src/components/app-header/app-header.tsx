import styles from './app-header.module.scss'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../images/icons/logo.svg'
import Like from '../../images/icons/heart.svg'
import Notification from '../../images/icons/bell.svg'
import Avatar from '../../images/content/avatar.png'

const AppHeader: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to='/' className={styles.logo}>
          <Logo className={styles.logoIcon} />
        </Link>
        <nav>
          <ul className={styles.menu}>
            <li>
              <a href='#' className={styles.link}>
                Главная
              </a>
            </li>
            <li>
              <a href='#' className={styles.link}>
                Мои заявки
              </a>
            </li>
            <li>
              <a href='#' className={styles.link}>
                Поиск по рынку
              </a>
            </li>
            <li>
              <a href='#' className={styles.link}>
                Счёт
              </a>
            </li>
            <li>
              <a href='#' className={styles.link}>
                Помощь
              </a>
            </li>
          </ul>
        </nav>
        <div className={styles.tray}>
          <a href='#'>
            <Like className={styles.like} />
          </a>
          <a href='#'>
            <Notification className={styles.notification} />
          </a>
          <a href='#' className={styles.profile}>
            <img src={Avatar} className={styles.avatar} />
            <div>
              <p className={styles.name}>Анастасия Волошина</p>
              <p className={styles.id}>#67334</p>
            </div>
          </a>
        </div>
      </div>
    </header>
  )
}

export default AppHeader
