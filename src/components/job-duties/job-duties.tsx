import styles from './job-duties.module.scss'
import { FC } from 'react'
import InputBlock from '../input-block/input-block'

const JobDuties: FC = () => {
  return (
    <InputBlock title='Что входит в работу рекрутера'>
      <div className={styles.container}></div>
    </InputBlock>
  )
}

export default JobDuties
