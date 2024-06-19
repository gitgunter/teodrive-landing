import css from './SectionLayout.module.css'

const SectionLayout = ({ children }) => {
  return (
    <section className={css.SectionLayout}>
      {children}
    </section>
  )
}
export default SectionLayout
