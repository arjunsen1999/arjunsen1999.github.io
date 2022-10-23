import React from 'react'
import CarouselCSS from "./Carousel.module.css"
import Cards from '../Cards/Cards';

export default function Carousel() {
  let projects = [
    {
      poster : "./Project-images/jioMart.png",
      name : "jio-mart.com Clone",
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia corporis veniam adipisci animi sequi repellat dolore aperiam itaque facere distinctio.",
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
      poster : "./Project-images/appleTv.png",
      name : "Apple-Tv.com Clone",
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia corporis veniam adipisci animi sequi repellat dolore aperiam itaque facere distinctio.",
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
      poster : "./Project-images/cultFit.png",
      name : "Cult.fit Clone",
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia corporis veniam adipisci animi sequi repellat dolore aperiam itaque facere distinctio.",
      techStack : [
        {img : "https://cdn-icons-png.flaticon.com/512/174/174854.png", title : "HTML 5"},
        {img : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png", title : "CSS 3"},
        {img : "https://cdn.cdnlogo.com/logos/j/69/javascript.svg", title : "JavaScript"},
      ],
      github : "https://github.com/arjunsen1999/permissible-cloth-4922",
      live : "https://splendid-moxie-0c955f.netlify.app/"
    }
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
