import React from 'react'
import CarouselCSS from "./Carousel.module.css"
import Cards from '../Cards/Cards';

export default function Carousel() {
  let projects = [
    {
      poster : "./images/nextfood.png",
      name : "Next-Food.com",
      description : "Next-Food.com is a E-commerce multicategory online shopping platform. The platform offers consumers a convenience of shopping from home, with a promise of great savings, free home delivery and no minimum order value.",
      techStack : [
        {img : "https://cdn-icons-png.flaticon.com/512/1126/1126012.png", title : "React"},
        {img : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png", title : "Node"},
        {img : "https://assets.website-files.com/61ca3f775a79ec5f87fcf937/6202fcdee5ee8636a145a41b_1234.png", title : "Express"},
        {img : "./images/mongodb.png", title : "MongoDB"}
      ],
      github : "https://github.com/Dhamisir/Freshly-Website-Clone",
      live : "https://sophisticated-legs-486.netlify.app/"
    },
    {
      poster : "./images/jioMart.png",
      name : "jio-mart.com",
      description : "jiomart.com is a E-commerce multicategory online shopping platform. The platform offers consumers a convenience of shopping from home, with a promise of great savings, free home delivery and no minimum order value.",
      techStack : [
        {img : "https://cdn-icons-png.flaticon.com/512/174/174854.png", title : "HTML 5"},
        {img : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png", title : "CSS 3"},
        {img : "https://cdn.cdnlogo.com/logos/j/69/javascript.svg", title : "JavaScript"},
        {img : "https://avatars.githubusercontent.com/u/2918581?s=280&v=4", title : "Bootstrap"},
      ],
      github : "https://github.com/adityabarshilia/honorable-furniture-4728",
      live : "https://jio-mart-arjunsen.netlify.app/"
    },
    {
      poster : "./images/appleTv.png",
      name : "Apple-Tv.com",
      description : "Apple-TV is the video streaming platform. Where you can watch Movies.",
      techStack : [
        {img : "https://cdn-icons-png.flaticon.com/512/174/174854.png", title : "HTML 5"},
        {img : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png", title : "CSS 3"},
        {img : "https://cdn.cdnlogo.com/logos/j/69/javascript.svg", title : "JavaScript"},
        {img : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png", title : "React"},
      ],
      github : "https://github.com/arjunsen1999/proud-tin-7411/tree/main/apple-tv",
      live : "https://the-great-arjunsen1999-site.netlify.app/"
    },
    {
      poster : "./images/cultFit.png",
      name : "Cult.fit",
      description : "cult.fit is a health and fitness website offering digital and offline experiences across fitness, nutrition, and mental well-being.",
      techStack : [
        {img : "https://cdn-icons-png.flaticon.com/512/174/174854.png", title : "HTML 5"},
        {img : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png", title : "CSS 3"},
        {img : "https://cdn.cdnlogo.com/logos/j/69/javascript.svg", title : "JavaScript"},
      ],
      github : "https://github.com/arjunsen1999/permissible-cloth-4922",
      live : "https://splendid-moxie-0c955f.netlify.app/"
    },
   
  ]
  return (
    <>
     <div className={CarouselCSS.container}>

       {
        projects.map((ele) =>{
          return     <Cards {...ele}/>
        })
       }
     

     </div>
    </>
  )
}
