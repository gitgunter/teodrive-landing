import Wrap from '@/components/common/Wrap/Wrap'

import teodriveBrandLogo from '@assets/images/teodriveBrandLogo-black.svg'
import teodriveAppLogo from '@assets/images/teodriveIcon.svg'
import appleLogo from '@assets/images/Apple_logo.svg'
import androidLogo from '@assets/images/Android_Robot.svg'

import css from './Footer.module.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className={css.Footer}>
      <div className={css.wrapper}>
        <div className={css.footerContent}>
          <div>
            <img src={teodriveBrandLogo} alt='Teodrive Brand Logo' />
            <p className={css.footerLegend}>
              <span>Aspira a ser un</span>
              <span>conductor profesional.</span>
            </p>
          </div>
          <div className={css.footerNav}>
            <span className={css.navTitle}>Compañía</span>
            <ul className={css.navList}>
              <li className={css.navListItem}>Sobre nosotros</li>
              <li className={css.navListItem}>Contacto</li>
              <li className={css.navListItem}>Precios</li>
              <li className={css.navListItem}>Soporte</li>
            </ul>
          </div>
          <div className={css.footerNav}>
            <span className={css.navTitle}>Legal</span>
            <ul className={css.navList}>
              <Link to='/legal/terminos-de-servicio' preventScrollReset={true} className={css.navListItem}>Términos de Servicio</Link>
              <Link to='/legal/politica-de-privacidad' preventScrollReset={true} className={css.navListItem}>Política de privacidad</Link>
            </ul>
          </div>
          <div>
            <div className={css.upcomingAppMessage}>
              <img
                src={teodriveAppLogo}
                alt='Teodrive App Logo'
                className={css.teodriveAppLogo}
              />
              <Wrap flexDirection='column' width='100%' rowGap='0.375rem'>
                <p className={css.title}>Teodrive App</p>
                <Wrap
                  alignItems='flex-center'
                  columnGap='0.375rem'
                >
                  <p className={css.caption}>Próximamente en</p>
                  <img src={appleLogo} className={css.brandLogo} />
                  <img src={androidLogo} className={css.brandLogo} />
                </Wrap>
              </Wrap>
            </div>
          </div>
        </div>
        <div className={css.footerBottom}>
          <p className={css.copyright}>
            © 2024 Teodrive. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
export default Footer
