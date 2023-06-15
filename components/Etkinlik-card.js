import { etkinlikAPI } from '@/redux/actions';
import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'

function EtkinlikCard() {
 
    
    const [kisi,setKisi]=useState(0);
    const [etkinlik,setEtkinlikler]=useState(0);
    const dispatch = useDispatch();
    
    const etkinlikler = useSelector((state) => state.etkinlik);

    useEffect(() => { 
      const update= ()=>{
        let count=0;
        etkinlikler.map((item)=> count+=Number(item.danisan_sayisi))
        setEtkinlikler(etkinlikler.length)
        setKisi(count);
      }
      update(); 
    }, [])
   

  return (
    <div className=' bg-white drop-shadow rounded-[10px] md:w-[350px] md:h-[180px] flex-col md:flex-row flex p-[30px]'>
      <img className='md:mr-[30px]' src='./img/tard-logo.png'></img>
      <div className='flex flex-col text-[#000C5C] mt-4 md:mt-0'>
            <h2 className='text-[14px] font-normal'>28 MART'TAN İTİBAREN</h2>
            <div className='flex items-center'>
                <img className='w-[13px] mr-1 h-[13px]' src='./img/person.png'></img>
                <h2 className='text-[32px] mr-2 font-normal'>{kisi}</h2>
                <h3 className='text-[24px] font-light'>Kişi</h3>
            </div>
            <div className='flex items-center'>
                <img className='w-[13px] mr-1 h-[13px]' src='./img/person-alt.png'></img>
                <h2 className='text-[32px] mr-2 font-normal'>{etkinlik}</h2>
                <h3 className='text-[24px] font-light'>Etkinlik</h3>
            </div>
      </div>
        </div>
  )
}

export default EtkinlikCard