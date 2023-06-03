import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import Login from "@/components/Login";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";
import React from "react";
import Banner from "@/components/Banner";
import Header from "@/components/Header";
import { useSelector } from "react-redux";
import Maps from "@/components/Map";
import About from "@/components/About";
import Contact from "@/components/Contact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();

  const toggle = useSelector((state) => state.toggle);

  const [login, setLogin] = useState(false);
  const [toggleMap, setToggleMap] = useState(true);
  const [siteMap, setSiteMap] = useState("main");

  const [selectedColor, setSelectedColor] = useState("default");
  const colors = [
    "default",
    "primary",
    "secondary",
    "success",
    "warning",
    "error",
  ];

  const capitalize = (str) => {
    const lower = str.toLowerCase();
    return str.charAt(0).toUpperCase() + lower.slice(1);
  };
  useEffect(() => {
    setLogin(localStorage.getItem("token") == "1234567");
  }, []);
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

      {/* <Header login={login} />
      {toggle ? (
        <main className="">
          <div className="flex-3 flex-col md:flex-row flex border-gray-600 border-y">
            <div className="md:p-4 bg-gray-300 w-full md:h-auto h-[5vh] md:flex-col font-bold md:w-60 flex justify-center flex-2 items-center">
              <h4>Merhaba Dünya</h4>
              <button
                className="bg-red-300 ml-5 md:ml-0 md:mt-5"
                onClick={() => {
                  router.push("/maps");
                }}
              >
                Biz Neredeyiz
              </button>
            </div>
            <div className=" flex-1">
                <Banner />
            </div>
          </div>
        </main>
      ) : (
        <Login className="" />
      )}
      <Footer className="" /> */}
    </>
  );
}
