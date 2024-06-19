import Wrap from '@components/common/Wrap/Wrap'

import css from './Plan.module.css'
import { Tick02 } from '@icons'

interface PlanProps {
  mostPopular: boolean;
  variant_id: string;
  plan_id: string;
  plan_name: string;
  caption: string;
  price: number;
  paymentInterval: string;
  features: string[];
}

const Plan: React.FC<{ plan: PlanProps }> = ({ plan }) => {
  return (
    <div className={`${css.Plan} ${plan.mostPopular && css.mostPopular}`}>
      <Wrap flexDirection='column' rowGap='0.5rem'>
        <h2 className={`${css.planName} ${plan.mostPopular && css.mostPopular}`}>{plan.plan_name}</h2>
        <p className={css.planCaption}>{plan.caption}</p>
      </Wrap>
      <Price price={plan.price} paymentInterval={plan.paymentInterval} />
      <button
        type='button'
        className={`${css.selectPlanButton} ${
          plan.mostPopular && css.mostPopular
        }`}
      >
        Elegir plan
      </button>
      <FeaturesList features={plan.features} />
    </div>
  )
}
export default Plan

const FeaturesList: React.FC<{ features: string[] }> = ({ features }) => (
  <ul className={css.FeaturesList}>
    {features.map((feature, index) => (
      <Wrap display='flex' flexDirection='row' columnGap='0.75rem' alignItems='center' key={index}>
        <Tick02 size={20} color='#207FD6' />
        <p className={css.featureLabel}>{feature}</p>
      </Wrap>
    ))}
  </ul>
)

const Price: React.FC<{ price: number; paymentInterval: string }> = ({
  price,
  paymentInterval
}) => {
  return (
    <div className={css.Price}>
      <h1 className={css.planPrice}>{price}</h1>
      <h2 className={css.planPaymentInterval}>{`/ ${paymentInterval}`}</h2>
    </div>
  )
}
