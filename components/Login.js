import React from 'react'

function Login() {
  return (
    <div >
    <form
    
    className="border-stone-400 border bg-slate-50 text-black p-6 max-w-md mx-auto"
    >
     <div className=" mb-4">
       <div className="flex justify-between items-baseline">
         <label htmlFor="username">Username</label>
    
       </div>
       <input
         className="text-black"
         id="username"
         
         />
     </div>
     <div className="">
       <div className="flex justify-between items-baseline">
         <label htmlFor="password">Password</label>
    
       </div>
       <input
         className="text-black"
         id="password"
         type="password"
         
         />
     </div>

     <button
       className="action-button text-white mt-4 py-3 px-8 rounded-full bg-blue-800"
       type="submit"
       
       >
       Giriş Yap
     </button>
   </form>
    </div>
  )
}

export default Login