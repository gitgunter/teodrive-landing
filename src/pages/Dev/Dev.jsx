import css from './Dev.module.css'
import RichTextRenderer from '@/components/common/RichTextRenderer/RichTextRenderer'
import data from '@config/capitulos/capitulo1.json'
import cap6 from '@config/capitulos/capitulo6.json'

function Dev () {
  return (
    <div className={css.prueba}>
      <RichTextRenderer data={cap6} />
    </div>
  )
}
export default Dev
