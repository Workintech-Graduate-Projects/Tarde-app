import React from "react";
import EtkinlikCard from "./Etkinlik-card";

function About() {
  return (
    <div className="flex items-center justify-center h-full pt-16 rounded-[25px] xl:bg-[rgba(251,240,212,0.20)] md:flex-row flex-col-reverse ">
      <div className="flex flex-col md:w-[60%] ">
        <h1 className="text-[rgb(3,14,94)] text-left md:ml-[42px] font-extrabold text-[60px] md:text-[64px]  ">
          hakkımızda
        </h1>
        <p className="text-[32px] text-left font-[roboto] text-[rgba(74, 74, 74, 1)] leading-10 mt-3 md:ml-[66px] font-[100]">
          Affan kötülükten uzak durandır. Besleyicidir, Bağımsızdır, Çeşitlidir,
          Barışseverdir, Kapsayıcıdır.
        </p>
        <p className="text-[14px] text-left  text-[#4A4A4A] font-[roboto] font-[400] leading-6 mt-8 md:ml-[66px]">
          Affan, <span className="underline">Travma ve Afet Ruh Sağlığı Çalışmaları Derneği</span> <span className="underline">(TARDE)</span>
          bünyesinde Kahramanmaraş Pazarcık merkezli deprem sonrası Maraş,
          Hatay, Antep, İskenderun, Osmaniye, Diyarbakır, Urfa, Adıyaman,
          Malatya’daki merkezlerde depremden etkilenen bireylere yönelik
          ücretsiz psikolojik destek hizmeti sunan, İstanbul Bilgi Üniversitesi
          Travma ve Afet Ruh Sağlığı Çalışmaları Uygulamalı Ruh Sağlığı Programı
          tarafından desteklenen psikososyal destek hizmeti projesidir.
        </p>
        <div className="scale-90 m-auto max-w-[350px]">

        <EtkinlikCard />
        </div>
      </div>

      <div className=" hidden flex-col lg:min-w-[200px] lg:flex  lg:mr-[30px] lg:ml-32 ">
        <img
          className=" "
          src="/img/about/cry.png"
        ></img>
        <img
          className=""
          src="/img/about/thinking.png"
        ></img>
      </div>
    </div>
  );
}

export default About;
