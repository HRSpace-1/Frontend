import { useEffect, useState } from 'react'
import { useAppSelector } from '../../services/hooks'
import IconStep1 from '../../images/icons/step1.svg'
import IconStep2 from '../../images/icons/step2.svg'
import IconStep3 from '../../images/icons/step3.svg'
import IconStepSuccess from '../../images/icons/step-success.svg'
import IconRocket from '../../images/icons/rocket.svg'
import IconRocketFire from '../../images/icons/rocket-fire.svg'
import styles from './proress-line.module.scss'

function ProgressLine() {
  const [widthActiveLine, setWidthActiveLine] = useState(0)

  const { step } = useAppSelector(state => state.progressBar)

  useEffect(() => {
    if (step === 1) {
      setWidthActiveLine(0)
    }
    if (step === 2) {
      setWidthActiveLine(39.7)
    }
    if (step === 3) {
      setWidthActiveLine(79)
    }
    if (step === 4) {
      setWidthActiveLine(100)
    }
  }, [step])

  const widthStyle = {
    width: `${widthActiveLine}%`
  }

  return (
    <div className={styles.progressLine}>
      <div className={styles.steps}>
        <div className={styles.step}>
          {step > 1 ? (
            <IconStepSuccess className={styles.stepImage} />
          ) : (
            <IconStep1 className={styles.stepImage} />
          )}
          <p className={styles.stepText}>Шаг 1: Создание вакансии</p>
        </div>
        <div className={styles.step}>
          {step > 2 ? (
            <IconStepSuccess className={styles.stepImage} />
          ) : (
            <IconStep2 className={styles.stepImage} />
          )}
          <p className={styles.stepText}>Шаг 2: Создание вакансии</p>
        </div>
        <div className={styles.step}>
          {step > 3 ? (
            <IconStepSuccess className={styles.stepImage} />
          ) : (
            <IconStep3 className={styles.stepImage} />
          )}
          <p className={styles.stepText}>Шаг 3: Создание вакансии</p>
        </div>
      </div>
      <div className={styles.progressBar}>
        <div className={styles.progressBarActive} style={widthStyle}>
          <IconRocketFire className={styles.iconRocketFire} />
        </div>
        <IconRocket className={styles.progressBarIcon} />
      </div>
    </div>
  )
}

export default ProgressLine
