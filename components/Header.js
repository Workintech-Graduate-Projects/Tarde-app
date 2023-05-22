
import React from 'react'
import { dummyData } from "../components/dummy-data";
import {  useState } from "react";
import { useRouter } from "next/router";
import { Dropdown, Grid } from "@nextui-org/react";
import { useDispatch, useSelector } from 'react-redux';

function Header(props) {
  const toggle=useSelector((state)=> state.toggle);
  const dispatch=useDispatch();
 
  const {login}=props;
  const [selectedColor, setSelectedColor] = useState("default");

  const colors = [
    "default",
    "primary",
    "secondary",
    "success",
    "warning",
    "error",
  ];

  const router= useRouter();
  return (
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
              dispatch({type:"TOGGLE"})
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
                <Dropdown.Button
                  id="arial-2"
                  size={10}
                  color={selectedColor}
                  light
                >
                  Şehirler
                </Dropdown.Button>
                <Dropdown.Menu
                  color={selectedColor}
                  variant="light"
                  aria-label="Actions"
                >
                  {dummyData.map((item) => (
                    <Dropdown.Item
                      onClick={() => history.push(`/${item.sehir}`)}
                      key={item.id}
                    >
                      {item.sehir}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </Grid>
          </Grid>
        </Grid.Container>
      </div>
      {login ? (
        <button
          className="p-2 hover:bg-slate-50"
          onClick={() => {
            router.push("/dashboard");
          }}
        >
          Dashboard
        </button>
      ) : (
        <button
          className="p-2 hover:bg-slate-50"
          onClick={()=>{
            dispatch({type:"TOGGLE"})
          }
          }
        >
          Giriş
        </button>
      )}
    </nav>
  </div>
  )

}

export default Header;
