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

function Skill({dark}) {
  return (
    <div className={dark?'dark-theme-skill py-20 ':'sm:py-10'}>
      <h2 className='text-center text-3xl font-bold mt-5'>Skils and toolๆ</h2> 
      <div className='m-20 mx-40 flex justify-evenly sm:flex-wrap sm:mx-10 '>
        <img src={html} alt="html"  width='80px' data-aos="fade-down" data-aos-duration="100" />
        <img src={css} alt="css"  width='80px' data-aos="fade-down" data-aos-duration="150" />
        <img src={js} alt="js"  width='80px' data-aos="fade-down" data-aos-duration="200" />
        <img src={react} alt="react"  width='80px' data-aos="fade-down" data-aos-duration="250" />
        <img src={figma} alt="figma"  width='80px' data-aos="fade-down" data-aos-duration="300" />
        <img src={vscode} alt="vscode"  width='80px' data-aos="fade-down" data-aos-duration="350" />
      </div>
      <div className='mt-20 mx-40 flex justify-evenly sm:m-5 sm:-mt-16'>
        <img src={mongo} alt="mongo"  width='80px' data-aos="fade-down" data-aos-duration="500" />
        <img src={node} alt="node"  width='80px' data-aos="fade-down" data-aos-duration="600" />
        <img src={Expressjs} alt="Expressjs"  width='80px' className='object-contain contrast-[5]' data-aos="fade-down" data-aos-duration="700" />
      </div>
    </div>
  )
}

export default Skill