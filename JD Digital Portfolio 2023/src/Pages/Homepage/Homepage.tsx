import NavBar from '../../Components/Layout/NavBar'
import Contacts from './Components/Contacts'
import Hero from './Components/Hero'
import ProjectsSection from './Components/ProjectsSection'
import SectionTitle from './Components/SectionTitle'
import Skills from './Components/Skills'

const Homepage = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <SectionTitle />
      <ProjectsSection />
      <Skills />
      <Contacts />
    </>
  )
}

export default Homepage
