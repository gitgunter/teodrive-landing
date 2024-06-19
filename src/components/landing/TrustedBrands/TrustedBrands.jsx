import css from './TrustedBrands.module.css'

import AmazonBenefits from '@assets/images/brands/amazon_benefits_logo.webp'

const TrustedBrands = () => {
  return (
    <div className={css.TrustedBrands}>
      <h3 className={css.caption}>Confianza de los mejores</h3>
      <div className={css.brandWrapper}>
        <img src={AmazonBenefits} alt="Amazon Benefits" className={css.brandLogo} />
        <img src={AmazonBenefits} alt="Amazon Benefits" className={css.brandLogo} />
        <img src={AmazonBenefits} alt="Amazon Benefits" className={css.brandLogo} />
        <img src={AmazonBenefits} alt="Amazon Benefits" className={css.brandLogo} />
        <img src={AmazonBenefits} alt="Amazon Benefits" className={css.brandLogo} />
        <img src={AmazonBenefits} alt="Amazon Benefits" className={css.brandLogo} />
        <img src={AmazonBenefits} alt="Amazon Benefits" className={css.brandLogo} />
        <img src={AmazonBenefits} alt="Amazon Benefits" className={css.brandLogo} />
        <img src={AmazonBenefits} alt="Amazon Benefits" className={css.brandLogo} />
      </div>
    </div>
  )
}
export default TrustedBrands
