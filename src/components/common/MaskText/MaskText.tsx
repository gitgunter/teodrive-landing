import { useRef } from 'react'
import { useInView, motion } from 'framer-motion'

import css from './MaskText.module.css'

// Definir el tipo de las props
interface MaskTextProps {
  phrases: string[];
  className?: string | undefined,
  textClass?: string | undefined
}

const MaskText: React.FC<MaskTextProps> = ({ phrases, className, textClass }) => {
  const paragraph = useRef<HTMLDivElement>(null)
  const isInView = useInView(paragraph, { once: true })

  const animation = {
    initial: { y: '100%' },
    enter: (i: number) => ({
      y: '0',
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.075 * i
      }
    })
  }

  return (
    <div ref={paragraph} className={className}>
      {phrases.map((phrase, index) => (
        <div key={index} className={css.lineMask}>
          <motion.p className={textClass} custom={index} variants={animation} initial="initial" animate={isInView ? 'enter' : ''}>
            {phrase}
          </motion.p>
        </div>
      ))}
    </div>
  )
}

export default MaskText
