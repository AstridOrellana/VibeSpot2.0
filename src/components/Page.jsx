import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import React from 'react';
import { ReactTyped } from "react-typed";
import { Link } from "react-router-dom"



const Page = () => {
  return (
    <div className='text-black'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#9e07e6] font-bold p-2'>VIBING WITH MUSIC</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Vibe With Every Note</h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>Music, Playlists vibing for </p>
                <ReactTyped 
                className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
                strings={['ARTISTS', 'YOU']} 
                typeSpeed={120} 
                backSpeed={140} 
                loop
                />
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-500'>Player where you can listen to your favorite music at any time</p>
            <button className='bg-[#9e07e6] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>
             <Link className='nav-link active' to="/home">
             Get Started
             </Link>
              </button>

        </div>
    </div>
  );
};

export default Page;
 