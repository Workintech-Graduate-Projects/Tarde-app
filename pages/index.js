import { Inter } from "next/font/google";
import Maps from "@/components/Map";
import { useState } from "react";
import Login from "@/components/Login";
import Link from "next/link";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [toggle, setToggle] = useState(0);

  return (
    <>
      <div className="flex flex-2 justify-around h-[10vh]">
        <div className="flex flex-1 pl-4 h-28 w-28">
          <img src="./img/logo.jpg" alt="h-logo"></img>
        </div>
        <nav className="flex flex-1 justify-end items-center">
          <Link className="p-2 hover:bg-slate-50" href={"/"}>
            Anasayfa
          </Link>
          <Link className="p-2 hover:bg-slate-50" href={"/"}>
            Şehirler
          </Link>
          <button
            className="p-2 hover:bg-slate-50"
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            Giriş
          </button>
        </nav>
      </div>
      {toggle ? (
        <main className="">
          <div className="flex-3 flex-col md:flex-row flex border-gray-600 border-y">
            <div className="p-4 bg-gray-300 w-full font-bold md:w-60 flex justify-center flex-2 items-center">
              Merhaba Dünya !!
            </div>
            <div className=" flex justify-center flex-1 ">
              <Maps className="" />
            </div>
          </div>
        </main>
      ) : (
        <Login className="p-5"/>
      )}
      <Footer className="h-[20vh]"/>
    </>
  );
}
