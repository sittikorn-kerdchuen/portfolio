import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

function Contact({ dark }) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_o1ys2og', 'template_awm5zpq', form.current, 'sQuYglNWRbkkYeTny')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  const [modal, setModal] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [text, setText] = useState("")

  const modalToggle = () => {
    setModal(prev => !prev)
    console.log(modal)
  }

  const discard = () => {
    setModal(prev => !prev)
    setName("")
    setEmail("")
    setText("")
  }

  return (
    <footer className='overflow-hidden' >
      <div className={dark ? 'dark-theme-skill p-20' : 'p-20'}>
        <section className='mb-10'>
          <h2 className='text-3xl font-bold border-b-4 pb-2 border-yellow-500'>Contact</h2>
        </section>

        <article className='flex justify-between'>
          <div className=' flex'>
            <img src="../src/assets/char-1.png" width="250px" alt="" data-aos="zoom-in" />
            <img src="../src/assets/char-2.png" width="80px" className='h-32 relative top-48 right-5 ' alt="" />
            <img src="../src/assets/char-3.png" width="100px" className='h-24 relative top-60 right-80 ' alt="" />
            <img src="../src/assets/char-4.png" width="80px" className='h-32 relative top-64 right-72' alt="" />
          </div>

          <div className='w-2/5'>
            <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-2'>
              {/* <label>Name</label> */}
              <input type="text" name="user_name" placeholder='Name:' className=' border-2 block w-full rounded-md px-2 bg-yellow-400 input_contact text-black font-bold' value={name} required onChange={(e) => setName(e.target.value)} />
              {/* <label>Email</label> */}
              <input type="email" name="user_email" placeholder='Your email:' className='text-black font-bold border-2  block w-full rounded-md px-2 bg-yellow-400 input_contact ' value={email} required onChange={(e) => setEmail(e.target.value)} />
              {/* <label>Message</label> */}
              <textarea name="message" cols="30" rows="10" className='text-black font-bold block rounded-md border-2  w-full px-5  bg-yellow-400 input_contact' value={text} required onChange={(e) => setText(e.target.value)} />
              <button type='button' className=' px-3 py-1 bg-yellow-500 mt-5 rounded-md block w-full font-bold' onClick={modalToggle}> Send </button>

              {/* Modal */}
              <div className={modal ? 'block border p-10 fixed bg-zinc-400 text-black top-40 left-50 translate-x-[-90%] rounded-xl transition duration-300' : 'hidden'}>
                <h1 className='text-2xl font-bold mb-10'>Send Message to Sittikorn?</h1>
                <div className='flex justify-around'>
                  <button type='button' onClick={discard} className='p-2 rounded-md block border'>Discard</button>
                  <input type="submit" value="Absolutely yes" className=' px-3 py-1 bg-yellow-500 rounded-md block  font-bold' onClick={modalToggle} />
                </div>
              </div>
            </form>
          </div>
        </article>
      </div>

      <div className='w-full h-24 bg-[#333] flex justify-between'>
        <div className='flex over'>
          <div className='rounded-tr-full w-24 h-24 bg-[#333] relative bottom-10 animate-bounce animate-infinite animate-duration-[5000ms]'></div>
          <div className='rounded-t-full w-24 h-24 bg-[#333] relative bottom-5 right-10 animate-bounce animate-infinite animate-duration-[4000ms]'></div>
          <div className='rounded-t-full w-32 h-24 bg-[#333] relative bottom-12 right-16 animate-bounce animate-infinite animate-duration-[3000ms]'></div>
          <div className='rounded-t-full w-16 h-16 bg-[#333] relative bottom-6 right-20 animate-bounce animate-infinite animate-duration-[5000ms]'></div>

          <div className='rounded-t-full w-28 h-24 bg-[#333] relative bottom-5 right-24 animate-bounce animate-infinite animate-duration-[4000ms]'></div>
          <div className='rounded-t-full w-32 h-24 bg-[#333] relative bottom-12 right-28 animate-bounce animate-infinite animate-duration-[3000ms]'></div>
          <div className='rounded-t-full w-16 h-16 bg-[#333] relative bottom-6 right-32 animate-bounce animate-infinite animate-duration-[5000ms]'></div>

          <div className='rounded-t-full w-28 h-24 bg-[#333] relative bottom-5 right-36 animate-bounce animate-infinite animate-duration-[4000ms]'></div>
          <div className='rounded-t-full w-32 h-24 bg-[#333] relative bottom-12 right-40 animate-bounce animate-infinite animate-duration-[3000ms]'></div>
          <div className='rounded-t-full w-16 h-16 bg-[#333] relative bottom-6 right-44 animate-bounce animate-infinite animate-duration-[5000ms]'></div>

          <div className='rounded-t-full w-28 h-24 bg-[#333] relative bottom-5 right-48 animate-bounce animate-infinite animate-duration-[4000ms]'></div>
          <div className='rounded-t-full w-32 h-24 bg-[#333] relative bottom-12 right-52 animate-bounce animate-infinite animate-duration-[3000ms]'></div>
          <div className='rounded-t-full w-16 h-16 bg-[#333] relative bottom-6 right-56 animate-bounce animate-infinite animate-duration-[5000ms]'></div>

          <div className='rounded-t-full w-28 h-24 bg-[#333] relative bottom-5 right-60 animate-bounce animate-infinite animate-duration-[4000ms]'></div>
          <div className='rounded-t-full w-40 h-40 bg-[#333] relative bottom-12 right-72 animate-bounce animate-infinite animate-duration-[3000ms]'></div>
          <div className='rounded-t-full w-16 h-16 bg-[#333] relative bottom-6 right-80 animate-bounce animate-infinite animate-duration-[5000ms]'></div>

          <div className='rounded-t-full w-28 h-24 bg-[#333] relative bottom-5 right-[350px] animate-bounce animate-infinite animate-duration-[4000ms]'></div>
          <div className='rounded-t-full w-32 h-32 bg-[#333] relative bottom-12 right-[400px] animate-bounce animate-infinite animate-duration-[4000ms]'></div>
          <div className='rounded-t-full w-16 h-16 bg-[#333] relative bottom-6 right-[420px] animate-bounce animate-infinite animate-duration-[5000ms]'></div>
          <div className='rounded-t-full w-40 h-40 bg-[#333] relative bottom-12 right-[450px] animate-bounce animate-infinite animate-duration-[5000ms]'></div>

        </div>
      </div>



    </footer>
  )
}

export default Contact