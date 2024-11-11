"use client"; // 클라이언트 사이드에서 실행될 컴포넌트

import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";

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
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <ToastContainer />

      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">로그인</h2>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 font-semibold mb-2"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-gray-700 font-semibold mb-2"
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-maingreen text-white py-2 px-4 rounded-lg hover:bg-deepgreen transition-colors duration-300"
        >
          로그인
        </button>
      </form>
      {/* <div className="text-center bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Welcome! You are logged in.</h2>
          <div className="space-y-4">
            <Link href="/courses-list">
              <button className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors duration-300">
                My List 내역가기
              </button>
            </Link>
            <Link href="/add-list">
              <button className="mt-4 w-full bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 transition-colors duration-300">
                리스트에 추가하기
              </button>
            </Link>
          </div>
        </div> */}
    </div>
  );
}
