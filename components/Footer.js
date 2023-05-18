import React from 'react'

function Footer() {
  return (
    <div className="flex flex-col h-[19.8vh] bg-black">
      <div className='flex justify-around bg-slate-100 p-4'>
      <h1 className='font-black'>Footer Burası</h1>
      <button className='px-5 py-1 border-black border'>Bize Ulaş</button>
      </div>
      <div className=' flex justify-around p-3'>
        <div className="flex ">
          <h2 className='text-white'>şey</h2>
          <p>l</p>
        </div>
        <div className=' flex'>
          <h2 className='text-white'>Sosyal Medya</h2>
        </div>
        <div>
          <h2 className='text-white'>İletişim</h2>
        </div>
      </div>
    </div>
  )
}

export default Footer