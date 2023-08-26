import Contact from './Components/Contact'
import Footer from './Components/Footer'
import HeroContainer from './Components/HeroContainer'
import Projects from './Components/Projects'
import Stack from './Components/Stack'
import WhatIDo from './Components/WhatIDo'

export default function App() {
  return (
    <div className='bg-bg-custom-white dark:bg-slate-900'>
      <div className="p-4 container m-auto dark:bg-slate-900 dark:text-white">
        <HeroContainer />
        <WhatIDo />
        <Stack />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}