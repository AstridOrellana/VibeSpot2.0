import React from 'react'
import Artistas from '../assets/Artistas.png'

const Artists = () => {
  return (
    <div className='w-full bg-black py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={Artistas} alt="/" />
            <div className='flex flex-col justify-center'>
              <p className='text-[#00c892] font-bold'>YOUR FAVORITE ARTISTS</p>
              <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-white'>Your favorite artists in one place</h1>
              <p className='text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, doloremque expedita tenetur enim explicabo provident atque omnis mollitia natus quae cum harum sequi, consectetur ea, doloribus pariatur in assumenda. Accusantium?

              </p>
            </div>
           
        </div>

    </div>
  )
}

export default Artists
