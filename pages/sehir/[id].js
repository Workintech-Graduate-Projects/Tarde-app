import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import { useRouter } from "next/router";
import Personel from "../../components/personel";
import Merkez from "../../components/merkez";

function sehir() {
  const sehir = sessionStorage.getItem("sehir");
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <header>
        <Header />
      </header>
      <main className="flex justify-center">
        <h1>{sehir}</h1>
      </main>
      <Personel id={id} />
      <Merkez id={id} />
    </>
  );
}

export default sehir;
