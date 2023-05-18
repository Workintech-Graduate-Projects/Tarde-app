import React from 'react'

function Footer() {
  return (
    <div className="flex flex-col h-[19.8vh] bg-black">
      <div className='flex justify-around bg-slate-100 p-4'>
      <h2 className=''>Footer Burası</h2>
      <button className='px-5 py-1 border-black border'>Bize Ulaş</button>
      </div>
      <div className=' flex justify-around'>
        <div className="flex ">
          <h3 className='text-white'>şey</h3>
          <p>l</p>
        </div>
        <div className=' flex'>
          <h3 className='text-white'>Sosyal Medya</h3>
        </div>
        <div>
          <h3 className='text-white'>İletişim</h3>
        </div>
      </div>
    </div>
  )
}

export default Footer