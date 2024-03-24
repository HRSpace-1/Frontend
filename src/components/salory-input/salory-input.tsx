import { FC } from 'react'
import { IPropsInputs } from '../../utils/types'
import InputBlock from '../input-block/input-block'
import styles from './salory-input.module.scss'

const SaloryInput: FC<IPropsInputs> = ({ handleChange }) => {
  return (
    <InputBlock title='Заработная плата'>
      <div className={styles.inputBlock}>
        <p className={styles.inputText}>от</p>
        <input
          type='number'
          className={styles.input}
          name='salary_from'
          onChange={handleChange}
        />
        <p className={styles.inputText}>до</p>
        <input
          type='number'
          className={styles.input}
          name='salary_up_to'
          onChange={handleChange}
        />
        <p className={styles.inputText}>₽</p>
        <input type='number' className={styles.input} />
        <p className={styles.inputText}> ₽</p>
      </div>
    </InputBlock>
  )
}

export default SaloryInput
