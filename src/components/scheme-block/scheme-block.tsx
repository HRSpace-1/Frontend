import InputBlock from '../input-block/input-block'
import SchemeCard from '../scheme-card/scheme-card'
import styles from './scheme-block.module.scss'
import IconBadgeSmileGreen from '../../images/iconBadgeSmileGreen.svg'
import IconBadgeSmileOrange from '../../images/iconBadgeSmileOrange.svg'
import IconBadgeSmileRed from '../../images/iconBadgeSadRed.svg'

function SchemeBlock() {
  return (
    <InputBlock title='Схема оплаты рекрутеру'>
      <div className={styles.schemeBlock}>
        <SchemeCard
          title='100% сразу '
          text='Полная выплата вознаграждения по факту выхода сотрудника'
          type='green'
        >
          <div className={styles.badgeIcon}>
            <IconBadgeSmileGreen />
          </div>
          <p className={styles.badgeText}>Выбирают рекрутеры</p>
        </SchemeCard>
        <SchemeCard
          title='100% после'
          text='Полная выплата  производится после  гарантийного срока (1 месяц) '
          type='orange'
        >
          <div className={styles.badgeIcon}>
            <IconBadgeSmileOrange />
          </div>
          <p className={styles.badgeText}>Золотая середина</p>
        </SchemeCard>
        <SchemeCard
          title='100% после'
          text='Полная выплата  производится после  гарантийного срока (1 месяц) '
          type='red'
        >
          <div className={styles.badgeIcon}>
            <IconBadgeSmileRed />
          </div>
          <p className={styles.badgeText}>Риски для рекрутера</p>
        </SchemeCard>
      </div>
    </InputBlock>
  )
}

export default SchemeBlock
