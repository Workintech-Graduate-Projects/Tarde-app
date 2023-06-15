import Image from "next/image";
import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";

function Footer(props) {
  const { setSiteMap ,siteMap} = props;

  const sendEmail = () => {
    window.location.href = "mailto:tarde.2018@gmail.com";
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <div className=" text-[#000C5C] pt-5 md:pt-0 flex-col text-[14px] xl:w-[270px] flex ">
      <div >
        <div className=" flex justify-between px-5">
          <Image
          onClick={()=>setSiteMap("main")}
            src="./img/affan-logo.svg"
          className="w-[150px] h-[150px]  lg:w-[184px] lg:h-[184px]"
            width={300}
            height={300}
            alt="Picture of the author"
          />

          <div
            className={`hamburger ${isOpen ? "openHamburger" : ""} `}
            onClick={handleClick}
          >
            <div className="hamburgerOne"></div>
            <div className="hamburgerTwo"></div>
            <div className="hamburgerThree"></div>
          </div>
        </div>

        <div
          className={`mr-5  landinghide ${isOpen ? "open" : ""}   `}
        >
          <div className="flex hover:bg-[rgba(248,203,79,0.50)] py-2 px-6  rounded-xl">
            <img src="./img/sharp-home.svg" className="w-5 h-6" />
            <button
              onClick={() => {
                setSiteMap("main");
              }}
              className="ml-[5px] font-[400] tracking-widest"
            >
              Anasayfa
            </button>
          </div>
          <div className="flex md:hidden  hover:bg-[rgba(248,203,79,0.50)] py-2 px-6  rounded-xl">
            <img src="./img/button/map-1.svg" />
              <button
                onClick={() => {
                  setSiteMap("maps");
                }}
                className="ml-[5px] font-[400] tracking-widest"
              >
                Harita
              </button>
          </div>

          <div className="flex hover:bg-[rgba(248,203,79,0.50)] py-2 px-6  rounded-xl">
            <img src="./img/button/sun.svg" />
            <button
              onClick={() => {
                setSiteMap("about");
              }}
              className="ml-[5px] font-[400] tracking-widest"
            >
              Hakkımızda
            </button>
          </div>
          <div className="flex hover:bg-[rgba(248,203,79,0.50)] py-2 px-6 rounded-xl">
            <img src="./img/button/Group-36.svg" />
            <button
              onClick={() => {
                setSiteMap("SahaForm");
              }}
              className="ml-[5px] font-[400] tracking-widest"
            >
              Gönüllü Ol
            </button>
          </div>
          <div className="flex hover:bg-[rgba(248,203,79,0.50)] py-2 px-6 rounded-xl">
            <img src="./img/button/Group.svg" />

            <p className="ml-[5px] font-[400] tracking-widest">
              <a href="mailto:tarde.2018@gmail.com">İletişim</a>
            </p>

          </div>
        </div>
      </div>
    
      <div className={`w-[270px] mt-[10px] hidden lg:block  ${isOpen ? "closed" : ""} `}>
        {" "}
        <p className="block md:hidden text-center pb-4">
          Affan, Travma ve Afet Ruh Sağlığı Çalışmaları Derneği (TARDE)
          bünyesinde Kahramanmaraş Pazarcık merkezli deprem sonrası Maraş,
          Hatay, Antep, İskenderun, Osmaniye, Diyarbakır, Urfa, Adıyaman,
          Malatya’daki merkezlerde depremden etkilenen bireylere yönelik
          ücretsiz psikolojik destek hizmeti sunan, İstanbul Bilgi Üniversitesi
          Travma ve Afet Ruh Sağlığı Çalışmaları Uygulamalı Ruh Sağlığı Programı
          tarafından desteklenen psikososyal destek hizmeti projesidir.
        </p>
        <Image
          src="./img/Volunteer-Card.svg"
          width={300}
          height={300}
          alt="Picture of the author"
          onClick={() => setSiteMap("help")}
        />
        <p className="bg-[rgba(0,12,92,0.06)] text-[12px] p-5 rounded-3xl mt-[16px] md:items-center">
          {" "}
          İstanbul Bilgi Üniversitesi Travma ve Afet Ruh Sağlığı Programı
          işbirliği ile
        </p>
      </div>
    </div>
  );
}

export default Footer;
