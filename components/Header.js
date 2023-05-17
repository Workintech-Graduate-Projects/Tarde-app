import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className='flex flex-2 justify-around '>
      <div className='flex flex-1 pl-4 h-28 w-28' >
      <img src='./img/logo.jpg' alt='h-logo'></img>
      </div>
      <nav className='flex flex-1 justify-end items-center'>
        <Link className='p-2 hover:bg-slate-50' href={"/"}>Anasayfa</Link>
        <Link className='p-2 hover:bg-slate-50' href={"/"}>Şehirler</Link>
        <Link className='p-2 hover:bg-slate-50' href={"/"}>Giriş</Link>
  
     
      
      </nav>
    </div>
  )
}

export default Header