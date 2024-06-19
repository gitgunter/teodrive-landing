import { Link } from 'react-router-dom'
import TeodriveButton from '@/components/common/TeodriveButton/TeodriveButton'
import Wrap from '@/components/common/Wrap/Wrap'

import teodriveLogo from '@assets/images/teodrive_logo.svg'
import teodriveBrandName from '@assets/images/teodrive.svg'
import navbarConfig from '@config/headerConfig.json'

import css from './Header.module.css'

const Header = () => {
  return (
    <header className={css.Header}>
      <nav className={css.navbar}>
        <Wrap columnGap='0.625rem' alignItems='center'>
          <img src={teodriveLogo} style={{ height: '1.5rem' }} />
          <img src={teodriveBrandName} style={{ height: '1.25rem' }} />
        </Wrap>
        <Wrap columnGap='1.5rem' alignItems='center'>
          {navbarConfig.map((item, index) => (
            <NavItem key={index} label={item.title} url={item.link} />
          ))}
        </Wrap>
        <Wrap columnGap='0.5rem'>
          <TeodriveButton variant='secondary' size='sm'>
            Login
          </TeodriveButton>
          <TeodriveButton variant='primary' size='sm'>
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
