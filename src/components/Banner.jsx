import React from 'react';
import image from '../assets/banner.jpg'

import { Facebook, Twitter } from 'lucide-react';
const Banner = () => {
    return (
        <>
        <div className='flex justify-between items-center gap-5 '>
            <div className='space-y-3'>
            <p className='montserrat text-[#C4CFDE]'>WELCOME TO MY WORLD..!!</p>
                <h3 className='text-5xl font-bold poppins'><span className='text-white'>Hi,I’m </span><span className='text-[#FF014F]'>Sourav Mitra</span></h3>
                <h4></h4>
                <p className='poppins text-[#C4CFDE]'>I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.</p>
            </div>
            <div>
        <img className='w-7/12 rounded-full border-3 mx-auto border-white' src={image} alt="" />
            </div>
            </div>

                <h2 className='montserrat text-[#C4CFDE]'>FIND WITH ME</h2>
            <div className='flex gap-5 mt-5 '>
                <div className='  '>
                   <Facebook color="#c4cfde" strokeWidth={0.5}  className='text-[#B9CFDE] bg-[#1B1E22]   shadow-[8px_8px_20px_#0f1012,_-8px_-8px_20px_#292e34] size-15 py-3  rounded-lg' />
                </div>
                <div className='  '>
                   <Facebook  color="#c4cfde" strokeWidth={0.5} className='text-[#B9CFDE] bg-[#1B1E22]   shadow-[8px_8px_20px_#0f1012,_-8px_-8px_20px_#292e34] size-15 py-3 rounded-lg ' />
                </div>
                <div className='  '>
                   <Facebook color="#c4cfde" strokeWidth={0.5}  className='text-[#B9CFDE] bg-[#1B1E22]   shadow-[8px_8px_20px_#0f1012,_-8px_-8px_20px_#292e34] size-15 py-3 rounded-lg ' />
                </div>
                 
            </div>
            </>
    );
};

export default Banner;