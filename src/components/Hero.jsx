import React from 'react'
// image
import char_1 from "../assets/char-1.png"

function Hero({dark}) {
    return (
        <div className={dark?'dark-theme p-20 flex justify-between  md:flex-col md:items-center md:p-5 ':'p-20 flex justify-between md:flex-col md:items-center md:p-5 '}>
            <div className='mt-10'>
                <div className='animate-wiggle animate-infinite animate-duration-[3000ms] animate-normal'>
                    <p className='text-yellow-600 font-bold'>Hi my name is Sittikorn Kerdchuen </p>
                </div>
                <div className=' mb-5'>
                    <h2 className='text-5xl font-bold '>A Front-end Engineer.</h2>
                    <h2 className='text-5xl font-bold'>I Help Startups Launch </h2>
                    <h2 className='text-5xl font-bold'>And Grow Their Products</h2>
                </div>
                <div className='mb-2'>
                    <p>I am a software engineer with more than 6 months of experience.</p>
                    <p>recognized as a practical and effective developer.</p>
                </div>
                <button className='bg-yellow-500 px-3 py-1 rounded-md text-black font-bold'>Learn me more</button>
            </div>

            <div className=' w-1/3 md:w-4/5'> 
                <img src={char_1} width='150px' alt="" className='mx-auto  my-10 scale-x-[-1]  ' />
                <img src={char_1} width='60px' alt="" className='mx-auto  relative -top-24 right-16 animate-bounce animate-infinite animate-duration-[1000ms]' />
            </div>
        </div>
    )
}

export default Hero