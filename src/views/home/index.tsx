import HeroSection from 'components/HeroSection'
import JobSection from 'components/JobSection'

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
