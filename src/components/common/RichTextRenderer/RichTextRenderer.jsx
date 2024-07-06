import css from './RichTextRenderer.module.css'

const renderContent = (item) => {
  switch (item.type) {
    case 'h1':
      return <h1 className={css.heading1}>{item.content}</h1>
    case 'h2':
      return <h2 className={css.heading2}>{item.content}</h2>
    case 'h3':
      return <h3 className={css.heading3}>{item.content}</h3>
    case 'h4':
      return <h4 className={css.heading4}>{item.content}</h4>
    case 'h5':
      return <h5 className={css.heading5}>{item.content}</h5>
    case 'p':
      return <p className={css.paragraph}>{item.content}</p>
    case 'ul':
      return (
        <ul>
          {item.content.map((li, index) => (
            <li key={index}>{renderContent(li)}</li>
          ))}
        </ul>
      )
    case 'ol':
      return (
        <ol>
          {item.content.map((li, index) => (
            <li key={index}>
              <div className={css.dot} />
              {renderContent(li)}
            </li>
          ))}
        </ol>
      )
    case 'concept':
      return (
        <div>
          <strong>{item.term}</strong>: {item.definition}
        </div>
      )
    case 'blockquote':
      return <blockquote className={css.blockquote}>{item.content}</blockquote>
    case 'glossary':
      return (
        <div className={css.glossary}>
          <strong className={css.term}>{item.term}</strong>: {item.definition}
        </div>
      )
    default:
      return null
  }
}

const RichTextRenderer = ({ data }) => {
  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>{renderContent(item)}</div>
      ))}
    </div>
  )
}

export default RichTextRenderer
