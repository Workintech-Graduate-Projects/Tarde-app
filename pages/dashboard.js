import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Tables_Merkez from "@/components/Tables_Merkez";
import { useDispatch, useSelector } from "react-redux";
import { getSehirAPI } from "@/redux/actions";

function dashboard() {
  const [isValid, setIsValid] = useState(false);
  const [selectedSehir, setSelectedSehir] = useState("1");
  const [selectedtab, setSelectedtab] = useState("merkez");
  const sehir = useSelector((state) => state.sehir);
  const apiMerkez = useSelector((state) => state.merkez);
  const dispatch = useDispatch();
  const router = useRouter();
  const routeToHome = () => {
    router.push("/");
    alert("Lütfen Giriş yapınız");
  };

  useEffect(() => {
    dispatch(getSehirAPI());
    if (localStorage.getItem("token") ? false : true) {
      routeToHome();
    } else {
      setIsValid(true);
    }
  }, []);
  const onCity = (item) => {
    setSelectedSehir(item);
  };
  const onTable = (item) => {
    setSelectedtab(item);
  };

  return isValid ? (
    <main className="flex min-h-screen bg-[url('/img/Desktop-Landing.svg')] justify-center items-center bg-cover ">
      <div className="bg-[#D9E8E7] p-5 flex items-center rounded-xl w-[80%] ">
        <div className="bg-white rounded-xl p-5  w-[100%] ">
          <div className="">
            <header className="flex justify-between ">
              <div>
                <img src="./banner.svg/" />
              </div>
              <div className="flex items-center text-[10px] xl:text-[14px]">
                <div className="flex  hover:bg-[rgba(248,203,79,0.50)]  py-2 px-6  rounded-xl">
                  <img className="w-[16px]" src="./img/button/y-harita.svg" />
                  <button
                    onClick={() => {
                      setSiteMap("main");
                    }}
                    className="ml-[5px] font-[400] tracking-widest"
                  >
                    Harita Bilgileri
                  </button>
                </div>
                <div className="flex hover:bg-[rgba(248,203,79,0.50)] py-2  px-6  rounded-xl">
                  <img src="./img/button/sun.svg" />
                  <button
                    onClick={() => {
                      setSiteMap("about");
                    }}
                    className="ml-[5px] font-[400] tracking-widest"
                  >
                    Sistem Ayarları
                  </button>
                </div>
                <div className="flex hover:bg-[rgba(248,203,79,0.50)] py-2 px-6 rounded-xl">
                  <img src="./img/button/Group-36.svg" />
                  <button
                    onClick={() => {
                      setSiteMap("volunteer");
                    }}
                    className="ml-[5px] font-[400] tracking-widest"
                  >
                    Gönüllüler
                  </button>
                </div>
                <div className="flex hover:bg-[rgba(248,203,79,0.50)] py-2 px-6 rounded-xl">
                  <img src="./img/button/Group.svg" />
                  <button
                    onClick={() => {
                      setSiteMap("contact");
                    }}
                    className="ml-[5px] font-[400] tracking-widest"
                  >
                    İletişim
                  </button>
                </div>
              </div>
              {/* <h2>Dashboard</h2>

            <div className="flex">
              <button
                className="p-2 hover:bg-slate-50"
                onClick={() => {
                  router.push("/");
                }}
              >
                Anasayfa
              </button>
            </div> */}
            </header>
            <main className="flex justify-center items-center flex-col  ">
              <div className="flex justify-around bg-[#000C5C] mt-8 w-[95%]">
                <select
                  className="bg-[#000C5C] text-white"
                  onClick={(event) => {
                    onTable(event.target.value);
                  }}
                  name="table"
                >
                  <option key={2} value="merkez">
                    Merkezler
                  </option>
                  <option key={1} value="merkezpersonel">
                    Personeller
                  </option>
                  <option key={3} value="isbirligi">
                    İş Birligi Kurumlar
                  </option>
                  <option key={4} value="aracsayisi">
                   Araç Sayısı
                  </option>
                </select>
                {selectedtab == "merkez" || selectedtab == "isbirligi" ? (
                  <select
                    className="bg-[#000C5C] text-white"
                    onChange={(event) => {
                      onCity(event.target.value);
                    }}
                    name="sehir"
                  >
                    {sehir.map((item) => (
                      <option
                        className="bg-[#000C5C] "
                        key={item.sehir_id}
                        value={item.sehir_id}
                      >
                        {item.sehir_adi}
                      </option>
                    ))}
                  </select>
                ) : (
                  <select
                    className="w-[170px] bg-[#000C5C] text-white"
                    onChange={(event) => {
                      onCity(event.target.value);
                    }}
                    name="merkez"
                  >
                    {apiMerkez.map((item) => (
                      <option key={item.merkez_id} value={item.merkez_id}>
                        {item.merkez_adi}
                      </option>
                    ))}
                  </select>
                )}
              </div>
              <Tables_Merkez

                apiMerkez={apiMerkez}
                selectedId={selectedSehir}
                selectedTable={selectedtab}
              />
            </main>
          </div>
        </div>
      </div>
    </main>
  ) : (
    <>
      <header>Hoşgeldiniz</header>
    </>
  );
}

export default dashboard;
