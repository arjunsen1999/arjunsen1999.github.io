import React from 'react'
import HomeCSS from "./CSS/Home.module.css";
import Type from "./Type"


export default function Home() {

  return (
    <>
        <div className={HomeCSS.container} id = "home">
            <div className={HomeCSS.content}>
                <h2 className={HomeCSS.greeting}>HI THERE!</h2>
                <h1 className={HomeCSS.title}>I'M <span>Arjun Sen</span> <Type/></h1>
                <p className={HomeCSS.description} data-aos="fade-left"> <span className='entiti'>&#60; &#112; &#62;</span> An aspiring Full-Stack Web Developer with a strong interest in projects requiring conceptual & analytical thinking. Self- motivated and hardworking fresher. <span className='entiti'>&#60; &#8725; &#112; &#62;</span></p>
                <a href="#about"><button className={HomeCSS.button}>About Me</button></a>
            </div>
        </div>
    </>
  )
}
