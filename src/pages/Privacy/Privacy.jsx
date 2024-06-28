import { Helmet } from 'react-helmet-async'

import Wrap from '@/components/common/Wrap/Wrap'
import { ArrowLeft02 } from '@icons'

import css from './Privacy.module.css'
import useScrollReset from '@/hooks/useScrollReset'

function Privacy () {
  useScrollReset()

  return (
    <main>
      <Helmet>
        <link rel='canonical' href='https://teodrive.com/legal/politica-de-privacidad' />
        <title>Legal - Política de privacidad - Teodrive</title>
        <meta name='description' content='' />
        <meta property="analytics-track" content="Legal - Legal - Política de privacidad - Teodrive" />
        <meta property="article:author" content="" />
        <meta property="og:site_name" content="Teodrive Legal" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Legal - Política de privacidad - Teodrive" />
        <meta property="og:description" />
        <meta property="og:locale" content="en-US" />
        <meta name="twitter:title" content="Teodrive Legal - Legal - Política de privacidad - Teodrive" />
        <meta name="twitter:description" />
      </Helmet>
      <div className={css.Privacy}>
        <div className={css.legalContent}>
          <div className={css.legalHeader}>
            <button type='button' className={css.backBtn}><ArrowLeft02 size={20} /> Volver</button>
            <Wrap flexDirection='column'>
              <h1 className={css.legalTitle}>Política de privacidad</h1>
              <p className={css.legalLastUpdated}>Última actualización: 26 de junio de 2024</p>
            </Wrap>
          </div>
          <InfoSection
            title='1. Aceptación de Términos y Condiciones'
            content='Al utilizar los servicios o contratar los planes formativos en Teodrive.com, usted acepta los términos y condiciones detallados en este documento.'
          />
          <InfoSection
            title='2. Declaración de Mayoría de Edad y Capacidad de Contratación'
            content='Al hacer uso de los servicios, usted declara ser mayor de edad y tener la capacidad legal para contratar.'
          />
          <InfoSection
            title='3. Condiciones de Uso Específicas'
            content='La utilización de servicios específicos está sujeta a la aceptación de condiciones de uso adicionales antes de acceder a ellos.'
          />
          <InfoSection
            title='4. Política de Privacidad y Protección de Datos'
            content='Los datos personales proporcionados se manejarán conforme a la Ley Orgánica 15/1999 sobre Protección de Datos. Teodrive se reserva el derecho de comunicar datos a empresas del grupo Teodrive. Es responsabilidad del usuario mantener actualizada su información personal.'
          />
          <InfoSection
            title='5. Ejercicio de Derechos sobre Datos Personales'
            content='Los usuarios pueden ejercer sus derechos de acceso, rectificación, cancelación y oposición enviando un correo electrónico a soporte.teodrive@gmail.com.'
          />
          <InfoSection
            title='6. Propiedad Intelectual'
            content='Teodrive posee todos los derechos sobre el diseño, contenido y código fuente del sitio web. Queda prohibida la reproducción, distribución, almacenamiento o comunicación no autorizada de los servicios y contenidos de Teodrive.com. La detección de falsificación o copia dará lugar a acciones legales correspondientes.'
          />
          <InfoSection
            title='7. Acceso a Contenidos'
            content='Teodrive ofrece distintos niveles de acceso (Gratis, Básico y Premium) con diferentes permisos.
No se garantiza la total actualización de los exámenes, pero se compromete a realizar actualizaciones mensuales.'
          />
          <InfoSection
            title='8. Precios y Pagos'
            content='Los usuarios pueden realizar pagos a través de transferencia bancaria (SINPE) o Paypal.
Teodrive no almacena datos bancarios después de la compra.
La suspensión de exámenes del Consejo de Seguridad Vial no otorgará derecho a reembolso.'
          />
          <InfoSection
            title='9. Códigos de Descuento'
            content='Los usuarios pueden obtener descuentos con códigos proporcionados por socios.
El descuento es único, no acumulable ni transferible.'
          />
          <InfoSection
            title='10. Responsabilidad de Teodrive'
            content='Teodrive no se responsabiliza de opiniones y comentarios de usuarios en foros o medios.
No asume responsabilidad por acciones futuras basadas en el mal uso del sitio web.'
          />
          <InfoSection
            title='11. Política de Reembolsos'
            content='Se aceptan reclamos de reembolso dentro de las 24 horas por errores de pago o cancelaciones.
No se realizarán reembolsos si hay registros de actividad sobre el servicio.'
          />
          <InfoSection
            title='12. Modificación de Condiciones de Uso'
            content='Teodrive se reserva el derecho de modificar estas condiciones, recomendándose a los usuarios revisar periódicamente.'
          />
        </div>
      </div>
    </main>
  )
}
export default Privacy

const InfoSection = ({ title, content }) => {
  return (
    <div className={css.InfoSection}>
      <h3 className={css.title}>{title}</h3>
      <p className={css.content}>{content}</p>
    </div>
  )
}
