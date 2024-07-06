import TruncateText from '@/components/common/TruncateText/TruncateText'
import CapituloSidebar from '../CapituloSidebar/CapituloSidebar'
import css from './TemarioDashboardPreview.module.css'

const TemarioDashboardPreview = () => {
  return (
    <div className={css.TemarioDashboardPreview}>
      <div className={css.test2}>
        <div className={css.sidebar}><CapituloSidebar /></div>
        <div className={css.content}>content</div>
        <TruncateText className={css.estoydone}>Pruebaaaaaaaaa</TruncateText>
      </div>
    </div>
  )
}
export default TemarioDashboardPreview
