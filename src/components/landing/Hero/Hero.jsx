import Wrap from '@/components/common/Wrap/Wrap'
import css from './Hero.module.css'
import TeodriveButton from '@/components/common/TeodriveButton/TeodriveButton'

const Hero = () => {
  return (
    <div className={css.Hero}>
      <Wrap className={css.heroHeadingWrapper} display='block'>
        <h1 className={css.heading}>Aspira a ser</h1>
        <h1 className={css.heading}>un conductor</h1>
        <HeroHighlighted />
      </Wrap>
      <Wrap width='500px'>
        <p className={css.heroParagraph}>
          Crea exámenes de práctica teóricos y mejora tus posibilidades de
          aprobar el examen oficial de COSEVI
        </p>
      </Wrap>
      <Wrap flexDirection='column' rowGap='1rem' width='fit-content'>
        <TeodriveButton style={{ width: 'fit-content' }}>Empezar ahora</TeodriveButton>
        <span className={css.teodriveVersion}>Beta v1.0</span>
      </Wrap>
    </div>
  )
}
export default Hero

export const HeroHighlighted = () => {
  return (
    <div className={css.HeroHighlighted}>
      <h1 className={css.textBackground}>Profesional.</h1>
      <h1 className={css.textGradient}>Profesional.</h1>
    </div>
  )
}
