"use client"

import { LuChevronDown } from "react-icons/lu"
import { FiMapPin } from "react-icons/fi";
import { IoMdMenu } from "react-icons/io";
import { PiPhoneListThin } from "react-icons/pi";
import { usePathname, useRouter } from "next/navigation";
import Logo from "../Logo";


export default function Navbar() {
    const pathname = usePathname()
    const router = useRouter()

    return (
        <nav className="w-full sticky top-0 z-50">
            <div className="w-full hidden md:block h-9 bg-pr-gray-50 text-pr-gray-700">
                <div className="wrap h-full m-auto flex justify-between items-center">
                    <div className="flex justify-center items-center gap-1 cursor-pointer">
                        <FiMapPin />
                        <p className="font-normal xs-400 drop-shadow-xl">Store Location: Lincoln- 344, Illinois, Chicago, USA</p>
                    </div>
                    <div className="flex justify-center items-center xs-400 gap-5">
                        <div className="flex justify-center items-center cursor-pointer gap-1">
                            <p>Eng</p>
                            <LuChevronDown />
                        </div>
                        <div className="flex justify-center items-center cursor-pointer gap-1">
                            <p>USD</p>
                            <LuChevronDown />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-12 sm:h-16 bg-white">
                <div className="wrap h-full m-auto flex justify-between items-center text-sc-gray-900">
                    <div className="hidden lg:flex justify-center place-items-center gap-10 capitalize text-sc-gray-500">
                        <a href="/" className={`flex justify-center items-center gap-1 sm-400 cursor-pointer hover:text-sc-gray-900 duration-150 ${pathname == '/' ? 'text-sc-gray-900' : ''}`}>
                            home
                        </a>
                        <a href="/shop" className={`flex justify-center items-center gap-1 sm-400 cursor-pointer hover:text-sc-gray-900 duration-150 ${pathname == '/shop' ? 'text-sc-gray-900' : ''}`}>
                            shop
                        </a>
                        <a href="/pages" className={`flex justify-center items-center gap-1 sm-400 cursor-pointer hover:text-sc-gray-900 duration-150 ${pathname == '/pages' ? 'text-sc-gray-900' : ''}`}>
                            pages
                        </a>
                        <a href="/blog" className={`flex justify-center items-center gap-1 sm-400 cursor-pointer hover:text-sc-gray-900 duration-150 ${pathname == '/blog' ? 'text-sc-gray-900' : ''}`}>
                            blog
                        </a>
                        <a href="/about-us" className={`flex justify-center items-center gap-1 sm-400 cursor-pointer hover:text-sc-gray-900 duration-150 ${pathname == '/about-us' ? 'text-sc-gray-900' : ''}`}>
                            about us
                        </a>
                    </div>
                    <div className="h-full w-full sm:w-auto flex flex-row-reverse sm:flex-row justify-between sm:justify-center items-center sm:gap-3">
                        <div className="lg:hidden bg-primary h-full flex justify-center items-center aspect-square text-white xxl-400">
                            <IoMdMenu/>
                        </div>
                        <div onClick={() => {router.push('/')}}>
                            <Logo/>
                        </div>
                    </div>
                    <div className="hidden sm:flex justify-center items-center gap-10">
                        <div className="hidden md:flex justify-center items-center gap-2 cursor-pointer sm-400 font-medium">
                            <img src="/icons/phonecall.svg"/>
                            <p className="sm-400">(219) 555-0114</p>
                        </div>
                        <div className="flex justify-center items-center gap-3 h5-400">
                            <img className={'cursor-pointer'} src="/icons/search.svg"/>
                            <img className={'cursor-pointer'} src="/icons/heart.svg"/>
                            <img className={'cursor-pointer'} src="/icons/cart.svg"/>
                            <img className={'cursor-pointer'} src="/icons/user.svg"/>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}