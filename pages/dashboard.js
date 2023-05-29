import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Dropdown, Grid } from "@nextui-org/react";
import { dummyData } from "../components/dummy-data";
import Dashtable from "../components/dash-table";
import Link from "next/link";


function dashboard() {
  const [isValid, setIsValid] = useState(false);
  const router = useRouter();
  const routeToHome = () => {
    router.push("/");
    alert("Lütfen Giriş yapınız");
  };
 
  useEffect(() => {
    if (localStorage.getItem("token") === "1234567" ? false : true) {
      routeToHome();
    } else {
      setIsValid(true);
    }
  }, []);
  const onCity=(item)=>{
    sessionStorage.setItem("sehirler",item);
    
  }
  const selectSehir = sessionStorage.getItem("sehirler")

  return isValid ? (
    <div className="">
      <header className="flex justify-center items-center flex-col">
        <h2>Dashboard</h2>

       <div className="flex">
          <button
            className="p-2 hover:bg-slate-50"
            onClick={() => {
              router.push("/");
            }}
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
                  color={"default"}
                  light
                  >
                  Şehirler
                </Dropdown.Button>
                <Dropdown.Menu
                  color={"default"}
                  variant="light"
                  aria-label="Actions"
                  >
                  {dummyData.map((item) => (
                    <Dropdown.Item
                    key={item.id}
                    textValue="sehirler_table" 
                      >
                     <Link onClick={()=>onCity(item.sehir)} href={"/dashboard"}>{item.sehir}</Link>
                    </Dropdown.Item>
                      ))}
                      </Dropdown.Menu>
              </Dropdown>
            </Grid>
          </Grid>
        </Grid.Container>
      </div>
        </div> 
      </header>
      <main className="flex justify-center mt-10 ">
       
        <div >
          <h1 className="flex justify-center border border-solid-gray my-8 w-[80%]">{selectSehir}</h1>
        <Dashtable className="w-[80%]" sehir={selectSehir}/>
        </div>
      </main>
    </div>
  ) : (
    <>
      <header>Hoşgeldiniz</header>
    </>
  );
}

export default dashboard;
