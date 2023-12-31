import React from 'react'

function Project({ dark }) {
  return (
    <div className={dark ? 'dark-theme p-20' : 'p-20 sm:p-5 '}>
      <div className='border-b-4 border-yellow-500 sm:pt-10'>
        <h2 className='text-end text-3xl font-bold py-2'>Project</h2>
      </div>

      <div className='mt-5'>
        <div className='grid grid-cols-3 gap-5 sm:grid-cols-1 md:grid-cols-2'>

          <div className='border flex dark-theme card rounded-xl mt-5 sm:flex-col ' data-aos="fade-right" data-aos-duration="300" >
            <img className='rounded-xl sm:w-full w-3/5' src="https://cdn.discordapp.com/attachments/1077952273755410444/1161163271236222976/image.png?ex=65374c91&is=6524d791&hm=8fa4da9ccd78a88e4a832e6f77ec00e069394e54cd4b12bec112b0e11ed558d7&" alt="" />
            <div className='w-2/5 sm:w-full flex flex-col justify-center pb-5'>
              <h3 className='text-center text-2xl font-bold'>Poke API</h3>
              <a href="https://poke-api-xi-ten.vercel.app/" className='block outline mx-10 text-center font-bold hover:bg-yellow-400 mt-5'>view</a>
              <a href="https://github.com/sittikorn-kerdchuen/poke-api" className='block outline mx-10 text-center font-bold hover:bg-yellow-400 mt-5'>code</a>
            </div>
          </div>

          <div className='border flex dark-theme card rounded-xl mt-5 sm:flex-col' data-aos="fade-right" data-aos-duration="500" >
            <img className='rounded-xl w-3/5 sm:w-full object-cover' src="https://cdn.discordapp.com/attachments/1077952273755410444/1160651770314363021/image.png?ex=65357031&is=6522fb31&hm=330920ea468e4b1f93a2adbfb09685dae590652f86f793069a75e6d0368d5b20&" alt="" />
            <div className='w-1/2 flex flex-col justify-center pb-5 sm:w-full'>
              <h3 className='text-center text-2xl font-bold'>Clone Tesla</h3>
              <a href="https://clone-tesla-nine.vercel.app/" className='block outline mx-10 text-center font-bold hover:bg-yellow-400 mt-5'>view</a>
              <a href="https://github.com/sittikorn-kerdchuen/clone-tesla" className='block outline mx-10 text-center font-bold hover:bg-yellow-400 mt-5'>code</a>
            </div>
          </div>

          <div className='border flex dark-theme card rounded-xl mt-5 sm:flex-col' data-aos="fade-right" data-aos-duration="700">
            <img className='rounded-xl w-3/5 sm:w-full object-cover' src="https://cdn.discordapp.com/attachments/1077952273755410444/1160650004105531392/image.png?ex=65356e8c&is=6522f98c&hm=e13efc344a68b1eb2f79f6058bef0767488503f3e7adc3329305800f243b7a70&" alt="" />
            <div className='w-1/2 flex flex-col justify-center pb-5 sm:w-full'>
              <h3 className='text-center text-2xl font-bold'>Burger</h3>
              <a href="https://cart-app-by-react-no-db.vercel.app/" className='block outline mx-10 text-center font-bold hover:bg-yellow-400 mt-5'>view</a>
              <a href="https://github.com/sittikorn-kerdchuen/cart-app-by-react-no-db" className='block outline mx-10 text-center font-bold hover:bg-yellow-400 mt-5'>code</a>
            </div>
          </div>

          <div className='border flex dark-theme card rounded-xl mt-5 sm:flex-col' data-aos="fade-left" data-aos-duration="700">
            <img className='rounded-xl w-3/5 sm:w-full' src="https://cdn.discordapp.com/attachments/1077952273755410444/1165760818634293358/image.png?ex=6548065d&is=6535915d&hm=3adc156b21b954fe0427f42e2f334af343c707ae709402a613429d7a77430758&" alt="" />
            <div className='w-1/2 flex flex-col justify-center pb-5 sm:w-full'>
              <h3 className='text-center text-2xl font-bold'>Healty Impressed</h3>
              <a href="https://healty-impressed-nu.vercel.app/" className='block outline mx-10 text-center font-bold hover:bg-yellow-400 mt-5'>view</a>
              <a href="https://github.com/JSD5-TEAM12/Healty-front" className='block outline mx-10 text-center font-bold hover:bg-yellow-400 mt-5'>code</a>
            </div>
          </div>

          <div className='border flex dark-theme card rounded-xl mt-5 sm:flex-col' data-aos="fade-left" data-aos-duration="500">
            <img className='rounded-xl w-3/5 sm:w-full' src="https://cdn.discordapp.com/attachments/1077952273755410444/1161873650824261683/image.png?ex=6539e228&is=65276d28&hm=898da7df0c7e31c22d9f2da1f9b46caa9cc5f8255cdb8b5f238990469476a437&" alt="" />
            <div className='w-1/2 sm:w-full flex flex-col justify-center pb-5'>
              <h3 className='text-center text-2xl font-bold'>Mini game</h3>
              <a href="https://replit.com/@sittikornkerdch/40sittikornjsd5-find-your-hat" className='block outline mx-10 text-center font-bold hover:bg-yellow-400 mt-5'>view</a>
              <a href="https://github.com/sittikorn-kerdchuen/find-your-house" className='block outline mx-10 text-center font-bold hover:bg-yellow-400 mt-5'>code</a>
            </div>
          </div>

          <div className='border flex dark-theme card rounded-xl mt-5 sm:flex-col' data-aos="fade-left" data-aos-duration="300">
            <img className='rounded-xl w-3/5 sm:w-full object-cover' src="https://cdn.discordapp.com/attachments/1077952273755410444/1161874235808022610/image.png?ex=6539e2b4&is=65276db4&hm=a1f6533d75bba764e947b06d3ace742f86e410bf07c09a97c71a22cf4400286b&" alt="" />
            <div className='w-1/2 sm:w-full flex flex-col justify-center pb-5'>
              <h3 className='text-center text-2xl font-bold'>My port</h3>
              <a href="https://portfolio-sittikorn.vercel.app/" className='block outline mx-10 text-center font-bold hover:bg-yellow-400 mt-5'>view</a>
              <a href="https://github.com/sittikorn-kerdchuen/portfolio" className='block outline mx-10 text-center font-bold hover:bg-yellow-400 mt-5'>code</a>
            </div>
          </div>
          
        </div>

        
      </div>
    </div>
  )
}

export default Project