import { projectCard } from '../../../model/DataStructure'

const ProjectCard = ({ projectTitle, projectDescription, projectImage, link }: projectCard) => {
  return (
    <a href={link}>
      <div
        className='block rounded-xl p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-indigo-600/10'
        style={{ minHeight: '400px' }}
      >
        <img className='drop-shadow-2xl rounded-md' src={projectImage} alt='chathub screenshot' />

        <h3 className='mt-3 text-left text-lg font-bold'>{projectTitle}</h3>
        <p className='mt-2 text-left text-slate-600'>{projectDescription}</p>
      </div>
    </a>
  )
}

export default ProjectCard
