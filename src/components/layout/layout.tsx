import styles from './layout.module.scss'
import { FC } from 'react'
import { Outlet } from 'react-router-dom'

const Layout: FC = () => {
  return (
    <div className={styles.app}>
      <main className={styles.main}>
        <h1>QWERTY</h1>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
