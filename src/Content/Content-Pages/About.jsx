import React from 'react'
import Box from '../../components/aboupage-project-description/Box'
import Heading from '../../components/Heading/Heading'
import AboutCSS from "./CSS/About.module.css"

export default function About() {
  const handleClick = () => {
    window.open(
      "https://drive.google.com/file/d/1D9ouBIhzo9DdPC5jUic79cpiQYtxJ5DZ/view?usp=share_link"
    );
  };
  return (
    <>
      <div className={AboutCSS.container} id="about">

        <div className={AboutCSS.aboutPage}>
            <Heading  heading = "About" after = "Me"/>

            <div className={AboutCSS.content}>
                <div className={AboutCSS.profileDes}>
                <h1 className={AboutCSS.title}>Hi, I'm <span>Arjun Sen</span></h1>
                <p className={AboutCSS.aboutMe}> <span className='entiti'>&#60; &#112; &#62;</span> An aspiring Full-Stack Web Developer with a strong interest in projects requiring conceptual and analytical thinking. Self-motivated and hardworking fresher seeking for an opportunity to work a challenging environment to prove my skills and utilize my knowledge & intelligence in the growth of the organization. <span className='entiti'>&#60; &#8725; &#112; &#62;</span></p>
                <a
                target="_blank"
                href="arjun_sen_resume.pdf"
                download="arjun_sen_resume.pdf"
                onClick={handleClick}
              >
                <button className={AboutCSS.cv}>Download CV</button>
              </a>
                </div>
                <div className={AboutCSS.projectDes}>
                  <Box count="4" title = "Total Project"/>
                  <Box count="2" title = "Group Project"/>
                  <Box count="2" title = "Individual Project"/>
                </div>
            </div>
        </div>

      </div>
    </>
  )
}
