import React from "react";


import EtkinlikCard from "./Etkinlik-card";

function About() {

  return (
    <div className="flex mt-9 justify-between md:flex-row flex-col-reverse place-self-center  ">
      <div className="flex flex-col w-[60%] ">
        <h1 className="text-[#030E5E]  font-extrabold text-[75px]  ">
          hakkımızda
        </h1>
        <p className="text-[34px] text-left text-[#4A4A4A]  mt-3 ml-[66px] font-thin">
          Affan kötülükten uzak durandır. Besleyicidir, Bağımsızdır, Çeşitlidir,
          Barışseverdir, Kapsayıcıdır.
        </p>
        <p className="text-[16px] text-left text-[#4A4A4A]  mt-8 ml-[66px]">
          Affan, Travma ve Afet Ruh Sağlığı Çalışmaları Derneği (TARDE)
          bünyesinde Kahramanmaraş Pazarcık merkezli deprem sonrası Maraş,
          Hatay, Antep, İskenderun, Osmaniye, Diyarbakır, Urfa, Adıyaman,
          Malatya’daki merkezlerde depremden etkilenen bireylere yönelik
          ücretsiz psikolojik destek hizmeti sunan, İstanbul Bilgi Üniversitesi
          Travma ve Afet Ruh Sağlığı Çalışmaları Uygulamalı Ruh Sağlığı Programı
          tarafından desteklenen psikososyal destek hizmeti projesidir.
        </p>
      <EtkinlikCard />
      </div>
      <div className="flex flex-col  mr-[30px] ml-32 ">
        <img className="min-w-[200px]  " src="/img/about/cry.png"></img>
        <img className="min-w-[200px] " src="/img/about/thinking.png"></img>
      </div>
    </div>
  );
}

export default About;
