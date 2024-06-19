import { Bookmark02Icon, Copy01Icon } from '@icons'

import css from './DashboardMockup.module.css'

interface DashboardMockupProps {
  url?: string
  children?: React.ReactNode
}

const DashboardMockup: React.FC<DashboardMockupProps> = ({ url, children }) => {
  return (
    <div className={css.DashboardMockup}>
    <div className={css.dashboardHeader}>
      <div className={css.dotWrapper}>
        <div className={css.dot} />
        <div className={css.dot} />
        <div className={css.dot} />
      </div>
      <span className={css.url}>
        app.teodrive.com/<span className={css.highlighted}>{url}</span>
      </span>
      <div className={css.actions}>
        <Copy01Icon color='#555555' size={20} className={css.actionBtn} />
        <Bookmark02Icon color='#555555' size={20} className={css.actionBtn} />
      </div>
    </div>
    <div className={css.dashboardContent}>
      {children}
    </div>
  </div>
  )
}
export default DashboardMockup
