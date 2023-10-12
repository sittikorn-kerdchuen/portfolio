import React from 'react'

function Skill({dark}) {
  return (
    <div className={dark?'dark-theme-skill py-20 ':'sm:py-10'}>
      <h2 className='text-center text-3xl font-bold mt-5'>Skils and toolๆ</h2> 
      <div className='m-20 mx-40 flex justify-evenly sm:flex-wrap sm:mx-10 '>
        <img src="../src/assets/html.png" alt=""  width='80px' data-aos="fade-down" data-aos-duration="100" />
        <img src="../src/assets/css.png" alt=""  width='80px' data-aos="fade-down" data-aos-duration="150" />
        <img src="../src/assets/js.png" alt=""  width='80px' data-aos="fade-down" data-aos-duration="200" />
        <img src="../src/assets/react.png" alt=""  width='80px' data-aos="fade-down" data-aos-duration="250" />
        <img src="../src/assets/figma.png" alt=""  width='80px' data-aos="fade-down" data-aos-duration="300" />
        <img src="../src/assets/vscode.png" alt=""  width='80px' data-aos="fade-down" data-aos-duration="350" />
      </div>
      <div className='mt-20 mx-40 flex justify-evenly sm:m-5 sm:-mt-16'>
        <img src="../src/assets/mongo.png" alt=""  width='80px' data-aos="fade-down" data-aos-duration="500" />
        <img src="../src/assets/node.png" alt=""  width='80px' data-aos="fade-down" data-aos-duration="600" />
        <img src="../src/assets/Expressjs.png" alt=""  width='80px' className='object-contain contrast-[5]' data-aos="fade-down" data-aos-duration="700" />
      </div>
    </div>
  )
}

export default Skill