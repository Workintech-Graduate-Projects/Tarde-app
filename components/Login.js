import React from 'react'

function Login() {
  return (
    <div className='min-h-[70.25vh] flex-col flex items-center  justify-center' >
   <h1 className='font-bold mb-6'>Admin Paneline Hoş Geldiniz</h1>

    <form
    className="border-stone-400 border bg-slate-50 text-black p-6 pt-10 w-[232+px] sm:w-[327px] md:w-[435px]"
    >
     <div className=" mb-4 flex flex-col justify-center items-center">
       <div className="flex justify-between items-baseline">
         <label htmlFor="username">Username</label>
    
       </div>
       <input
         className="text-black"
         id="username"
         
         />
     </div>
     <div className="flex flex-col justify-center items-center">
       <div className="flex justify-between items-baseline">
         <label htmlFor="password">Password</label>
    
       </div>
       <input
         className="text-black"
         id="password"
         type="password"
         
         />

     <button
       className="action-button text-white mt-4 py-3 px-8 items-center rounded-xl bg-gray-400"
       type="submit"
       
       >
       Giriş Yap
     </button>
         </div>
   </form>
      
    </div>
  )
}

export default Login