import React from "react";
function Mobilfooter() {
  return (
    <div className="flex flex-col md:hidden w-[100%] bg-[#3C4058] p-8  ">
      <img className="flex md:hidden w-[130px]" src="/img/Logo.png"></img>
      <p className=" flex md:hidden underline text-[#FFFFFF] text-[14px] w-[200px] text-left font-mono underline-offset-2 ">
        KVKK ve Gizlilik Sözleşmesi ile Kullanım Koşulları
      </p>
      <p className=" underline block md:hidden text-[#FFFFFF] text-[14px] text-left font-mono underline-offset-2">
      © TARDE 2023
      </p>
    </div>
  );
}
export default Mobilfooter;
