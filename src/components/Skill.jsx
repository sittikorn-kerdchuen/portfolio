import React from 'react'
// image
import html from "../assets/html.png"
import css from "../assets/css.png"
import js from "../assets/js.png"
import react from "../assets/react.png"
import figma from "../assets/figma.png"
import vscode from "../assets/vscode.png"
import mongo from "../assets/mongo.png"
import node from "../assets/node.png"
import Expressjs from "../assets/Expressjs.png"
import git from "../assets/git.png"
import next from "../assets/next.png"
import postman from "../assets/postman.png"
import tailwind from "../assets/tailwind.png"
import bootstrap from "../assets/bootstrap.webp"

function Skill({dark}) {
  return (
    <div className={dark?'dark-theme-skill py-20 ':'sm:py-10 py-20'}>
      <h2 className='text-center text-3xl font-bold mt-5'>Skils and tool</h2> 
      <div className='m-20 mx-40 flex justify-evenly sm:flex-wrap sm:mx-10 '>
        <img src={html} alt="html"  width='80px' data-aos="fade-down" data-aos-duration="100" />
        <img src={css} alt="css"  width='80px' data-aos="fade-down" data-aos-duration="150" />
        <img src={js} alt="js"  width='80px' data-aos="fade-down" data-aos-duration="200" />
        <img src={react} alt="react"  width='80px' data-aos="fade-down" data-aos-duration="250" />
        <img src={figma} alt="figma"  width='80px' data-aos="fade-down" data-aos-duration="300" />
        <img src={vscode} alt="vscode"  width='80px' data-aos="fade-down" data-aos-duration="350" />
      </div>
      <div className='mt-20 mx-40 flex justify-evenly sm:m-5 sm:-mt-16 md:flex-wrap md:gap-2'>
        <img src={mongo} alt="mongo"  width='80px' data-aos="fade-down" data-aos-duration="500" />
        <img src={node} alt="node"  width='80px' data-aos="fade-down" data-aos-duration="600" />
        <img src={Expressjs} alt="Expressjs"  width='80px' className='object-contain contrast-[5]' data-aos="fade-down" data-aos-duration="700" />
        <img src={git} alt="git"  width='80px' data-aos="fade-down" data-aos-duration="800" />
        <img src={next} alt="next"  width='80px' data-aos="fade-down" data-aos-duration="900" />
        <img src={postman} alt="postman"  width='80px' data-aos="fade-down" data-aos-duration="1000" />
        <img src={tailwind} alt="tailwind"  width='80px' data-aos="fade-down" data-aos-duration="1100" />
        <img src={bootstrap} alt="bootstrap"  width='80px' data-aos="fade-down" data-aos-duration="1200" />
      </div>
    </div>
  )
}

export default Skill