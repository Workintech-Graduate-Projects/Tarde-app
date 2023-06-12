import Mobilfooter from "@/pages/MobilFooter";
import { useRouter } from "next/router";

import React from "react";

export default function listegorunumu() {
  const router = useRouter();

  const cities = [
    "antakya",
    "adana",
    "osmaniye",
    "kilis",
    "kahramanmaraş",
    "gaziantep",
    "adıyaman",
    "malatya",
    "diyarbakır",
    "şanlıurfa",
  ];
  const formattedCities = cities.map((city) => city.toUpperCase());
  const handleClick = () => {
    router.push("/FormPage");
  };
  return (
    <div className=" block md:hidden pt-6 pl-4 bg-[url('/img/Destek.svg')] ">
      <img
        className="min-w-[200px]"
        src="./img/affan-logo.svg"
        alt="Affan Logo"
      />

      <div className=" flex md:hidden  flex-col ">
        {" "}
        <button className=" py-2 px-4 mr-2 mb-4 hover:bg-[rgba(248,203,78,0.50)] ml-4 w-24 h-8  rounded-[10px] flex items-center  ">
          <span>
            <img src="./img/list1.png" className="inline-flex " />
          </span>
          <span className="ml-1">Liste</span>
        </button>
        <button className="py-2 px-4 mb-4 hover:bg-[rgba(248,203,78,0.50)] w-24 ml-4 h-8 rounded-[10px] flex items-center ">
          <span>
            <img src="./img/map.png" className="inline-flex " />
          </span>
          <span className="ml-1">Harita</span>
        </button>
      </div>

      <div className="md:hidden flex flex-wrap  p-0 gap-3.5 mt-6  ">
        {" "}
        {formattedCities.map((city) => (
          <button
            key={city}
            className="border bg-[#3C4058] text-white py-2 px-4 mr-1 rounded-full roboto text-xs items-center"
          >
            {city}
          </button>
        ))}
      </div>
      <div className="relative mt-4 mb-4 flex items-center justify-center mr-4">
        <img
          className="w-23 h-23  "
          src="img/BHRVolunteerCard.svg"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
