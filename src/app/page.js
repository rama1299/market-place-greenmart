"use client"

import Feature from "@/components/homepage/Feature";
import FeaturedProducts from "@/components/homepage/FeaturedProducts";
import Header from "@/components/homepage/Header";

export default function Home() {
  return (
    <>
      <Header/>
      <div className="w-full relative bg-white text-sc-gray-900 py-10">
        <Feature/>
      </div>
      {/* <div className="w-full relative bg-white text-sc-gray-900 py-10">
        <FeaturedProducts/>
      </div> */}
    </>
  );
}
