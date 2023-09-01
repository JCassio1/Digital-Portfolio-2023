'use client'
import { skillsData } from '../../../model/Data'

export default function Skills() {
  return (
    <section id='skills' className='mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8'>
      <div>
        <h2 className='mb-8 text-left text-neutral-800 font-bold sm:text-4xl'>Skills</h2>

        <div className='mt-8 grid grid-cols-1 gap-8'>
          <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
            {skillsData.map((skill, index) => (
              <li className='bg-white border border-black/[0.1] rounded-xl px-5 py-3' key={index}>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
