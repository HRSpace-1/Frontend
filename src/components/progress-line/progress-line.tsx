import styles from './proress-line.module.scss'
import IconStep1 from '../../images/iconStep1.svg'
import IconStep3 from '../../images/iconStep3.svg'
import IconStep2 from '../../images/iconStep2.svg'
import IconStepSuccess from '../../images/iconStepSuccess.svg'
import IconRocket from '../../images/Rocket.svg'
import IconRocketFire from '../../images/iconRocketFire.svg'
import { useEffect, useState } from 'react'
import { useAppSelector } from '../../services/hooks'

function ProgressLine() {
  const [widthActiveLine, setWidthActiveLine] = useState(0)

  const { step } = useAppSelector(state => state.progressBar)

  useEffect(() => {
    if (step === 1) {
      setWidthActiveLine(0)
    }
    if (step === 2) {
      setWidthActiveLine(520)
    }
    if (step === 3) {
      setWidthActiveLine(1037)
    }
  }, [step])

  const widthStyle = {
    width: `${widthActiveLine}px`
  }

  return (
    <div className={`${styles.progressLine}`}>
      <div className={`${styles.steps}`}>
        <div className={`${styles.step}`}>
          {step > 1 ? (
            <IconStepSuccess className={`${styles.stepImage}`} />
          ) : (
            <IconStep1 className={`${styles.stepImage}`} />
          )}
          <p className={`${styles.stepText}`}>Шаг 1: создание вакансии</p>
        </div>
        <div className={`${styles.step}`}>
          {step > 2 ? (
            <IconStepSuccess className={`${styles.stepImage}`} />
          ) : (
            <IconStep2 className={`${styles.stepImage}`} />
          )}
          <p className={`${styles.stepText}`}>Шаг 2: создание вакансии</p>
        </div>
        <div className={`${styles.step}`}>
          {step > 3 ? (
            <IconStepSuccess className={`${styles.stepImage}`} />
          ) : (
            <IconStep3 className={`${styles.stepImage}`} />
          )}
          <p className={`${styles.stepText}`}>Шаг 3: создание вакансии</p>
        </div>
      </div>
      <div className={`${styles.progressBar}`}>
        <div className={`${styles.progressBarActive}`} style={widthStyle}>
          <IconRocketFire className={`${styles.iconRocketFire}`} />
        </div>
        <IconRocket className={`${styles.progressBarIcon}`} />
      </div>
    </div>
  )
}

export default ProgressLine
