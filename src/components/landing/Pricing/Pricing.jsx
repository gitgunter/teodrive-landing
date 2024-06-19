import planConfig from '@config/planConfig.json'
import Plan from '../Plan/Plan'

import css from './Pricing.module.css'

const Pricing = () => {
  return (
    <div className={css.Pricing}>
      {planConfig.map((plan) => (
        <Plan key={plan.variant_id} plan={plan} />
      ))}
    </div>
  )
}
export default Pricing
