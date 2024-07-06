// @ts-check
import Hero from '@components/landing/Hero/Hero'
import Header from '@components/landing/Header/Header'
import SectionLayout from '@components/landing/SectionLayout/SectionLayout'
import useLocomotiveScroll from '@/hooks/useLocomotiveScroll'
import SectionHeader from '@components/landing/SectionHeader/SectionHeader'
import DashboardMockup from '@components/landing/DashboardMockup/DashboardMockup'
import Pricing from '@components/landing/Pricing/Pricing'
import Footer from '@components/landing/Footer/Footer'

import css from './Landing.module.css'
import useScrollReset from './hooks/useScrollReset'
import FAQ from '@components/landing/FAQ/FAQ'
import TemarioDashboardPreview from './components/landing/TemarioDashboardPreview/TemarioDashboardPreview'

function Landing () {
  const scrollRef = useLocomotiveScroll()

  useScrollReset()

  return (
    <main className={css.Landing} ref={scrollRef}>
      <Header />
      <section className={css.heroSection}>
        <Hero />
      </section>
      <SectionLayout>
        <SectionHeader
          caption='Temario'
          title='Expande tus conocimientos'
          description='Accede a un temario detallado que te guía paso a paso hacia el dominio de cada capítulo.'
        />
        <DashboardMockup url='temario'>
          <TemarioDashboardPreview />
        </DashboardMockup>
      </SectionLayout>
      <SectionLayout>
        <SectionHeader
          caption='Exámenes'
          title='Pon a prueba tu aprendizaje'
          description='Evalúa tus conocimientos con exámenes diseñados para medir y fortalecer tu comprensión.'
        />
        <DashboardMockup url='examenes'>
        </DashboardMockup>
      </SectionLayout>
      <SectionLayout>
        <SectionHeader
          caption='Funciones'
          title='Explora nuestras funcionalidades destacadas'
          description='Conoce nuestras principales funcionalidades que optimizan y facilitan tu experiencia.'
        />
      </SectionLayout>
      <SectionLayout>
        <SectionHeader
          title='Precios'
          description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et qui dolores ut id iusto possimus quibusdam sapiente quas dolorum cum.'
        />
        <Pricing />
      </SectionLayout>
      <SectionLayout>
        <SectionHeader
          title='Preguntas frecuentes'
          description='Todo lo que necesitas saber.'
        />
        <FAQ />
      </SectionLayout>
      <Footer />
    </main>
  )
}

export default Landing
