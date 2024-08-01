"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import profile from '@/app/components/allAsset/human3.jpg'
import clsx from 'clsx';
import Link from 'next/link';
import { FaRegBookmark } from 'react-icons/fa'
import { BsTwitterX } from 'react-icons/bs';
import { IoPersonOutline, IoSettingsOutline } from 'react-icons/io5';
import { IoIosLogIn, IoMdListBox } from 'react-icons/io';
import { MdArrowOutward, MdMonetizationOn, MdOutlineVerified } from 'react-icons/md';
import { BiSolidShoppingBag } from 'react-icons/bi';

export default function Navbar() {
    const data = [
        { href:'/profile', img: IoPersonOutline, text: "Profile" },
        { href:'/beranda', img: BsTwitterX, text: "Premium" },
        { href:'/beranda', img: IoMdListBox, text: "List" },
        { href:'/beranda', img: FaRegBookmark, text: "Bookmarks" },
        { href:'/beranda', img: MdOutlineVerified, text: "Verified Orgs" },
        { href:'/beranda', img: MdMonetizationOn, text: "Monetization" },
        { href:'/beranda', img: MdArrowOutward, text: "Ads" },
        { href:'/beranda', img: BiSolidShoppingBag, text: "Jobs" },
        { href:'/beranda', img: IoSettingsOutline, text: "Settings and privacy" },
        { href:'/beranda', img: IoIosLogIn, text: "Log out" },
    ]

    const [navbar, setNavbar] = useState(false)

    return (
        <section className='w-full md:hidden bg-black'>
            <div className='flex justify-between px-3 py-3 md:py-0 bg-black/90 backdrop-blur-lg'>
                <div className='flex justify-between w-full'>
                    <Image onClick={() => setNavbar(!false)} className='w-9 h-9 object-cover rounded-full cursor-pointer' src={profile} width={32} height={32} alt='profile' />
                    <span className='text-white'><svg xmlns="http://www.w3.org/2000/svg" width={32} viewBox="0 0 24 24" fill="currentColor"><path d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z"></path></svg></span>
                    <div></div>
                </div>
            </div>
            <div className='flex h-14 items-center'>
                <p className='h-8 w-1/2 text-center cursor-pointer text-white font-bold'>For You</p>
                <p className='h-8 w-1/2 text-center cursor-pointer text-white font-semibold'>Following</p>
            </div>


                <div onClick={() => setNavbar(false)} className={clsx('top-0 fixed h-screen w-full bg-black/50 -translate-x-full', navbar && 'translate-x-0 transition-all duration-200')}>
                    <div className='bg-black z-30 h-screen w-[280px] text-white'>
                        <div className='py-4 flex justify-between items-center px-4'>
                            <Image className='w-10 h-10 object-cover rounded-full' src={profile} width={35} height={35} alt='profile' />
                            <span className='text-white border rounded-full w-10 h-10 flex items-center justify-center'><svg xmlns="http://www.w3.org/2000/svg" width={30} viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg></span>
                        </div>
                        <p className='text-base font-semibold px-4'>Username</p>
                        <p className='text-sm text-gray-500 px-4'>@Username1234</p>
                        <div className='flex gap-6 text-sm px-4 pt-5'>
                            <div>
                                <span>0</span><span className='text-gray-500'> Following</span>
                            </div>
                            <div>
                                <span>0</span><span className='text-gray-500'> Followers</span>
                            </div>
                        </div>

                        <div className='pt-8 flex flex-col'>
                            {data.map((item, key) => (
                                <div key={key} className='flex text-white px-4 py-2 items-center hover:bg-gray-500/10 gap-7 mb-3 '>
                                    <p className='w-8 h-8 flex items-center  text-center'>
                                        <item.img size={30}/>
                                    </p>
                                    <Link href={item.href} className='text-lg font-bold'>{item.text}</Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

        </section >
    )
}
