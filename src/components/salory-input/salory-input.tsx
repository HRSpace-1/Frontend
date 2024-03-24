import { FC, useEffect } from 'react'
import { IPropsButtons } from '../../utils/types'
import InputBlock from '../input-block/input-block'
import styles from './salory-input.module.scss'

const SaloryInput: FC<IPropsButtons> = ({ addValue }) => {
  useEffect(() => {
    console.log(addValue)
  }, [])

  return (
    <InputBlock
      title='Заработная плата'
      extraClass={styles.experienceJobInput}
      required
    >
      <div className={styles.inputBlock}>
        <p className={styles.inputText}>от</p>
        <input type='number' className={styles.input} />
        <p className={styles.inputText}>до</p>
        <input type='number' className={styles.input} />
        <p className={styles.inputText}>₽</p>
      </div>
    </InputBlock>
  )
}

export default SaloryInput
