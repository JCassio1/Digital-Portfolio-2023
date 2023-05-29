import chathubScreenshot from '../../../assets/projectAssets/chathub-screenshot.png'
import passwordCracker from '../../../assets/projectAssets/password cracker.png'
import iFoodScreenshot from '../../../assets/projectAssets/iFood-app-screenshot.png'
import { projectData } from '../../../model/DataStructure'
import ProjectCard from './ProjectCard'

const ProjectsSection = () => {
  const projects: projectData[] = [
    {
      title: 'ChatHub',
      description: 'Inspired by Whatsapp, I created a chat app with the twist that a pin is required before joining.',
      coverImage: chathubScreenshot,
      link: 'https://chathub-six.vercel.app/'
    },
    {
      title: 'iFood Ordering App',
      description: 'Being a foodie, I created a whitelabel app to allow users to order their favorite meals easily.',
      coverImage: iFoodScreenshot,
      link: 'https://github.com/JCassio1/iFood-ordering-javascript'
    },
    {
      title: 'Backend password cracker',
      description: 'I love challenging myself. I wanted to create a tool to crack passwords with my explanations.',
      coverImage: passwordCracker,
      link: 'https://github.com/JCassio1/Backend-Password-Cracker'
    }
  ]
  return (
    <section>
      <div className='mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8'>
        <h2 className='text-left text-neutral-800 font-bold sm:text-4xl'>Projects</h2>
        <p className='text-left mt-4 text-gray-500'>A few side projects I am currently working on</p>
        <div className='mx-auto max-w-lg text-center'></div>

        <div className='mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              projectTitle={project.title}
              projectDescription={project.description}
              projectImage={project.coverImage}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
