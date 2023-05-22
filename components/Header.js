import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();
  function handleClick() {
    router.push("/detaylar");
  }
  return (
    <div className="flex flex-2 justify-around ">
      <div className="flex flex-1 pl-2 md:pl-4  w-28">
        <img src="./img/logo.jpg" alt="h-logo"></img>
      </div>
      <nav className="flex flex-1 xl:text-2xl justify-end items-center">
        <Link className="p-2 xl:text-2xl hover:bg-slate-50" href={"/"}>
          Anasayfa
        </Link>
        <Link>detaylar</Link>
        <Link className="p-2  hover:bg-slate-50" href={"/"}>
          Şehirler
        </Link>
        <Link className="p-2  hover:bg-slate-50" href={"/"}>
          Giriş
        </Link>
      </nav>
    </div>
  );
}

export default Header;
