import React from 'react'
import { useRouter } from "next/router";
import Login from "@/components/Login";
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import Header from '@/components/Header';
import Banner from '@/components/Banner';

function login() {
    const router = useRouter();

    const toggle = useSelector((state) => state.toggle);
  
    const [login, setLogin] = useState(false);
    const [toggleMap, setToggleMap] = useState(true);
    
  const [selectedColor, setSelectedColor] = useState("default");
  const colors = [
    "default",
    "primary",
    "secondary",
    "success",
    "warning",
    "error",
  ];

  const capitalize = (str) => {
    const lower = str.toLowerCase();
    return str.charAt(0).toUpperCase() + lower.slice(1);
  };
  useEffect(() => {
    setLogin(localStorage.getItem("token") == "1234567");
  }, []);
  return (<>
  
          <Login className="" />
         
          </>
  )
}

export default login