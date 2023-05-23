
import React, { useEffect, useState } from "react";

import Header from "@/components/Header";
import { useSelector } from "react-redux";

function sehir() {

  const sehir=useSelector((state)=> state.sehir);
 
  return (<>
    <header >
       <Header/>
    </header>
    <main className="flex justify-center">
      <h1>{sehir}</h1>
    </main>
  </>
  )
}

export default sehir