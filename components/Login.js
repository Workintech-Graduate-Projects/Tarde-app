import React from 'react'
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
function Login() {
const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

const onLogin=((item)=>{
  if(item.password=="1234" && item.username=="admin"){
    localStorage.setItem("token","1234567");
    router.push("/dashboard")

  }
  else{
    alert("Kullanıcı Bilgileri Yanlış")

  }
})
  return (
    
    <div className='min-h-[70.25vh] flex-col flex items-center  justify-center' >
   <h1 className=' font-medium text-4xl md:text-5xl md:font-bold mb-6 flex text-center'>Admin Paneline Hoş Geldiniz</h1>

    <form
    className="border-stone-200 border bg-slate-100 text-black p-6 pt-10 w-[232+px] sm:w-[327px] md:w-[435px]" onSubmit={handleSubmit(onLogin)}
    >
     <div className=" mb-4 flex flex-col justify-center items-center">
       <div className="flex flex-col justify-between h-[45px] items-center">
         <label className='' htmlFor="username">Kullanıcı Adı</label>
         {errors?.username && (
            <span className="text-sm text-red-700">{errors.username.message}</span>
          )}
       </div>
       <input
         className="text-black"
         id="username"
      
         {...register("username", { required: "Username kısmını boş bıraktınız" })}
         />
     </div>
     <div className="flex flex-col justify-center items-center">
       <div className="flex flex-col justify-between items-center h-[45px]">
         <label htmlFor="password">Şifre</label>
         {errors?.password && (
            <span className="text-sm text-red-700">
              {errors.password.message}
            </span>  )}
       </div>
       <input
         className="text-black"
         id="password"
         type="password"
         {...register("password", { required: "Şifre kısmını boş bıraktınız" })}
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