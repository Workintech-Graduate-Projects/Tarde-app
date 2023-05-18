import { Inter } from "next/font/google";
import Maps from "@/components/Map";
import { useState } from "react";
import Login from "@/components/Login";
import Link from "next/link";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });
import { useRouter } from "next/router";
import dummyData from "./dummy-data";
import { Dropdown } from "@nextui-org/react";

export default function Home() {
  const router = useRouter();
  const [toggle, setToggle] = useState(true);

  return (
    <>
      <div className="flex flex-2 justify-around h-[10vh]">
        <div className="flex flex-1 pl-4 h-[10vh] w-[10vh]">
          <img src="./img/logo.jpg" alt="h-logo"></img>
        </div>
        <nav className="flex flex-1 justify-end text-xs sm:text-lg xl:text-xl items-center">
          <button
            className="p-2 hover:bg-slate-50"
            onClick={
              toggle == false
                ? () => {
                    setToggle(!toggle);
                  }
                : () => {
                    router.push("/");
                  }
            }>
            Anasayfa
          </button>
          <Dropdown>
            <Dropdown.Button flat>Şehirler</Dropdown.Button>
            <Dropdown.Menu aria-label="Static Actions">
              <Dropdown.Item key="new">Kahramanmaraş</Dropdown.Item>
              <Dropdown.Item key="copy">Hatay</Dropdown.Item>
              <Dropdown.Item key="edit">Adıyaman</Dropdown.Item>
              <Dropdown.Item key="as">Gaziantep</Dropdown.Item>
              <Dropdown.Item key="asdf">Osmaniye</Dropdown.Item>
              <Dropdown.Item key="wer">Malatya</Dropdown.Item>
              <Dropdown.Item key="af">Diyarbakır</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <button
            className="p-2 hover:bg-slate-50"
            onClick={() => {
              setToggle(!toggle);
            }}>
            Giriş
          </button>
        </nav>
      </div>
      {toggle ? (
        <main className="">
          <div className="flex-3 flex-col md:flex-row flex border-gray-600 border-y">
            <div className="p-4 bg-gray-300 w-full md:h-auto h-[5vh] font-bold md:w-60 flex justify-center flex-2 items-center">
              Merhaba Dünya !!
            </div>
            <div className=" flex justify-center flex-1 ">
              <Maps className="" />
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
