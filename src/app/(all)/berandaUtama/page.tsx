import Image from 'next/image'
import React from 'react'
import google from '@/app/(all)/berandaUtama/_assetBerandaUtama/google.svg'
import Link from 'next/link'

export default function BerandaUtama() {
    return (
        <section className='w-full md:h-screen bg-black'>
            <div className='max-w-7xl mx-auto md:flex h-full md:justify-center md:items-center px-8'>
                <div className='w-1/3'>
                    <p className='text-white w-[65px]  md:w-[300px] pt-8'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.2048 2.25H21.5128L14.2858 10.51L22.7878 21.75H16.1308L10.9168 14.933L4.95084 21.75H1.64084L9.37084 12.915L1.21484 2.25H8.04084L12.7538 8.481L18.2048 2.25ZM17.0438 19.77H18.8768L7.04484 4.126H5.07784L17.0438 19.77Z"></path></svg></p>
                </div>
                
                <div className='text-white md:flex md:flex-col md:items-center'>
                    <div className='flex flex-col items-center md:items-start'>
                        <div>
                            <h1 className='text-[43px] pt-10 md:text-6xl font-bold mb-14 md:mb-10'>Happening now</h1>
                            <h2 className='text-2xl pb-5 font-semibold'>Join today.</h2>
                        </div>
                        <div className='flex flex-col gap-2 '>
                            <div className='flex items-center justify-center gap-6 bg-white w-[320px] md:w-[360px] h-11 rounded-full'>
                                <Image src={google} alt='X' width={25} height={25} />
                                <span className='text-gray-500'>Sign in with Google</span>
                            </div>
                            <div className='flex items-center justify-center gap-6 bg-white w-[320px] md:w-[360px] h-11 rounded-full'>
                                <span className='text-black'><svg xmlns="http://www.w3.org/2000/svg" width={25} viewBox="0 0 24 24" fill="currentColor"><path d="M11.6734 7.22198C10.7974 7.22198 9.44138 6.22598 8.01338 6.26198C6.12938 6.28598 4.40138 7.35397 3.42938 9.04597C1.47338 12.442 2.92538 17.458 4.83338 20.218C5.76938 21.562 6.87338 23.074 8.33738 23.026C9.74138 22.966 10.2694 22.114 11.9734 22.114C13.6654 22.114 14.1454 23.026 15.6334 22.99C17.1454 22.966 18.1054 21.622 19.0294 20.266C20.0974 18.706 20.5414 17.194 20.5654 17.11C20.5294 17.098 17.6254 15.982 17.5894 12.622C17.5654 9.81397 19.8814 8.46998 19.9894 8.40998C18.6694 6.47798 16.6414 6.26198 15.9334 6.21398C14.0854 6.06998 12.5374 7.22198 11.6734 7.22198ZM14.7934 4.38998C15.5734 3.45398 16.0894 2.14598 15.9454 0.849976C14.8294 0.897976 13.4854 1.59398 12.6814 2.52998C11.9614 3.35798 11.3374 4.68998 11.5054 5.96198C12.7414 6.05798 14.0134 5.32598 14.7934 4.38998Z"></path></svg></span>
                                <span className='text-gray-500'>Sign in with Apple</span>
                            </div>
                        </div>
                        <div className='flex items-center gap-2 py-2'>
                            <span className='w-[140px] md:w-[163px] h-[1px] bg-gray-500'></span><p>or</p><span className='w-[140px] h-[1px] md:w-[163px] bg-gray-500'></span>
                        </div>
                        <Link href={"#"}><button type='submit' className='flex items-center justify-center gap-6 bg-[#1D9BF0] w-[320px] md:w-[360px] h-11 rounded-full font-semibold '>Create account</button></Link>
                        <p className='text-[10px] text-gray-400 w-[300px] pt-1'>By signing up, you agree to the <span className='text-[#1D9BF0]'>Terms of Service</span> and <span className='text-[#1D9BF0]'>Privacy Policy</span>, including <span className='text-[#1D9BF0]'>Cookie Use.</span></p>
                        <div className='pb-8'>
                            <h1 className='pt-10 ext-base font-semibold'>Already have an account?</h1>
                            <Link href={'/login'}><button className='w-[320px] border border-[#1D9BF0] h-11 rounded-full md:w-[360px]'>Sign in</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
