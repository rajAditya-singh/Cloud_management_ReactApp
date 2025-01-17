import React from 'react'
import {
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaTwitch,
} from 'react-icons/fa'

function Footer() {
    return (
        <div className='w-full text-white my-24'>
            <div className='w-full h-[800px] bg-slate-900 absolute mix-blend-overlay'></div>

            <div className='md:flex'>
                <div className='grid grid-cols-2 md:flex mx-auto'>
                    <div className='px-4 py-6'>
                        <h2 className='font-semibold text-xl' >SOLUTIONS</h2>
                        <div className='pl-4 text-gray-200'>
                            <h3 className='pt-2'>Marketing</h3>
                            <h3 className='pt-2'>Analysis</h3>
                            <h3 className='pt-2'>Commerce</h3>
                            <h3 className='pt-2'>Data</h3>
                            <h3 className='pt-2'>Cloud</h3>
                        </div>
                    </div>
                    <div className='px-4 py-6'>
                        <h2 className='font-semibold text-xl' >SUPPORT</h2>
                        <div className='pl-4 text-gray-200'>
                            <h3 className='pt-2'>Marketing</h3>
                            <h3 className='pt-2'>Analysis</h3>
                            <h3 className='pt-2'>Commerce</h3>
                            <h3 className='pt-2'>Data</h3>
                            <h3 className='pt-2'>Cloud</h3>
                        </div>
                    </div>
                    <div className='px-4 py-6'>
                        <h2 className='font-semibold text-xl' >COMPANY</h2>
                        <div className='pl-4 text-gray-200'>
                            <h3 className='pt-2'>Marketing</h3>
                            <h3 className='pt-2'>Analysis</h3>
                            <h3 className='pt-2'>Commerce</h3>
                            <h3 className='pt-2'>Data</h3>
                            <h3 className='pt-2'>Cloud</h3>
                        </div>
                    </div>
                    <div className='px-4 py-6'>
                        <h2 className='font-semibold text-xl' >LEGAL</h2>
                        <div className='pl-4 text-gray-200'>
                            <h3 className='pt-2'>Marketing</h3>
                            <h3 className='pt-2'>Analysis</h3>
                            <h3 className='pt-2'>Commerce</h3>
                            <h3 className='pt-2'>Data</h3>
                            <h3 className='pt-2'>Cloud</h3>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className='font-semibold text-xl pb-4 mx-auto '>SUBSCRIBE TO OUR NEWSLETTER</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, odit officia?</p>
                    <div>
                        <input type="text" placeholder='Enter email..'/>
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer