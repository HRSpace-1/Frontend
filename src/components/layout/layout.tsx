import styles from './layout.module.scss'
import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import AppHeader from '../app-header/app-header'
import ProgressLine from '../progress-line/progress-line'

const Layout: FC = () => {
  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={styles.main}>
        <ProgressLine />
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
