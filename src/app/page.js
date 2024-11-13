"use client"

import Button from "@/components/Button";
import { GoArrowRight } from "react-icons/go";

export default function Home() {
  return (
    <>
      <div className="md:h-[640px] w-full bg-pr-gray-50 relative">
        <div className="absolute inset-0 w-full h-full grid grid-rows-2 gap">
          <div className="w-full h-full grid grid-cols-4">
            <div className="w-full h-full relative">
              <img className="absolute top-0 left-0" src="/image/decoration/1.png"/>
              <img className="absolute bottom-0 left-1/3" src="/image/decoration/2.png"/>
            </div>
            <div className="w-full h-full">

            </div>
            <div className="w-full h-full relative">
              <img className="absolute top-0 left-0" src="/image/decoration/5.png"/>
            </div>
            <div className="w-full h-full relative">
              <img className="absolute bottom-20 left-0" src="/image/decoration/6.png"/>
              <img className="absolute top-0 right-0" src="/image/decoration/7.png"/>
            </div>        </div>
          <div className="w-full h-full grid grid-cols-4">
            <div className="w-full h-full relative">
              <img className="absolute top-20 left-10" src="/image/decoration/3.png"/>
              <img className="absolute bottom-0 right-0" src="/image/decoration/4.png"/>
            </div>
            <div className="w-full h-full">

            </div>
            <div className="w-full h-full">

            </div>
            <div className="w-full h-full relative">
              <img className="absolute bottom-0 right-0" src="/image/decoration/8.png"/>
            </div>
          </div>
        </div>
        <div className="w-full h-full relative z-10 flex justify-center items-center pb-7 md:pb-0">
          <div className="wrap h-full flex flex-col md:flex-row justify-center items-center md:gap-7">
            <div className="w-full md:w-1/2 md:h-full flex justify-center items-center">
              <img className="w-full" src="/image/header-1.png"/>
            </div>
            <div className="w-full md:w-1/2 h-1/2 md:h-full flex justify-center items-center flex-col gap-6">
              <div className="w-full flex justify-center items-center md:items-start flex-col flex-wrap gap-1 lg:gap-2">
                <p className="xs-500 lg:sm-500 uppercase text-primary">welcome to shopery</p>
                <p className="h4-600 md:h2-600 lg:d1-600 leading-none text-sc-gray-900 text-center md:text-start">Fresh & Healthy Organic Food</p>
              </div>
              <div className="w-full flex justify-center items-center md:items-start flex-col flex-wrap gap-1">
                <p className="xxl-400 lg:h5-400 text-sc-gray-900">Sale up to <span className="xxl-400 lg:h5-600 text-warning">30% OFF</span></p>
                <p className="sm-400 text-sc-gray-500">Fresh & Healthy Organic Food</p>
              </div>
              <div className="w-full flex justify-center md:justify-start items-center">
                <Button fontSize={'sm-600 lg:md-600'}>Shop now <GoArrowRight className="text-lg"/></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full relative bg-white text-sc-gray-900">
        <div className="wrap grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-12 lg:gap-6 m-auto sm:border-b-2 text-center">
          <div className="w-full py-10 flex flex-col justify-center items-center gap-3 lg:gap-4 col-span-3">
            <div className="w-[4rem] lg:w-[5rem]">
              <img src="/icons/shipping.svg"/>
            </div>
            <p className="md-600 lg:lg-600">Free Shipping</p>
            <p className="xs-400 lg:sm-400 text-sc-gray-400">Free shipping with discount</p>
          </div>
          <div className="w-full py-10 flex flex-col justify-center items-center gap-3 lg:gap-4 col-span-3">
            <div className="w-[4rem] lg:w-[5rem]">
              <img src="/icons/support.svg"/>
            </div>
            <p className="md-600 lg:lg-600">Great Support 24/7</p>
            <p className="xs-400 lg:sm-400 text-sc-gray-400">Instant access to ContactFree shipping with discount</p>
          </div>        
          <div className="w-full py-10 flex flex-col justify-center items-center gap-3 lg:gap-4 col-span-3 sm:border-b-4 sm:border-primary">
            <div className="w-[4rem] lg:w-[5rem]">
              <img src="/icons/secure.svg"/>
            </div>
            <p className="md-600 lg:lg-600">100% Secure Payment</p>
            <p className="xs-400 lg:sm-400 text-sc-gray-400">We ensure your money is save</p>
          </div>          
          <div className="w-full py-10 flex flex-col justify-center items-center gap-3 lg:gap-4 col-span-3">
            <div className="w-[4rem] lg:w-[5rem]">
              <img src="/icons/guarantee.svg"/>
            </div>
            <p className="md-600 lg:lg-600">Money-Back Guarantee</p>
            <p className="xs-400 lg:sm-400 text-sc-gray-400">30 days money-back</p>
          </div>
        </div>
      </div>
    </>
  );
}
