import { Icon } from "@mui/material";
import Image from "next/image";
import React from "react";

function Footer(props) {
  const {setSiteMap}=props;

  return (
    <div className="flex text-[#000C5C] flex-col text-[14px] w-[270px] ">
      <div className="w-[235px] p-5">
        <Image
          src="./img/affan-logo.svg"
          width={300}
          height={300}
          alt="Picture of the author"
        />
        <div className="mr-5 mt-[26px]">
          <div className="flex hover:bg-[rgba(248,203,79,0.50)] py-2 px-6  rounded-xl">
            <img src="./img/button/map-1.svg" />
            <button onClick={()=>{setSiteMap("main")}} className="ml-[5px] font-[400] tracking-widest" >Anasayfa</button>
          </div>
          <div className="flex hover:bg-[rgba(248,203,79,0.50)] py-2 px-6  rounded-xl">
            <img src="./img/button/sun.svg" />
            <button onClick={()=>{setSiteMap("about")}} className="ml-[5px] font-[400] tracking-widest">Hakkımızda</button>
          </div>
          <div className="flex hover:bg-[rgba(248,203,79,0.50)] py-2 px-6 rounded-xl">
            <img src="./img/button/Group-36.svg" />
            <button onClick={()=>{setSiteMap("volunteer")}} className="ml-[5px] font-[400] tracking-widest">Gönüllü Ol</button>
          </div>
          <div className="flex hover:bg-[rgba(248,203,79,0.50)] py-2 px-6 rounded-xl">
            <img src="./img/button/Group.svg" />
            <button onClick={()=>{setSiteMap("contact")}} className="ml-[5px] font-[400] tracking-widest">İletişim</button>
          </div>
        </div>
      </div>
      <div className="w-[270px] mt-[10px]">
        <Image   src="./img/Volunteer-Card.svg"
          width={300}
          height={300}
          alt="Picture of the author"/>
          <p className="bg-[rgba(0,12,92,0.06)] text-[12px]  p-5 rounded-3xl mt-[16px]"> İstanbul Bilgi Üniversitesi Travma ve Afet Ruh Sağlığı Programı işbirliği ile</p>
      </div>
    </div>
  );
}

export default Footer;
