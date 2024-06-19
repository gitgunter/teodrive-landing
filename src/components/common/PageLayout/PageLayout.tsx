import { Helmet } from 'react-helmet-async'

import css from './PageLayout.module.css'

interface PageLayoutProps {
  title?: string;
  description?: string;
  canonical?: string;
  children?: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({
  title,
  description = 'Aspira a ser un conductor profesional.',
  canonical = '',
  children
}) => {
  return (
    <section className={css.PageLayout}>
      <Helmet>
        <title>{title}</title>
        <meta name='description' content={description} />
        <link rel='canonical' href={`https://app.teodrive.com/${canonical}`} />
      </Helmet>
      <div className={css.pageContent}>{children}</div>
    </section>
  )
}
export default PageLayout
