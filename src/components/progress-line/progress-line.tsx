import styles from './proress-line.module.scss'
import IconStep1 from '../../images/iconStep1.svg'
import IconStep3 from '../../images/iconStep3.svg'
import IconStep2 from '../../images/iconStep2.svg'
import IconStepSuccess from '../../images/iconStepSuccess.svg'
import { useEffect, useState } from 'react'
import { useAppSelector } from '../../services/hooks'

function ProgressLine() {
  const [inputValue, setInputValue] = useState(0)
  const [widthActiveLine, setWidthActiveLine] = useState(0)

  const { step } = useAppSelector(state => state.progressBar)

  useEffect(() => {
    if (step === 1) {
      setInputValue(0)
      setWidthActiveLine(0)
    }
    if (step === 2) {
      const progress = (100 / 300) * 123
      setInputValue(125)
      setWidthActiveLine(progress)
    }
    if (step === 3) {
      const progress = (100 / 300) * 247
      setInputValue(251)
      setWidthActiveLine(progress)
    }
  }, [step])

  const backgroundStyle = {
    background: `-webkit-linear-gradient(left, #303233 0%, #303233 ${widthActiveLine}%, #BABDBF ${widthActiveLine}%, #BABDBF 100%)`
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
      <input
        className={`${styles.progressBar}`}
        type='range'
        min={0}
        max={300}
        value={inputValue}
        style={backgroundStyle}
      />
    </div>
  )
}

export default ProgressLine
