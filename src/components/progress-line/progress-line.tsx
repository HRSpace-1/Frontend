import styles from './proress-line.module.scss'
import iconStep3 from '../../images/iconStep3.jpg'
import iconStep2 from '../../images/iconStep2.jpg'
import iconStepSuccess from '../../images/iconStepSuccess.jpg'
import { useEffect, useState } from 'react'
import { useAppSelector } from '../../services/hooks'
// import ProgressBarBackground from '../../images/Progress_bg.svg'

function ProgressLine() {
  const [inputValue, setInputValue] = useState(0)

  const { step } = useAppSelector(state => state.progressBar)

  useEffect(() => {
    // console.log(step)
    if (step === 1) {
      setInputValue(0)
    }
    if (step === 2) {
      const progress = (100 / 110) * 45
      setInputValue(progress)
    }
    if (step === 3) {
      const progress = (100 / 110) * 90
      setInputValue(progress)
    }
  }, [step])

  const backgroundStyle = {
    background: `-webkit-linear-gradient(left, #303233 0%, #303233 ${inputValue}%, #BABDBF ${inputValue}%, #BABDBF 100%)`
  }

  return (
    <div className={`${styles.progressLine}`}>
      <div className={`${styles.steps}`}>
        <div className={`${styles.step}`}>
          <img
            className={`${styles.stepImage}`}
            src={iconStepSuccess}
            alt='иконка'
          />
          <p className={`${styles.stepText}`}>Шаг 1: создание вакансии</p>
        </div>
        <div className={`${styles.step}`}>
          <img className={`${styles.stepImage}`} src={iconStep2} alt='иконка' />
          <p className={`${styles.stepText}`}>Шаг 2: создание вакансии</p>
        </div>
        <div className={`${styles.step}`}>
          <img className={`${styles.stepImage}`} src={iconStep3} alt='иконка' />
          <p className={`${styles.stepText}`}>Шаг 3: создание вакансии</p>
        </div>
      </div>
      <input
        className={`${styles.progressBar}`}
        type='range'
        min={0}
        max={110}
        value={45}
        style={backgroundStyle}
      />
      {/* <div className={`${styles.progressBar}`}>
        <ProgressBarBackground className={`${styles.progressBarLine}`} />
      </div> */}
    </div>
  )
}

export default ProgressLine
