import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

import Footer from "@/components/Footer";

import React from "react";
import Maps from "@/components/Map";
import About from "@/components/About";
import Contact from "@/components/Contact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const [siteMap, setSiteMap] = useState("main");

  console.log(siteMap);
  return (
    <>
      <main className="flex min-h-screen bg-[url('/img/Desktop-Landing.svg')] items-center bg-cover ">
        <div className="bg-[#D9E8E7] md: mx-20 rounded-xl md:mt-[5px] p-5  w-[100%] md:mb-[5px]">
          <div className="bg-white  p-[20px] rounded-xl  flex">
            <Footer setSiteMap={setSiteMap} />
              {siteMap == "main" ? (
            <div className=" bg-[url('/img/mapZone-bg.svg')] bg-cover  w-[20%] md:w-[80%] flex ml-[20px] ">
                <>
                  <Maps className="" />
                  <div className="absolute left-[72%] xl:left-[75%] top-[70%] xl:top-[60%] 2xl:top-[50%] ">
                    <img
                      className="max-w-[150px] xl:max-w-[220px] 2xl:max-w-[260px]  bg-[rgba(246,190,49,0.30)]  rounded-3xl md:w-[270px]"
                      src="img/Volunteer-map.svg"
                    />
                  </div>
                </>
              </div>
              ) : siteMap == "contact" ? (
                <div className=" w-[20%] md:w-[80%] flex ml-[20px] ">
                  <Contact />
                </div>
              ) : (
                <div className=" w-[20%] md:w-[80%] flex ml-[20px] ">
                <About />
                </div>
              )}
            </div>
        </div>
      </main>

     
    </>
  );
}
