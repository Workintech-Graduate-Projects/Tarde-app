import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import { useRouter } from "next/router";

function sehir() {
  const sehir = sessionStorage.getItem("sehir")
  const router=useRouter();
  const { id } = router.query;

  return (
    <>
      <header>
        <Header />
      </header>
      <main className="flex justify-center">
        <h1>{sehir}</h1>
      </main>
    </>
  );
}

export default sehir;
