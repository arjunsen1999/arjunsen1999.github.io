import { Avatar, Box, Button, IconButton, Image, Stack, Text, WrapItem } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import CardsCSS from "./Cards.module.css"
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import Skillcons from "../SkillIcons/SkillIcons"
// import Bounce from 'react-reveal/Bounce';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// 
export default function Cards(props) {
    // let icons = [1,2,3,4,5];
    // useEffect(() =>{
    //     AOS.init({duration : 1000});
    // }, [])
    // data-aos="fade-up"
  return (
    <>
    <div className={CardsCSS.container} >
        <div className={CardsCSS.bgImg} style = {{backgroundImage : `url(${props.poster})`}}></div>
        <h1 style={{textAlign : "center", fontSize : "28px", color:"black", marginBottom : "10px"}}>{props.name}</h1>
        <p style={{color : "black",marginBottom : "20px"}} className = {CardsCSS.description}>{props.description}</p>
        <div className={CardsCSS.box}>
            <div className={CardsCSS.icons}>
                    {
                        props.techStack.map((ele) =>{
                            console.log(ele)
                            return <Skillcons img = {ele.img} name={ele.title}/>                        
                        })
                    }
          
            </div>
            <div className={CardsCSS.buttorns}>
                <a target={"_blank"} href={props.github}><button>GitHub</button></a>
                <a target={"_blank"} href={props.live}><button>LIVE</button></a>
            </div>
        </div>
    </div>
    </>
  )
}
