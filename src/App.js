import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Header from './Components/Header'
import HeroContainer from './Components/HeroContainer'
import Projects from './Components/Projects'
import Stack from './Components/Stack'
import WhatIDo from './Components/WhatIDo'

export default function App() {
  return (
    <div className="p-4">
      {/* <Header /> */}
      <HeroContainer />
      <WhatIDo />
      <Stack />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}