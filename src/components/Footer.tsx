import React from 'react'
import Link from 'next/link'
const Footer = () => {
  return (
    <div
     className='flex justify-center  flex-col '
     >
      <div className='text-center'>
            <h1 className=' text-3xl font-serif font-semibold'>
                Here the information
            </h1>
      </div>
      <div className='grid justify-center grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-col-3 py-10 px-10'>
        <div className='text-center flex-col'>
            <h1 className='text-2xl font-sans'>about</h1>
            <div className='flex flex-col'>
                <Link href={'/'}>courses</Link>
                <Link href={'/'}>contect Us</Link>
                <Link href={'/'}>upcoming updates</Link>
            </div>
        </div>
        <div className='text-center flex-col'>
        <h1 className='text-2xl font-sans'>social media</h1>
            <div className='flex flex-col '>
                <Link href={'/'}>facbook</Link>
                <Link href={'/'}>Instagram</Link>
                <Link href={'/'}>tweeter</Link>
            </div>
        </div>
      </div>
      <div className='text-center'>
            <h2 className=' text-base font-extralight font-serif'>
                copyRight@2024 
            </h2>
      </div>
    </div>
  )
}

export default Footer
