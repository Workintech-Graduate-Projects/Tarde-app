import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import Login from "@/components/Login";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";
import { Dropdown, Grid } from "@nextui-org/react";
import React from "react";
import Banner from "@/components/Banner";
import { dummyData } from "../components/dummy-data";
import Header from "@/components/Header";
import {  useSelector } from 'react-redux';
dummyData;
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();

  const toggle=useSelector((state)=> state.toggle);


  const [login, setLogin] = useState(false);
  const [toggleMap, setToggleMap] = useState(true);
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

  return (
    <>
     <Header login={login} /> 
      {toggle ? (
        <main className="">
          <div className="flex-3 flex-col md:flex-row flex border-gray-600 border-y">
            <div className="p-4 bg-gray-300 w-full md:h-auto h-[10vh] flex-col font-bold md:w-60 flex justify-center flex-2 items-center">
              <h4>Merhaba Dünya</h4>
              <button
                className="bg-red-300 mt-5"
                onClick={() => {
                  router.push("/maps");
                }}
                //   onClick={() => {
                //     setToggleMap(!toggleMap);
                //   }}
              >
                {/* //   {!toggleMap ? "Map" : "Svg"} */}
                Biz Neredeyiz
              </button>
            </div>
            <div className=" flex justify-center flex-1 ">
              {toggleMap ? (
                <Banner />
              ) : (
                <div className="py-[5vh]">
                  {" "}
                  <img className="h-[50vh] " src="./img/deprem-map.svg"></img>
                </div>
              )}
            </div>
          </div>
        </main>
      ) : (
        <Login className="" />
      )}
      <Footer className="" />
    </>
  );
}
