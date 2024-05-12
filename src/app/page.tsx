import FeaturedCourses from '@/components/FeaturedCourses'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import Instructor from '@/components/Instructor'
import ParalaScroll from '@/components/ParalaScroll'
import TestimonialCards from '@/components/TestimonialCards'
import UpComingCard from '@/components/UpComingCard'
import React from 'react'

const page = () => {
  return (
    <div>
        <main className=' min-h-screen bg-black/[0.96] antialiased gb-grid-white/[0.2]'>
           
             <HeroSection/>
             <FeaturedCourses/>
             <ParalaScroll/>
             <TestimonialCards/>
             <UpComingCard/>
             <Instructor/>
             <Footer/>
        </main>
    </div>
  )
}

export default page
