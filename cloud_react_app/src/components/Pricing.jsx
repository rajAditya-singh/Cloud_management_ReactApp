import React from 'react'
import { CheckIcon } from '@heroicons/react/solid';

function Pricing() {
    return (
        <div className='w-full mt-24'>
            <div>
                <div className='bg-black w-full h-[700px]'>
                    <div>
                        <div className=' py-8'>
                            <h2 className='pt-8 text-gray-300 text-2xl font-semibold text-center'>PRICING</h2>
                            <h2 className='text-4xl text-center font-bold py-4 text-white'>The right price for your research.</h2>
                            <p className='text-2xl text-center py- text-gray-300'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id laboriosam, dolores reiciendis asdasd asdasdqwes</p>
                        </div>
                        <div className='grid grid-cols-1 sm:grid-cols-2 mx-4 gap-4 sm:mx-16'>
                            <div className=' flex flex-col items-start px-4 bg-white py-4  w-full mx-auto  
                            transform border border-slate-300 rounded-xl text-center shadow-xl'>
                                <div className='bg-indigo-300 w-20 rounded-3xl'><p className='text-sm text-black text-center mx-auto'>STANDARD</p></div>
                                <div className='flex items-baseline mt-2'>
                                    <h2 className=' text-black text-4xl font-semibold'>$49</h2>
                                    <p className=' text-black'>/mo</p>
                                </div>

                                <div>
                                    <p className='py-8 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. asdid asdasd.</p>

                                    <div className='flex my-8'>
                                        <CheckIcon className='w-6 text-green-500' />
                                        <p className='ml-4'>Lorem, ipsum dolor.</p>
                                    </div>
                                    <div className='flex my-8'>
                                        <CheckIcon className='w-6 text-green-500' />
                                        <p className='ml-4'>Lorem, ipsum dolor.</p>
                                    </div>
                                    <div className='flex my-8'>
                                        <CheckIcon className='w-6 text-green-500' />
                                        <p className='ml-4'>Lorem, ipsum dolor.</p>
                                    </div>
                                    <div className='flex my-8'>
                                        <CheckIcon className='w-6 text-green-500' />
                                        <p className='ml-4'>Lorem, ipsum dolor.</p>
                                    </div>
                                    <div className='flex my-8'>
                                        <CheckIcon className='w-6 text-green-500' />
                                        <p className='ml-4'>Lorem, ipsum dolor.</p>
                                    </div>
                                </div>
                                <div className='w-full text-center '>
                                <button className='py-3 w-full bg-black px-6 my-4'>Get Started</button>
                                </div>
                            </div>
                            <div className=' flex flex-col items-start px-4 bg-white py-4  w-full mx-auto  
                            transform border border-slate-300 rounded-xl text-center shadow-xl'>
                                <div className='bg-indigo-300 w-24 rounded-3xl '><p className='text-sm text-black text-center'>ENTERPRISE</p></div>
                                <div className='flex items-baseline mt-2'>
                                    <h2 className=' text-black text-4xl font-semibold'>$49</h2>
                                    <p className=' text-black'>/mo</p>
                                </div>

                                <div>
                                    <p className='py-8 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. asdid.</p>

                                    <div className='flex my-8'>
                                        <CheckIcon className='w-6 text-green-500' />
                                        <p className='ml-4'>Lorem, ipsum dolor.</p>
                                    </div>
                                    <div className='flex my-8'>
                                        <CheckIcon className='w-6 text-green-500' />
                                        <p className='ml-4'>Lorem, ipsum dolor.</p>
                                    </div>
                                    <div className='flex my-8'>
                                        <CheckIcon className='w-6 text-green-500' />
                                        <p className='ml-4'>Lorem, ipsum dolor.</p>
                                    </div>
                                    <div className='flex my-8'>
                                        <CheckIcon className='w-6 text-green-500' />
                                        <p className='ml-4'>Lorem, ipsum dolor.</p>
                                    </div>
                                    <div className='flex my-8'>
                                        <CheckIcon className='w-6 text-green-500' />
                                        <p className='ml-4'>Lorem, ipsum dolor.</p>
                                    </div>
                                </div>
                                <div className='w-full text-center '>
                                <button className='py-3 w-full bg-black px-6 my-4'>Get Started</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Pricing