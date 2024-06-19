import css from './SectionHeader.module.css'

interface SectionHeaderProps {
  caption?: string,
  title: string,
  description?: string
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ caption, title, description }) => {
  return (
    <div className={css.SectionHeader}>
      <h3 className={css.caption}>{caption}</h3>
      <h1 className={css.title}>{title}</h1>
      <p className={css.description}>{description}</p>
    </div>
  )
}
export default SectionHeader
