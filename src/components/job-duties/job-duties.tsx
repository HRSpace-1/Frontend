import styles from './job-duties.module.scss'
import { FC, useEffect, useState } from 'react'
import InputBlock from '../input-block/input-block'
import Checkbox from '../../ui/checkbox/checkbox'
import { IPropsButtons } from '../../utils/types'

const JobDuties: FC<IPropsButtons> = ({ addValue }) => {
  const [recruiterResponsibilities, setRecruiterResponsibilities] =
    useState(null)

  useEffect(() => {
    if (recruiterResponsibilities !== null) {
      const recruiterResponsibilitiesString =
        recruiterResponsibilities.join('. ')
      addValue('recruiter_responsibilities', recruiterResponsibilitiesString)
    }
  }, [recruiterResponsibilities])

  return (
    <InputBlock title='Что входит в работу рекрутера'>
      <div className={styles.container}>
        <Checkbox
          setRecruiterResponsibilities={setRecruiterResponsibilities}
          recruiterResponsibilities={recruiterResponsibilities}
          label='Поиск и предоставление ревантных резюме'
        />
        <Checkbox
          setRecruiterResponsibilities={setRecruiterResponsibilities}
          recruiterResponsibilities={recruiterResponsibilities}
          label='Организация собеседования с заказчиком, синхронизация по времени соискателя и заказчика'
        />
        <Checkbox
          setRecruiterResponsibilities={setRecruiterResponsibilities}
          recruiterResponsibilities={recruiterResponsibilities}
          label='Запрос рекомендаций с прошлых мест работы'
        />
        <Checkbox
          setRecruiterResponsibilities={setRecruiterResponsibilities}
          recruiterResponsibilities={recruiterResponsibilities}
          label='Отправка кандидату тестового задания'
        />
        <Checkbox
          setRecruiterResponsibilities={setRecruiterResponsibilities}
          recruiterResponsibilities={recruiterResponsibilities}
          label='Отправка кандидату анкеты службы безопасности вашей компании '
        />
        <Checkbox
          setRecruiterResponsibilities={setRecruiterResponsibilities}
          recruiterResponsibilities={recruiterResponsibilities}
          label='Отправка финалисту приглашения на работу'
        />
      </div>
    </InputBlock>
  )
}

export default JobDuties
