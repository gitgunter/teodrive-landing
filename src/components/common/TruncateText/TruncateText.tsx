import css from './TruncateText.module.css'

interface TruncateTextProps {
  className?: string;
  children: React.ReactNode;
}

const TruncateText: React.FC<TruncateTextProps> = ({ className, children }) => {
  const combinedClassName = `${css.TruncateText} ${className || ''}`

  return (
    <p className={combinedClassName}>
      {children}
    </p>
  )
}

export default TruncateText
