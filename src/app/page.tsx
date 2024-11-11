"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const token = Cookies.get("courses_app_cookie");
    if (token) {
      setIsLoggedIn(true);
    } else {
      checkLoginStatus();
    }
  }, []);

  const checkLoginStatus = async () => {
    try {
      const response = await axios.get("http://localhost:3005/users/login", {
        withCredentials: true,
      });
      setIsLoggedIn(response.data.isLoggedIn);
    } catch (error) {
      console.error("Failed to check login status", error);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3005/users/login",
        JSON.stringify({ email, password }),
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        setIsLoggedIn(true);
        toast.success("로그인 성공!");
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 401) {
        toast.error("이메일이나 비밀번호가 잘못되었습니다.");
      } else {
        console.error("Login failed", error);
        toast.error("로그인에 실패했습니다.");
      }
    }
  };

  return (
    <>
      <Header />

      <div className=" bg-[url('/assets/img/bg-deepgreen.JPG')] bg-cover bg-center w-full h-80 flex items-center px-10">
        <h1 className="uppercase text-[36px] text-center w-full font-extrabold text-white text-shadow-lime">
          Vos recettes, Notre liste <br />s Faites vos courses sans effort
        </h1>
      </div>

      <Footer />
    </>
  );
}
