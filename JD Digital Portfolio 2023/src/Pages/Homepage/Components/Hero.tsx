import profilePicture from '../../../assets/Joselson_dias_profile.jpg'

const Hero = () => {
  return (
    <section>
      <div className='mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8'>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16'>
          <div className='relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full shadow-lg shadow-indigo-500/70'>
            <img alt='profile picture' src={profilePicture} className='absolute inset-0 h-full w-full object-cover' />
          </div>

          <div>
            <h3 className='text-3xl text-left font-bold sm:text-4xl'>
              Hello! 👋 I'm Joselson, a software engineer based in the U.K.
            </h3>

            <p className='mt-4 text-left text-gray-600'>
              I have a passion for developing applications with clean code, focusing on creating simple and engaging
              user experiences.
            </p>

            <p className='mt-4 text-left text-gray-600'>
              Throughout my career, I have had the opportunity to collaborate with diverse teams, ranging from small
              specialized groups to cross-functional teams across various business units. This experience has shaped my
              working style, emphasizing flexibility, effective communication, and collaboration.
            </p>

            <p className='mt-4 text-left text-gray-600'>
              I am currently looking for a new role as a full-stack developer. Hire me?
            </p>

            <a
              href='#'
              className='text-left mt-8 inline-block rounded bg-indigo-600 px-12 py-3 mr-4 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400'
            >
              Peek my LinkedIn
            </a>
            <a
              href='#'
              className='text-left mt-8 inline-block rounded bg-neutral-900 px-12 py-3 text-sm font-medium text-white transition hover:bg-neutral-700 focus:outline-none focus:ring focus:ring-yellow-400'
            >
              Crawl my Github
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
