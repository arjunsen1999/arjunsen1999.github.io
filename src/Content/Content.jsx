import React, { useContext } from 'react'
import About from './Content-Pages/About';
import Contact from './Content-Pages/Contact';
import Home from './Content-Pages/Home';
import Project from './Content-Pages/Project';
import ContentCSS from "./Content.module.css";
import { HamburgerIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import { FontentAPI } from '../ContextApp/Fontent';
import Skills from './Content-Pages/Skills';
import Github from '../components/github/Github';
import AOS from "aos";
import "aos/dist/aos.css";

export default function Content() {
  React.useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);
  let {showSideBarClick} = useContext(FontentAPI);
  return (
    <>
        <div className={ContentCSS.container}>
        <HamburgerIcon  id={ContentCSS.burger} color="black" onClick={() =>{showSideBarClick()}}/>
            <Home />
            <About />
            <Skills />
            <Github />
            <Project />
            <Contact />
        </div>
    </>
  )
}
