import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useRouter } from "next/router";
import Footer from "@/components/Footer";
import React from "react";
import Maps from "@/components/Map";
import About from "@/components/About";
import MobilFooter from "@/components/MobilFooter";
import FormPage from "@/components/Form";
import SahaFormPage from "@/components/SahaForm";
import { etkinlikAPI } from "@/redux/actions";
import { useDispatch } from "react-redux";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const dispatch = useDispatch();
  const [siteMap, setSiteMap] = useState("main");
  dispatch(etkinlikAPI());
  return (
    <div className="flex bg-[rgba(251,240,212,0.20)] md:h-screen bg-fixed justify-center md:bg-[url('/img/Desktop-Landing.svg')]  flex-col">
      <main
        className="flex  resMain "
        id="mainRes"
      >
        <div className="md:bg-[#D9E8E7] md:mx-20 rounded-[55px] md:mt-[5px] p-5  w-[100%] md:mb-[5px] resBgDiv ">
          <div className=" md:bg-white  md:p-[20px] rounded-[55px] lg:flex-row flex flex-col ">
            <Footer setSiteMap={setSiteMap} siteMap={siteMap} />
            {siteMap === "main" ? (
              <div className=" bg-[url('/img/mapZone-bg.svg')] bg-cover   lg:w-[90%]  flex md:ml-[20px] items-center justify-center">
               
                  <Maps  setSiteMap={setSiteMap}/>
                  
              
              </div>
            ) : siteMap === "help" ? (
              <div className="w-full">
                <FormPage />
              </div>
            ) 
            : siteMap === "SahaForm" ? (
              <div>
                {" "}
                <SahaFormPage />
              </div>
            ) : (
              <div className="w-[20%] md:w-[80%] flex ml-[20px]">
                <About />
                {/* <EtkinlikCard /> */}
              </div>
            )}
          </div>
        </div>
      </main>
       <MobilFooter />
      <p className="text-[rgba(60, 64, 88, 1)] hidden justify-center md:flex items-center underline  underline-offset-2 text-[14px] font-medium ">KVKK ve Gizlilik Sözleşmesi  ile Kullanım Koşulları      © TARDE 2023</p>
      {/*       <listegorunumu /> */}
    </div>
  );
}
