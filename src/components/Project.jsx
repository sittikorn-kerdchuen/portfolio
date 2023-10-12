import React from 'react'

function Project({ dark }) {
  return (
    <div className={dark ? 'dark-theme p-20' : 'p-20 sm:p-5 '}>
      <div className='border-b-4 border-yellow-500'>
        <h2 className='text-end text-3xl font-bold py-2'>Project ของคน <span className='text-yellow-500'>คูลๆ</span></h2>
      </div>

      <div className='mt-5'>
        <div className='grid grid-cols-3 gap-5 sm:grid-cols-1'>

          <div className='border flex dark-theme card rounded-xl mt-5 sm:flex-col' data-aos="fade-right" data-aos-duration="300" >
            <img className='rounded-xl sm:w-full w-[300px]' src="https://cdn.discordapp.com/attachments/1077952273755410444/1161163271236222976/image.png?ex=65374c91&is=6524d791&hm=8fa4da9ccd78a88e4a832e6f77ec00e069394e54cd4b12bec112b0e11ed558d7&" alt="" />
            <div className='w-1/2 sm:w-full flex flex-col justify-center pb-5'>
              <h3 className='text-center text-2xl font-bold'>Poke API</h3>
              <a href="" className='block outline mx-10 text-center font-bold hover:bg-yellow-400 mt-5'>view</a>
              <a href="" className='block outline mx-10 text-center font-bold hover:bg-yellow-400 mt-5'>code</a>
            </div>
          </div>

          <div className='border flex dark-theme card rounded-xl mt-5 sm:flex-col' data-aos="fade-right" data-aos-duration="500" >
            <img className='rounded-xl w-[300px] sm:w-full object-cover' src="https://cdn.discordapp.com/attachments/1077952273755410444/1160651770314363021/image.png?ex=65357031&is=6522fb31&hm=330920ea468e4b1f93a2adbfb09685dae590652f86f793069a75e6d0368d5b20&" alt="" />
            <div className='w-1/2 flex flex-col justify-center pb-5 sm:w-full'>
              <h3 className='text-center text-2xl font-bold'>Clone Tesla</h3>
              <a href="" className='block outline mx-10 text-center font-bold hover:bg-yellow-400 mt-5'>view</a>
              <a href="" className='block outline mx-10 text-center font-bold hover:bg-yellow-400 mt-5'>code</a>
            </div>
          </div>

          <div className='border flex dark-theme card rounded-xl mt-5 sm:flex-col' data-aos="fade-right" data-aos-duration="700">
            <img className='rounded-xl w-[300px] sm:w-full object-cover' src="https://cdn.discordapp.com/attachments/1077952273755410444/1160650004105531392/image.png?ex=65356e8c&is=6522f98c&hm=e13efc344a68b1eb2f79f6058bef0767488503f3e7adc3329305800f243b7a70&" alt="" />
            <div className='w-1/2 flex flex-col justify-center pb-5 sm:w-full'>
              <h3 className='text-center text-2xl font-bold'>Burger</h3>
              <a href="" className='block outline mx-10 text-center font-bold hover:bg-yellow-400 mt-5'>view</a>
              <a href="" className='block outline mx-10 text-center font-bold hover:bg-yellow-400 mt-5'>code</a>
            </div>
          </div>

          <div className='border flex dark-theme card rounded-xl mt-5 sm:flex-col' data-aos="fade-left" data-aos-duration="700">
            <img className='rounded-xl w-[300px] sm:w-full' src="https://cdn.discordapp.com/attachments/1077952273755410444/1161163271236222976/image.png?ex=65374c91&is=6524d791&hm=8fa4da9ccd78a88e4a832e6f77ec00e069394e54cd4b12bec112b0e11ed558d7&" alt="" />
            <div className='w-1/2 flex flex-col justify-center pb-5 sm:w-full'>
              <h3 className='text-center text-2xl font-bold'>Poke API</h3>
              <a href="" className='block outline mx-10 text-center font-bold hover:bg-yellow-400 mt-5'>view</a>
              <a href="" className='block outline mx-10 text-center font-bold hover:bg-yellow-400 mt-5'>code</a>
            </div>
          </div>

          <div className='border flex dark-theme card rounded-xl mt-5 sm:flex-col' data-aos="fade-left" data-aos-duration="500">
            <img className='rounded-xl w-[300px] sm:w-full' src="https://cdn.discordapp.com/attachments/1077952273755410444/1161163271236222976/image.png?ex=65374c91&is=6524d791&hm=8fa4da9ccd78a88e4a832e6f77ec00e069394e54cd4b12bec112b0e11ed558d7&" alt="" />
            <div className='w-1/2 sm:w-full flex flex-col justify-center pb-5'>
              <h3 className='text-center text-2xl font-bold'>Poke API</h3>
              <a href="" className='block outline mx-10 text-center font-bold hover:bg-yellow-400 mt-5'>view</a>
              <a href="" className='block outline mx-10 text-center font-bold hover:bg-yellow-400 mt-5'>code</a>
            </div>
          </div>

          <div className='border flex dark-theme card rounded-xl mt-5 sm:flex-col' data-aos="fade-left" data-aos-duration="300">
            <img className='rounded-xl w-[300px] sm:w-full' src="https://cdn.discordapp.com/attachments/1077952273755410444/1161163271236222976/image.png?ex=65374c91&is=6524d791&hm=8fa4da9ccd78a88e4a832e6f77ec00e069394e54cd4b12bec112b0e11ed558d7&" alt="" />
            <div className='w-1/2 sm:w-full flex flex-col justify-center pb-5'>
              <h3 className='text-center text-2xl font-bold'>Poke API</h3>
              <a href="" className='block outline mx-10 text-center font-bold hover:bg-yellow-400 mt-5'>view</a>
              <a href="" className='block outline mx-10 text-center font-bold hover:bg-yellow-400 mt-5'>code</a>
            </div>
          </div>
          
        </div>

        
      </div>
    </div>
  )
}

export default Project