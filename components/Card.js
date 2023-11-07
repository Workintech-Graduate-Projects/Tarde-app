import React, { useEffect, useState } from "react";
import { getSehirAPI } from "@/redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";

import axios from "axios";

const Card = ({ click ,setClick}) => {
  const sehir = useSelector((state) => state.sehir);
  const merkez = useSelector((state) => state.merkez);
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [dataSehir, setDataSehir] = useState([]);
  const [header, setHeader] = useState("");
  const [dataMerkez, setDataMerkez] = useState([]);
  const [gezici,setGezici]=useState(0);
    const [karavan,setKaravan]=useState(0);

  useEffect(() => {
    dispatch(getSehirAPI());
    const nSehir = sehir.find((item) => item.sehir_id == Number(click));
    setHeader(nSehir?.sehir_adi);

    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://tarde-be-vgfs.onrender.com/api/table/admin/aracsayisi/sehir/${click}`
        );
        setData(response.data);
        let count=0;
        data.forEach((item)=>count+=item.binekarac_sayisi);
        setGezici(count)
      } catch (error) {
        console.error(error);
      }
    };
    fetchData().then(() => {
      let count = 0;
      data.forEach((item) => (count += item.binekarac_sayisi));
      setGezici(count);
    });
  
    const fetchMerkez = async () => {
      try {
        const response = await axios.get(
          `https://tarde-be-vgfs.onrender.com/api/table/admin/merkez`
        );
        setDataMerkez(
          response.data.filter((item) => item.sehir_id == Number(click))
        );
      } catch (error) {
        console.error(error);
      }
    };
   
    fetchMerkez();

  }, [click]);

  useEffect(() => {
    const fetchDataSehir = async () => {
      try {
        const response = await axios.get(
          `https://tarde-be-vgfs.onrender.com/api/table/admin/isbirligi/${click}`
        );
        setDataSehir(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataSehir();
  }, [click]);

  return (
    <div className=" bg-white rounded-lg shadow-sm h-auto w-[350px]">
      <div className="p-5">
        <button onClick={()=>setClick("")} className="text-red-500 font-bold">X</button>
        <div>
          <h1 className="text-[#000C5C] text-[24px] font-bold">{header}</h1>
        </div>
        <ul className="p-5 " id="merkezler-card">
          {dataMerkez.map((item) => (
            <li 
              className="list-disc text-[16px] flex flex-wrap font-medium text-[#030E5E] "
              key={item.merkez_id}
            >
              {item.merkez_adi}
            </li>
          ))}
        </ul>
        <div className="flex flex-col  rounded-[12px] bg-[#F4F4F4] border my-[16px]">
          <div className="flex  border-b pl-2 ">
            <div className="flex w-[191px] text-[#666666]  flex-col border-r ">
              <p className="font-bold text-[12px]">ARAÇ SAYISI</p>
            </div>
            <div className="flex text-[#666666] pl-2 w-[74px] flex-col">
              <p className="font-bold text-[12px]">ADET</p>
            </div>
          </div>
          <div className="flex bg-white pl-2 border-b ">
            <div className="flex w-[191px] flex-col border-r ">
              <p className="font-normal text-[14px]">Gezici Karavan</p>
            </div>
            <div className="flex pl-2 flex-col w-[74px] ">
              <p className="font-normal text-[14px]">0</p>
            </div>
          </div>
          <div className="flex pl-2  bg-white border-b ">
            <div className="flex w-[191px] flex-col border-r ">
              <p className="font-normal text-[14px]">Binek Araç</p>
            </div>
            <div className="flex pl-2 flex-col w-[74px] ">
              <p className="font-normal text-[14px]">{gezici}</p>
            </div>
          </div>
        </div>
        <div className=" text-[#666666]  text-[12px] border border-solid rounded-[12px]">
          <p className="bg-[#F4F4F4] font-bold  px-[16px] rounded-[12px]">
            İŞ BİRLİĞİ YAPILAN KURUMLAR
          </p>
          <ul className="m-5">
            {dataSehir.map((item) => (
              <li
                key={item.Merkez_is_birligi_id}
                className="text-[#000C5C] px-[16px] text-[14px] font-normal border-b border-solid-"
              >
                {item.is_birligi_kurum_adi}
              </li>
            ))}
          </ul>
          <p className="bg-[#F4F4F4] font-bold  px-[16px]">TEŞEKKÜRLER</p>
          {/* <li>
          {card.isbirliğiyapankurumlar.reduce((acc, curr) => acc + ` ` + curr)}
        </li> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
