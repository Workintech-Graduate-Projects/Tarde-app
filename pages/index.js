import { useEffect, useState, React } from "react";
import { useRouter } from "next/router";
import Footer from "@/components/Footer";
import Maps from "@/components/Map";
import About from "@/components/About";
import MobilFooter from "@/components/MobilFooter";
import FormPage from "@/components/Form";
import SahaFormPage from "@/components/SahaForm";
import { etkinlikAPI } from "@/redux/actions";
import { useDispatch } from "react-redux";
import Image from "next/image";
export default function Home() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [siteMap, setSiteMap] = useState("main");
  useEffect(() => {
    dispatch(etkinlikAPI());
  }, []);

  return (
    <div className="flex bg-[rgba(251,240,212,0.20)] min-h-screen bg-fixed justify-center items-center md:bg-[url('/img/Desktop-Landing.svg')] flex-col">
      <main className="hidden md:flex  resMain " id="mainRes">
        <div className="md:bg-[#D9E8E7] w-fit  rounded-[55px] md:mt-[5px] p-5  md:mb-[5px] resBgDiv ">
          <div className=" md:bg-white w-fit xl:max-h-[1000px]  min-w-[700px] max-w-[1370px] xl:p-[20px] rounded-[55px] lg:flex-row flex flex-col ">
            <Footer setSiteMap={setSiteMap} siteMap={siteMap} />
            {siteMap === "main" ? (
              <div className=" bg-[url('/img/mapZone-bg.svg')] bg-cover   flex xl:ml-[20px] items-center justify-center">
                <Maps setSiteMap={setSiteMap} />
              </div>
            ) : siteMap === "help" ? (
              <div className="w-full">
                <FormPage />
              </div>
            ) : siteMap === "SahaForm" ? (
              <div>
                {" "}
                <SahaFormPage />
              </div>
            ) : (
              <div className="w-[20%] md:w-[80%] flex m-auto xl:ml-[20px]">
                <About />
                {/* <EtkinlikCard /> */}
              </div>
            )}
          </div>
        </div>
      </main>
      <div className="hidden md:flex">
        <MobilFooter />
        <p className="text-[rgba(60, 64, 88, 1)] hidden justify-center md:flex items-center underline  underline-offset-2 text-[14px] font-medium ">
          KVKK ve Gizlilik Sözleşmesi ile Kullanım Koşulları © TARDE 2023
        </p>
      </div>
      {/*       <listegorunumu /> */}

      <main className="flex flex-col w-full md:hidden p-4">
        <Footer setSiteMap={setSiteMap} siteMap={siteMap} />
        {siteMap === "main" ? (
          <div className=" min-w-[250px] flex flex-col justify-center items-center mt-[10px]  ">
            <p className="text-center pb-4">
              Affan, Travma ve Afet Ruh Sağlığı Çalışmaları Derneği (TARDE)
              bünyesinde Kahramanmaraş Pazarcık merkezli deprem sonrası Maraş,
              Hatay, Antep, İskenderun, Osmaniye, Diyarbakır, Urfa, Adıyaman,
              Malatya’daki merkezlerde depremden etkilenen bireylere yönelik
              ücretsiz psikolojik destek hizmeti sunan, İstanbul Bilgi
              Üniversitesi Travma ve Afet Ruh Sağlığı Çalışmaları Uygulamalı Ruh
              Sağlığı Programı tarafından desteklenen psikososyal destek hizmeti
              projesidir.
            </p>
            <Image
              src="./img/Volunteer-Card.svg"
              width={300}
              height={300}
              alt="Picture of the author"
              priority
              onClick={() => {
                setSiteMap("help");
              }}
            />
            <p className="bg-[rgba(0,12,92,0.06)] text-[12px] p-5 rounded-3xl mt-[16px] md:items-center">
              {" "}
              İstanbul Bilgi Üniversitesi Travma ve Afet Ruh Sağlığı Programı
              işbirliği ile
            </p>
          </div>
        ) : siteMap === "help" ? (
          <div className="w-full">
            <FormPage />
          </div>
        ) : siteMap === "maps" ? (
          <div className=" bg-[url('/img/mapZone-bg.svg')] bg-cover   flex md:ml-[20px] items-center justify-center">
            <Maps setSiteMap={setSiteMap} />
          </div>
        ) : siteMap === "SahaForm" ? (
          <div>
            {" "}
            <SahaFormPage />
          </div>
        ) : (
          <div className=" md:w-[80%] flex ml-[20px]">
            <About />
            {/* <EtkinlikCard /> */}
          </div>
        )}
      </main>
      <MobilFooter />

      {/*       <listegorunumu /> */}
    </div>
  );
}
