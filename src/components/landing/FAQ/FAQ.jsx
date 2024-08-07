/* eslint-disable react-refresh/only-export-components */
import { useState } from 'react'

import { ArrowDown01 } from '@/assets/icons'
import faqConfig from '@config/faqConfig.json'

import css from './FAQ.module.css'

const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState(null)

  const handleOpenQuestion = (id) => {
    setActiveQuestion((prevId) => (prevId === id ? null : id))
  }

  return (
    <div className={css.FAQ}>
      {faqConfig.map((faq) => (
        <Question
          key={faq.id}
          active={activeQuestion === faq.id}
          question={faq.question}
          content={faq.content}
          onClick={() => handleOpenQuestion(faq.id)}
        />
      ))}
    </div>
  )
}
export default FAQ

const Question = ({ active, question, content, onClick }) => {
  return (
    <div onClick={onClick} className={css.Question}>
      <div className={css.questionHeader}>
        <h3 className={css.questionTitle}>{question}</h3>
        <ArrowDown01
          className={`${css.dropdownArrow} ${active ? css.active : ''}`}
        />
      </div>
      <div className={`${css.questionContentWrapper} ${active ? css.active : ''}`}>
        <p className={active ? css.active : ''}>{content}</p>
      </div>
    </div>
  )
}
