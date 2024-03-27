import { HeroSection, JobSection } from 'components'

function HomeView() {
  return (
    <section className='flex h-full w-full  flex-col px-8 '>
      <HeroSection />
      <div className='mb-16 mt-12 w-full'>
        <JobSection />
      </div>
    </section>
  )
}

export default HomeView
