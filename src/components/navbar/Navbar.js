"use client"

import { LuChevronDown } from "react-icons/lu"
import { FiMapPin } from "react-icons/fi";
import { CiSearch, CiHeart, CiUser, CiShoppingBasket  } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";
import { PiPhoneListThin } from "react-icons/pi";
import { usePathname, useRouter } from "next/navigation";


export default function Navbar() {
    const pathname = usePathname()
    const router = useRouter()

    return (
        <nav className="w-full">
            <div className="w-full hidden md:block h-9 bg-pr-gray-50 text-pr-gray-700">
                <div className="wrap h-full m-auto flex justify-between items-center">
                    <div className="flex justify-center items-center gap-1 cursor-pointer">
                        <FiMapPin />
                        <p className="font-normal text-xs drop-shadow-xl">Store Location: Lincoln- 344, Illinois, Chicago, USA</p>
                    </div>
                    <div className="flex justify-center items-center text-xs gap-5">
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
            <div className="w-full h-10 sm:h-16">
                <div className="wrap h-full m-auto flex justify-between items-center text-sc-gray-900">
                    <div className="hidden lg:flex justify-center place-items-center gap-6 capitalize text-sc-gray-500">
                        <div onClick={() => {router.push('/')}} className={`flex justify-center items-center gap-1 text-sm cursor-pointer hover:text-sc-gray-900 ${pathname == '/' ? 'text-sc-gray-900' : ''}`}>
                            <p>home</p>
                            <LuChevronDown/>
                        </div>
                        <div onClick={() => {router.push('/shop')}} className={`flex justify-center items-center gap-1 text-sm cursor-pointer hover:text-sc-gray-900 ${pathname == '/shop' ? 'text-sc-gray-900' : ''}`}>
                            <p>shop</p>
                            <LuChevronDown/>
                        </div>
                        <div onClick={() => {router.push('/pages')}} className={`flex justify-center items-center gap-1 text-sm cursor-pointer hover:text-sc-gray-900 ${pathname == '/pages' ? 'text-sc-gray-900' : ''}`}>
                            <p>pages</p>
                            <LuChevronDown/>
                        </div>
                        <div onClick={() => {router.push('/blog')}} className={`flex justify-center items-center gap-1 text-sm cursor-pointer hover:text-sc-gray-900 ${pathname == '/blog' ? 'text-sc-gray-900' : ''}`}>
                            <p>blog</p>
                            <LuChevronDown/>
                        </div>
                        <div onClick={() => {router.push('/about-us')}} className={`flex justify-center items-center gap-1 text-sm cursor-pointer hover:text-sc-gray-900 ${pathname == '/about-us' ? 'text-sc-gray-900' : ''}`}>
                            <p>about us</p>
                        </div>
                    </div>
                    <div className="h-full w-full sm:w-auto flex flex-row-reverse sm:flex-row justify-between sm:justify-center items-center sm:gap-3">
                        <div className="lg:hidden bg-primary h-full flex justify-center items-center aspect-square text-white text-2xl">
                            <IoMdMenu/>
                        </div>
                        <div onClick={() => {router.push('/')}} className="flex justify-center items-center gap-2 lg:cursor-pointer">
                            <img src="/plant-1.svg" className="w-[1.5rem]"></img>
                            <p className=" text-2xl font-medium">Greenmart</p>
                        </div>
                    </div>
                    <div className="hidden sm:flex justify-center items-center gap-10">
                        <div className="hidden md:flex justify-center items-center gap-1 cursor-pointer text-sm font-medium">
                            <PiPhoneListThin className="text-3xl" />
                            <p className="text-sm">(219) 555-0114</p>
                        </div>
                        <div className="flex justify-center items-center gap-3 text-3xl">
                            <CiSearch className="cursor-pointer"/>
                            <CiHeart className="cursor-pointer"/>
                            <CiShoppingBasket className="cursor-pointer"/>
                            <CiUser className="cursor-pointer"/>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}