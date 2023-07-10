import ReviewCards from './ReviewCards'

const Contacts = () => {
  return (
    <section id='contactSection'>
      <div className='mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8'>
        <h2 className='text-left text-neutral-800 font-bold sm:text-4xl'>Contacts</h2>
        <p className='text-left mt-5 text-gray-500'>Reach out and let's form a synergy</p>

        <h4 className='mt-10 text-left text-sm text-neutral-800 font-bold sm:text-xl'>Said about Joselson</h4>

        <div className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
          <ReviewCards
            reviewComments={
              'Curious and eager to learn, Joselson is always finding ways to improve or develop his skills. Combined with his strong methodical and structured approach, this thirst for feedback allows Joselson to consistently deliver high quality output.'
            }
            reviewBy={"Costain's Digital Delivery lead"}
            reviewTextColor={'text-zinc-50'}
            reviewerTextColor={'text-neutral-400'}
            cardBgColor={'bg-indigo-600'}
          />

          <ReviewCards
            reviewComments={
              'As a team we have benefited greatly from Joselson pro-active and detailed approach to project delivery, ranging from everything from requirements gathering to coding.'
            }
            reviewBy={"Costain's Digital Requirements & Revenue Manager"}
            reviewTextColor={'text-zinc-50'}
            reviewerTextColor={'text-neutral-800'}
            cardBgColor={'bg-orange-600'}
          />

          <ReviewCards
            reviewComments={
              "In my experience from managing and mentoring Joselson it's clear that he has the correct mindset for software development. He is a driven engineer that is able to focus both on the technical tasks assigned, as well as the project as a whole, and that combination improves the quality of the work he produces."
            }
            reviewBy={'Principal Software Engineer at Costain'}
            reviewTextColor={'text-zinc-50'}
            reviewerTextColor={'text-neutral-800'}
            cardBgColor={'bg-green-600'}
          />
        </div>

        <p className='text-left text-gray-500' style={{ marginTop: '70px' }}>
          Do you have a job opportunity or anything you would like to discuss? Feel free to reach me at{' '}
          <a href='mailto:joselsondias@hotmail.com'>
            <span className='font-bold text-indigo-600'>joselsondias@hotmail.com.</span>
          </a>{' '}
          Alternatively, you can also find me on{' '}
          <a href='https://github.com/JCassio1'>
            <span className='font-bold text-orange-600'>Github</span>
          </a>{' '}
          and{' '}
          <a href='https://www.linkedin.com/in/joselsondias/'>
            <span className='font-bold text-blue-600'>Linkedin</span>
          </a>
          .
        </p>
      </div>
    </section>
  )
}

export default Contacts
