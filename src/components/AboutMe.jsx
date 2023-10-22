import React from 'react'

const AboutMe = ({dark}) => {
    return (
            <div className={dark ? 'dark-theme-skill p-20 md:px-10  sm:px-5' : 'p-20 md:px-10 sm:px-5'}>
                <section className='mb-10'>
                    <h2 className='text-3xl font-bold border-b-4 pb-2 border-yellow-500'>About Me</h2>
                </section>
                <article className='mx-10 text-xl'>
                    <p> <span className='text-2xl font-bold'>I</span> am excited to collaborate on new projects and contribute to the tech community. When I'm not coding, you can find me
                    Feel free to reach out if you'd like to connect or discuss potential collaborations. Let's create something amazing together!</p>
                </article>
            </div>

    )
}

export default AboutMe