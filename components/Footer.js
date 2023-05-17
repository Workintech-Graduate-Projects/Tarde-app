import React from 'react'

function Footer() {
  return (
    <div className="flex flex-col h-[20vh] bg-black">
      <div className='flex justify-around bg-slate-100 p-4'>
      <h1 className='font-black'>Footer Burası</h1>
      <button className='px-5 py-1 border-black border'>Bize Ulaş</button>
      </div>
      <div className=' flex justify-between p-3'>
        <div>
          <h2 className='text-white'></h2>
          <p>l</p>
        </div>
        <div>
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