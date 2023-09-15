import React from 'react'
import Heading from '../../components/Heading/Heading'
import SkillIcons from '../../components/SkillIcons/SkillIcons'
import SkillsCSS from "./CSS/Skills.module.css"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { HiBolt } from "react-icons/hi2";
export default function Skills() {

  return (
    <>
    <div className={SkillsCSS.container} id="skills">
    <div className={SkillsCSS.skillPage}>
        <Heading heading = "Skills" before = "My"/>

        <div className={SkillsCSS.skillContainer}>

            <div className={SkillsCSS.img} style = {{backgroundImage : `url("./images/Programming.gif")`, backgroundRepeat:"no-repeat", backgroundPosition : "center"}} >
            </div>
            <div className={SkillsCSS.img}>
              <h1 className={SkillsCSS.heading}>Full Stack Development</h1>

              <div className={SkillsCSS.skillIcons}>
                  <SkillIcons name="HTML" img = "https://cdn-icons-png.flaticon.com/512/1051/1051277.png"/>
                  <SkillIcons name="CSS" img = "https://cdn-icons-png.flaticon.com/512/732/732190.png"/>
                  <SkillIcons name="JavaScript" img = "https://cdn-icons-png.flaticon.com/512/5968/5968292.png"/>
                  <SkillIcons name="Bootstrap" img = "https://cdn-icons-png.flaticon.com/512/5968/5968672.png"/>
                  <SkillIcons name="React" img = "https://cdn-icons-png.flaticon.com/512/1126/1126012.png"/>
                  <SkillIcons name="Nuxt.js" img = "https://upload.wikimedia.org/wikipedia/commons/4/45/NuxtJS_Logo.png"/>
                  <SkillIcons name="Redux" img = "data:image/png;base64,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"/>
                  <SkillIcons name="ChakraUI" img = "data:image/jpeg;base64,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"/>
                  <SkillIcons name="NodeJS" img = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png"/>

                  <SkillIcons name="ExpressJS" img = "https://assets.website-files.com/61ca3f775a79ec5f87fcf937/6202fcdee5ee8636a145a41b_1234.png"/>

                  <SkillIcons name="MongoDB" img = "./images/mongodb.png"/>
                  <SkillIcons name="Git" img = "./images/git1.png"/>
              </div>

              <ul className={SkillsCSS.desc}>
                <li> <span><HiBolt/></span> Develop highly interactive User Interfaces and Backend for web applications</li>
                <li><span><HiBolt/></span> Building responsive website front end using ReactJS</li>
                <li><span><HiBolt/></span>Creating application backend in Node, Express,</li>
              </ul>

            </div>
            

            <div className={SkillsCSS.img}>
              <h1 className={SkillsCSS.heading}>Cloud Infra-Architecture</h1>

              <div className={SkillsCSS.skillIcons}>
                  <SkillIcons name="Netlify" img = "https://seeklogo.com/images/N/netlify-logo-BD8F8A77E2-seeklogo.com.png"/>
                  <SkillIcons name="Heroku" img = "https://cdn.iconscout.com/icon/free/png-256/heroku-2752161-2284978.png"/>
                  <SkillIcons name="Firebase" img = "./images/fire.png"/>
                  <SkillIcons name="Vercel" img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAAVFBMVEUAAAD////Pz8/Z2dn8/PyHh4eoqKj39/f09PRcXFzf39/x8fEXFxdzc3MeHh5HR0e8vLwmJibo6OhMTEzDw8OhoaEsLCwQEBBqamplZWU6OjqPj4/ld+a7AAABRklEQVRoge3YW5KCMBCFYXsIdxUNV3X/+xwRI05IBq1KNy/n28BfUrTHcrcDAAAAAAAAANhcP/SbdAd12aQbUbRFNiZFsXx2r4lI78W7CY0S6ew1fXTTq3C3oUkjm83vL9VIUS7aLV7dQjJ7oNlBLnss56wqj2Ld5PmUpyctdktVRu+ySqh7or9OMtmBbDKvVrToiuxSvMiSxC6dtaOrz+zd1pElarmzderspty31Lx9ZcwU9y7lzk874t2lwttl3aXY+ZQnjLd03yFfVxHjLrX+j6sU3y1V7hsy2G7J3iEb0y75b8jguaXlDtlYdsm1QzaGW+pcO2TTXfBu8s9XhsHwG6/OVqujrA7cbdabD4F3af2GzKMOe0v+HbIF3aXbBy+VcQuX7cv13EsZ7t+l5ItswP8eup/vhP/yAAAAAAAAAAAAAE6/cKgJruXw/ucAAAAASUVORK5CYII="/>
              </div>

              <ul className={SkillsCSS.desc}>
                <li><span><HiBolt/></span>Experience working on multiple cloud platforms</li>
                <li><span><HiBolt/></span> Experience hosting and managing websites</li>
                <li><span><HiBolt/></span>Experience with Continuous Integration</li>
              </ul>

            </div>
            <div className={SkillsCSS.img} style = {{backgroundImage : `url("./images/data.gif")`, backgroundRepeat:"no-repeat", backgroundPosition : "center"}}></div>


        </div>

    </div>
    </div>
    </>
  )
}
