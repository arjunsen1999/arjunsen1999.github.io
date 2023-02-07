import React from 'react'
import ContactCSS from "./CSS/Contact.module.css"
import Heading from '../../components/Heading/Heading'
import { EmailIcon, PhoneIcon, WarningIcon  } from '@chakra-ui/icons'
import { FaMapMarkerAlt, FaLocationArrow, FaGithub, FaLinkedin, FaGithubSquare, FaPeriscope } from "react-icons/fa";
import { IconButton, useToast } from '@chakra-ui/react';

export default function Contact() {
  let toast = useToast();
  const popout = () =>{
    return toast({
      title: 'Successfully Send',
      description: "Thank you",
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
  }
  const handleClick = () => {
    window.open(
      "https://github.com/arjunsen1999"
    );
  };
  const linkedinClick = () =>{
    window.open(
      "https://www.linkedin.com/in/arjun-sen-195bb8210/"
    );
  }
  return (
    <>
      <div className={ContactCSS.container} id="contact">

<div className={ContactCSS.ContactPage}>
    <Heading  heading = "Contact" after = "Me"/>

    <div className={ContactCSS.content}>
          <div className={ContactCSS.contactInfo}>
              <h1>CONTACT INFO</h1>
              <ul>
                <li><span style={{color:"#E2AE1B"}}><IconButton
                      variant='outline'
                      colorScheme='blackAlpha'
                      aria-label='Call Sage'
                      fontSize='20px'
                      borderRadius={"50%"}
                      icon={<EmailIcon />}
                    /></span> <span>arjunsen717@gmail.com</span></li>
                <li onClick={handleClick}><span style={{color:"#E2AE1B"}}> <IconButton
                      variant='outline'
                      colorScheme='blackAlpha'
                      aria-label='Call Sage'
                      fontSize='20px'
                      borderRadius={"50%"}
                      icon={<FaGithubSquare />}
                    /></span> <span>GitHub</span></li>
                <li onClick={linkedinClick}><span style={{color:"#E2AE1B"}}> <IconButton
                      variant='outline'
                      colorScheme='blackAlpha'
                      aria-label='Call Sage'
                      fontSize='20px'
                      borderRadius={"50%"}
                      icon={<FaLinkedin />}
                    /></span> <span>Linkedin</span></li>
                <li ><span style={{color:"#E2AE1B"}}> <IconButton
                      variant='outline'
                      colorScheme='blackAlpha'
                      aria-label='Call Sage'
                      fontSize='20px'
                      borderRadius={"50%"}
                      icon={<PhoneIcon />}
                    /></span> <span>+91 9851455712</span></li>
                <li><span style={{color:"#E2AE1B"}}>     <IconButton
                      variant='outline'
                      colorScheme='blackAlpha'
                      aria-label='Call Sage'
                      fontSize='20px'
                      borderRadius={"50%"}
                      icon={<FaPeriscope />}
                    /></span> <span>Raniganj, West Bengal, India</span></li>
              </ul>
          </div>
          <form className={ContactCSS.emailForm} action="https://formspree.io/f/xeqwokjq" method='POST' onSubmit={popout}>
            <input type="text" name="name" id="name" placeholder='Name' required/>
            <input type="email" name="email" id="email" placeholder='Email' required/>
            {/* <input type="text" name="projectName" id="project" placeholder='Project Name' /> */}
            <textarea type = "text" name = "message" id = "message" placeholder='Message' required/>
            <button className={ContactCSS.send}>Send <FaLocationArrow /></button>
          </form>
    </div>
 
</div>

</div>
    </>
  )
}
