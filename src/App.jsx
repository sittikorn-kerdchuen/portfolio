import { useState } from 'react'
import './App.css'
import { Link, Element } from 'react-scroll';
// components
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skill from './components/Skill'
import Project from './components/Project'
import Contact from './components/Contact'
import AboutMe from './components/AboutMe';

function App() {
  const [dark, setDark] = useState(false)

  const isDark = () => {
    setDark(prev => !prev)
    console.log(`DarkTheme is running: ${dark}`)
  }

  return (
    <div className='bg-[url("https://images.unsplash.com/photo-1604147706283-d7119b5b822c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80")] overflow-hidden'>
     
      <Navbar isDark={isDark} dark={dark} />

      <Element name="home">
        <Hero dark={dark} />
      </Element>

      <Element name="about">
        <AboutMe dark={dark} />
      </Element>


      <Element name='skill'>
        <Skill dark={dark} />
      </Element>

      <Element name='project'>
        <Project dark={dark} />
      </Element>

      <Element name = 'contact'>
        <Contact dark={dark} />
      </Element>
    </div>
  )
}

export default App
