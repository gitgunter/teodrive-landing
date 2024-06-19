import css from './PageNavigationBar.module.css'

interface PageNavigationBarProps {
  title?: string,
  caption?: string,
  number?: number,
  breadcrumbs?: string[],
  onGoBack?: () => void,
  children?: React.ReactNode
}

const PageNavigationBar: React.FC<PageNavigationBarProps> = ({ title, caption, number, onGoBack, children }) => {
  return (
    <div className={css.pageNavigationBar}>
      {/* {breadcrumbs && <Breadcrumbs onGoBack={onGoBack} paths={breadcrumbs} />} */}
      <div
        style={onGoBack && { paddingTop: '0.625rem' }}
        className={css.headerWrapper}
      >
        <div className={css.titleAndCaption}>
          <h1 className={css.title}>
            {title} {(number !== undefined && number > 0) && <span className={css.number}>{number}</span>}
          </h1>
          {caption && <p className={css.caption}>{caption}</p>}
        </div>
        <div className={css.actions}>{children}</div>
      </div>
    </div>
  )
}
export default PageNavigationBar
