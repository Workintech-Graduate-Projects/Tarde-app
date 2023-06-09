import { etkinlikAPI } from '@/redux/actions';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function EtkinlikCard() {
    const etkinlikler = useSelector((state) => state.etkinlik);
    const [kisi,setKisi]=useState(0);
    const [etkinlik,setEtkinlikler]=useState(0);
    const dispatch = useDispatch();
    let count=0;
    dispatch(etkinlikAPI())
    useEffect(() => {
        etkinlikler.map((item)=> count)
        setEtkinlikler(etkinlikler.length)
    }, [])
   

  return (
    <div className=' bg-white drop-shadow rounded-[10px] w-[350px] h-[180px] flex p-[30px]'>
      <img className='mr-[30px]' src='./img/tard-logo.png'></img>
      <div className='flex flex-col text-[#000C5C]'>
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