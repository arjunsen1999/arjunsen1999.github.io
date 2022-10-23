import React from 'react'
import Heading from '../../components/Heading/Heading'
import SkillsCSS from "./CSS/Skills.module.css"


export default function Skills() {
  return (
    <>
    <div className={SkillsCSS.container} id="skills">
    <div className={SkillsCSS.skillPage}>
        <Heading heading = "Skills" before = "My"/>

        <div className={SkillsCSS.skillContainer}>

            <div className={SkillsCSS.img} style = {{backgroundImage : `url("https://storyset.com/illustration/code-typing/pana/animate?share=52464")`}}></div>
            <div className={SkillsCSS.img}></div>
            <div className={SkillsCSS.img}></div>
            <div className={SkillsCSS.img}></div>

        </div>

    </div>
    </div>
    </>
  )
}
