import styles from './job-duties.module.scss'
import { FC } from 'react'
import InputBlock from '../input-block/input-block'
import Checkbox from '../../ui/checkbox/checkbox'

const JobDuties: FC = () => {
  return (
    <InputBlock title='Что входит в работу рекрутера'>
      <div className={styles.container}>
        <Checkbox label='Поиск и предоставление ревантных резюме' />
        <Checkbox label='Организация собеседования с заказчиком, синхронизация по времени соискателя и заказчика' />
        <Checkbox label='Запрос рекомендаций с прошлых мест работы' />
        <Checkbox label='Отправка кандидату тестового задания' />
        <Checkbox label='Отправка кандидату анкеты службы безопасности вашей компании ' />
        <Checkbox label='Отправка финалисту приглашения на работу' />
      </div>
    </InputBlock>
  )
}

export default JobDuties
