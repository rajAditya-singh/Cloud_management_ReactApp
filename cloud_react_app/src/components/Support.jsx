import React from 'react'

import { PhoneIcon, ArrowSmRightIcon } from '@heroicons/react/outline';
import { ChipIcon, SupportIcon } from '@heroicons/react/solid'

import supportImg from '../assets/support.jpg'


function Support() {
  return (
    <div name='support' className='w-full mt-24'>
      <div className='w-full h-[700px] bg-gray-900/90 absolute'>
        <img className='w-full h-full object-cover mix-blend-overlay' src={supportImg} alt="/" />
      </div>
      <div className='max-w-[1240px] mx-auto text-white relative'>
        <div className='py-12 px-4'>
          <h2 className='text-center text-3xl pt-8 text-slate-300 uppercase '>SUPPORT</h2>
          <h3 className='text-center text-5xl py-6 font-bold'>Finding the right team</h3>
          <p className='text-3xl py-4 text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium numquam nemo autem reprehenderit placeat! Dolor consectetur ea voluptatem corporis hic id atque nihil tempore veniam!</p>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
          <div className='bg-white rounded-xl shadow-2xl'>
            <div className='p-8'>
              <PhoneIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
              <h3 className='text-2xl font-bold my-6'>Sales</h3>
              <p className='text-xl text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum hic placeat deleniti iure perferendis corrupti,?</p>
            </div>
            <div className='bg-slate-100 pl-8 py-4'>
              <p className='flex items-center text-indigo-600'>Contact us <ArrowSmRightIcon className='w-5 ml-2' /></p>
            </div>
          </div>
          <div className='bg-white rounded-xl shadow-2xl'>
            <div className='p-8'>
              <SupportIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
              <h3 className='text-2xl font-bold my-6'>Technical Support</h3>
              <p className='text-xl text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum hic placeat deleniti iure perferendis corrupti,?</p>
            </div>
            <div className='bg-slate-100 pl-8 py-4'>
              <p className='flex items-center text-indigo-600'>Contact us <ArrowSmRightIcon className='w-5 ml-2' /></p>
            </div>
          </div>
          <div className='bg-white rounded-xl shadow-2xl'>
            <div className='p-8'>
              <ChipIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
              <h3 className='text-2xl font-bold my-6'>Media Inquiries</h3>
              <p className='text-xl text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum hic placeat deleniti iure perferendis corrupti,?</p>
            </div>
            <div className='bg-slate-100 pl-8 py-4'>
              <p className='flex items-center text-indigo-600'>Contact us <ArrowSmRightIcon className='w-5 ml-2' /></p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Support