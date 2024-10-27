import React from 'react'
import Link from 'next/link'
import Spotlight from './ui/Spotlight'

export default function Herosection() {
    return (
        <div className='h-auto md:h-[40rem] w-full rounded-md flex
    flex-col justify-center items-center relative overflow-hidden mx-auto' >
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />
            <div className='relative z-10 w-full text-center'
            >
                <h1 className=' mt-20 md:mt-0 text-4xl md:text-7xl font-bold 
               bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-600
               '>Master the art of music</h1>
                <p className=' text-neutral-300 mx-auto text-base md:text-lg font-normal max-w-lg mt-4'>Dive into our comprehensive music courses and transform your musical journey today. Whether you&apos;re
                    a beginerr or looking to refine your skills, join us to unlock your true potential.</p>
                <div className='text-white mt-6 '>
                    <Link href={"/Courses"}>
                        <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 py-2  font-semibold text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                            Explore Courses
                        </button>
                    </Link>
                </div>
            </div>
        </div>

    )
}
