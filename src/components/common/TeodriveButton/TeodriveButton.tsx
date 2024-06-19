import css from './TeodriveButton.module.css'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const TeodriveButton: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className,
  ...props
}) => {
  const classes = `${css.TeodriveButton} ${css[variant]} ${css[size]} ${className ?? ''}`

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}

export default TeodriveButton
