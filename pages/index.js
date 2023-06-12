import { Inter } from "next/font/google";
import { useEffect, useState } from "react";


import ReactDOM from "react-dom";
import { useRouter } from "next/router";

import Footer from "@/components/Footer";
import React from "react";
import Maps from "@/components/Map";
import About from "@/components/About";
import Contact from "@/components/Contact";
import MobilFooter from "@/components/MobilFooter";
import FormPage from "@/components/Form";

/* import ListeGorunumu from "@/components/ListeGorunumu"; */

import { etkinlikAPI } from "@/redux/actions";
import { useDispatch } from "react-redux";

import { etkinlikAPI } from "@/redux/actions";
import { useDispatch } from "react-redux";
import SahaFormPage from "@/components/SahaForm";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const dispatch = useDispatch();
  const [siteMap, setSiteMap] = useState("main");
  dispatch(etkinlikAPI());
  return (
    <>
      <main
        className="flex min-h-screen bg-[url('/img/Desktop-Landing.svg')] items-center bg-cover resMain "
        id="mainRes"
      >
        <div className="bg-[#D9E8E7] md: mx-20 rounded-xl md:mt-[5px] p-5  w-[100%] md:mb-[5px] resBgDiv ">
          <div className="bg-white  p-[20px] rounded-xl lg:flex-row flex flex-col ">
            <Footer setSiteMap={setSiteMap} />
            {siteMap === "main" ? (
              <div className=" bg-[url('/img/mapZone-bg.svg')] bg-cover  w-[20%] md:w-[80%] flex ml-[20px] landingWrap">
                <>
                  <Maps />
                  <div className="absolute left-[72%] xl:left-[75%] top-[70%] xl:top-[60%] 2xl:top-[50%] ">
                    <img
                      className="max-w-[150px] xl:max-w-[220px] 2xl:max-w-[260px]  bg-[rgba(246,190,49,0.30)]  rounded-3xl md:w-[270px] troubleMaker"
                      src="img/Volunteer-map.svg"
                      onClick={() => setSiteMap("SahaForm")}
                    />
                  </div>
                </>
              </div>
            ) : siteMap === "help" ? (
              <div>
                <FormPage />
              </div>
            ) : siteMap === "contact" ? (
              <div className="w-[20%] md:w-[80%] flex ml-[20px]">
                <Contact />
              </div>
            ) : siteMap === "SahaForm" ? (
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
      {/*   <ListeGorunumu /> */}
    </>
  );
}
