import NavBar from '../../Components/Layout/NavBar'
import Contacts from './Components/Contacts'
import Hero from './Components/Hero'
import ProjectsSection from './Components/ProjectsSection'
import SectionTitle from './Components/SectionTitle'

const Homepage = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <SectionTitle />
      <ProjectsSection />
      <Contacts />
    </>
  )
}

export default Homepage
