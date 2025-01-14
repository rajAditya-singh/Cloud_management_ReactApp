import React from 'react'

function About() {
    return (
        <div className='my-32 flex w-full '>
            <div className='max-w-[1240px] mx-auto'>
                <div className='text-center'>
                    <h2 className='text-5xl font-bold'>Trusted by developers across the world</h2>
                    <p className='text-3xl py-6 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dolore mollitia quibusdam adasd asd ut.</p>
                </div>
                <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
                    <div className='border py-8 rounded-xl shadow-xl'>
                        <p className='text-6xl text-indigo-600 font-bold'>100%</p>
                        <p className='text-gray-400 mt-2'>Completion</p>
                    </div>
                    <div className='border py-8 rounded-xl shadow-xl'>
                        <p className='text-6xl text-indigo-600 font-bold'>24/7</p>
                        <p className='text-gray-400 mt-2'>Security</p>
                    </div>
                    <div className='border py-8 rounded-xl shadow-xl'>
                        <p className='text-6xl text-indigo-600 font-bold'>100K</p>
                        <p className='text-gray-400 mt-2'>Transaction</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About