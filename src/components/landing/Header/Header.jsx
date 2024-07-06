import TeodriveButton from '@/components/common/TeodriveButton/TeodriveButton'
import Wrap from '@/components/common/Wrap/Wrap'

import teodriveLogo from '@assets/images/teodrive_logo.svg'
import teodriveBrandName from '@assets/images/teodrive.svg'
import navbarConfig from '@config/headerConfig.json'

import css from './Header.module.css'
import { Link } from 'react-router-dom'

const Header = () => {
  const redirectToLogin = () => {
    window.location.href = 'https://app.teodrive.com/login'
  }

  const redirectToRegister = () => {
    window.location.href = 'https://app.teodrive.com/register'
  }

  return (
    <header className={css.Header}>
      <nav className={css.navbar}>
        <Wrap columnGap='0.625rem' alignItems='center'>
          <img src={teodriveLogo} style={{ height: '1.5rem' }} />
          <img src={teodriveBrandName} style={{ height: '1.25rem' }} />
        </Wrap>
        <Wrap columnGap='1.5rem' alignItems='center'>
          {navbarConfig.map((item, index) => (
            // <NavItem key={index} label={item.title} url={item.link} />
            <ScrollTo key={index} label={item.title} offset={item.offset} />
          ))}
          <NavItem label='Soporte' url='https://soporte.teodrive.com/' />
        </Wrap>
        <Wrap columnGap='0.5rem'>
          <TeodriveButton variant='secondary' size='sm' onClick={redirectToLogin}>
            Login
          </TeodriveButton>
          <TeodriveButton variant='primary' size='sm' onClick={redirectToRegister}>
            Registro
          </TeodriveButton>
        </Wrap>
      </nav>
    </header>
  )
}
export default Header

export const NavItem = ({ label, url }) => {
  return <Link to={url} className={css.NavItem}>{label}</Link>
}

const ScrollTo = ({ offset, label }) => {
  const handleClick = () => {
    window.scrollTo({
      top: offset,
      behavior: 'smooth'
    })
  }

  return (
    <div className={css.NavItem} onClick={handleClick}>
      {label}
    </div>
  )
}
