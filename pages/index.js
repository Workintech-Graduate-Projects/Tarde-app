import { Inter } from "next/font/google";
import Maps from "@/components/Map";
import { useState } from "react";
import Login from "@/components/Login";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";
import { Dropdown, Grid } from "@nextui-org/react";
import React from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const [toggle, setToggle] = useState(true);
  const [selectedColor, setSelectedColor] = React.useState("default");
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
            }
          >
            Anasayfa
          </button>
          <div>
            <Grid.Container gap={1.5}>
              <Grid xs={12}>
                <Grid>
                  <Dropdown>
                    <Dropdown.Button id="arial-2" size={10} color={selectedColor} light>
                      Şehirler
                    </Dropdown.Button>
                    <Dropdown.Menu 
                      color={selectedColor}
                      variant="light"
                      aria-label="Actions"
                    >
                      <Dropdown.Item key="gaziantep">Gaziantep</Dropdown.Item>
                      <Dropdown.Item key="adıyaman">Adıyaman</Dropdown.Item>
                      <Dropdown.Item key="malatya">Malatya</Dropdown.Item>
                      <Dropdown.Item key="kahramanmaras">Kahramanmaraş</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Grid>
              </Grid>
            </Grid.Container>
          </div>

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
