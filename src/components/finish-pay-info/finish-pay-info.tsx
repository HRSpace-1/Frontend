import FormInfoCard from '../form-info-card/form-info-card'
import InputBlock from '../input-block/input-block'
import style from './finish-pay-info.module.scss'

function FinishPayInfo() {
  return (
    <InputBlock title={'Из чего складывается итоговая сумма'}>
      <div className={style.finishPayInfo}>
        <FormInfoCard
          title='Оплата за сотрудника'
          text='Рекомендуемая сумма — среднемесячный доход кандидата и выше'
        />
        <FormInfoCard
          title='Количество сотрудников'
          text='Оплата взывается за каждого, вышедшего сотрудника'
        />
        <FormInfoCard
          title='Комиссия HRspace 20%'
          text='Удерживается из оплаты за каждого вышедшего сотрудника'
          info={true}
          infoText='Если вы найдете сотрудника самостоятельно списывается комиссия 5% за публикацию'
        />
      </div>
    </InputBlock>
  )
}

export default FinishPayInfo
