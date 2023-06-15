import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import axios from "axios";
import jwt_decode from "jwt-decode";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });
  const handleLogin = async (e) => {
    await axios
      .post(`https://tade-be.herokuapp.com/api/users/login`, e)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        router.push("/dashboard");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="min-h-[70.25vh] flex-col flex items-center  justify-center">
      <h1 className=" font-medium text-4xl md:text-5xl md:font-bold mb-6 flex text-center">
        Admin Paneline Hoş Geldiniz
      </h1>

      <form
        className="border-stone-200 border bg-slate-100 text-black p-6 pt-10 w-[232+px] sm:w-[327px] md:w-[435px]"
        onSubmit={handleSubmit(handleLogin)}
      >
        <div className=" mb-4 flex flex-col justify-center items-center">
          <div className="flex flex-col justify-between h-[45px] items-center">
            <label className="" htmlFor="username">
              Kullanıcı Adı
            </label>
            {errors?.username && (
              <span className="text-sm text-red-700">
                {errors.username.message}
              </span>
            )}
          </div>
          <input
            className="text-black"
            type="username"
            id="username_id"
            onChange={(e) => setUsername(e.target.value)}
            {...register("username", {
              required: "Username kısmını boş bıraktınız",
            })}
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-between items-center h-[45px]">
            <label htmlFor="password">Şifre</label>
            {errors?.password && (
              <span className="text-sm text-red-700">
                {errors.password.message}
              </span>
            )}
          </div>
          <input
            className="text-black"
            id="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            {...register("password", {
              required: "Şifre kısmını boş bıraktınız",
            })}
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
  );
}

export default Login;
