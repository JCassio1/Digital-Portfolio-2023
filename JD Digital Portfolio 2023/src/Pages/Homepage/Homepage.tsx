import NavBar from '../../Components/Layout/NavBar'
import Contacts from './Components/Contacts'
import Footer from './Components/Footer'
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
      <Footer />
    </>
  )
}

export default Homepage
