import { useInView, motion } from 'framer-motion'
import { useRef } from 'react'

import Wrap from '@/components/common/Wrap/Wrap'
import css from './Hero.module.css'
import TeodriveButton from '@/components/common/TeodriveButton/TeodriveButton'

const Hero = () => {
  const hero = useRef(null)
  const isInView = useInView(hero, { once: true })

  const redirectToRegister = () => {
    window.location.href = 'https://app.teodrive.com/register'
  }

  return (
    <div ref={hero} className={css.Hero}>
      <Wrap className={css.heroHeadingWrapper} display='block'>
        <div style={{ overflow: 'hidden' }}>
          <motion.p
            initial={{ y: '100%' }}
            animate={
              isInView && {
                y: '0',
                transition: {
                  duration: 0.75,
                  ease: [0.33, 1, 0.68, 1],
                  delay: 0.075 * 0
                }
              }
            }
          >
            Aspira a ser
          </motion.p>
        </div>
        <div style={{ overflow: 'hidden' }}>
          <motion.p
            initial={{ y: '100%' }}
            animate={
              isInView && {
                y: '0',
                transition: {
                  duration: 0.75,
                  ease: [0.33, 1, 0.68, 1],
                  delay: 0.075 * 1
                }
              }
            }
          >
            un conductor
          </motion.p>
        </div>
        <div style={{ overflow: 'hidden' }}>
          <motion.div
            initial={{ y: '100%' }}
            animate={
              isInView && {
                y: '0',
                transition: {
                  duration: 0.75,
                  ease: [0.33, 1, 0.68, 1],
                  delay: 0.075 * 2
                }
              }
            }
          >
            <HeroHighlighted />
          </motion.div>
        </div>
      </Wrap>
      <Wrap width='500px'>
        <div style={{ overflow: 'hidden' }}>
          <motion.div
            initial={{ y: '100%' }}
            animate={
              isInView && {
                y: '0',
                transition: {
                  duration: 0.75,
                  ease: [0.33, 1, 0.68, 1],
                  delay: 0.075 * 2.5
                }
              }
            }
          >
            <p className={css.heroParagraph}>
              Crea exámenes de práctica teóricos y mejora tus posibilidades de
              aprobar el examen oficial de COSEVI
            </p>
          </motion.div>
        </div>
      </Wrap>
      <div style={{ overflow: 'hidden' }}>
        <motion.div
          initial={{ y: '100%' }}
          animate={
            isInView && {
              y: '0',
              transition: {
                duration: 0.75,
                ease: [0.33, 1, 0.68, 1],
                delay: 0.075 * 2.5
              }
            }
          }
        >
          <Wrap flexDirection='column' rowGap='1rem' width='fit-content'>
            <TeodriveButton style={{ width: 'fit-content' }} onClick={redirectToRegister}>
              Empezar ahora
            </TeodriveButton>
            <span className={css.teodriveVersion}>Beta v1.0</span>
          </Wrap>
        </motion.div>
      </div>
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
