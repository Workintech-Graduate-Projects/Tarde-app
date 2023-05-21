
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Dropdown, Grid, } from "@nextui-org/react";
import { dummyData } from "../components/dummy-data";
function sehir() {
    const [sehir,setSehir]=useState("");

  return (
    <>
    <header className="flex justify-center items-center flex-col">
        <h2>{sehir}</h2>
        
        <div className="flex">
        <button
            className="p-2 hover:bg-slate-50"
            onClick={
              () => {
                    router.push("/");
                  }
            }
          >
            Anasayfa
          </button>
          <Grid.Container gap={1.5}>
            <Grid xs={12}>
              <Grid>
                <Dropdown>
                  <Dropdown.Button id="arial-2" size={10} color="default" light>
                    Şehirler
                  </Dropdown.Button>
                  <Dropdown.Menu
                    color="default"
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
      </header></>
  )
}

export default sehir