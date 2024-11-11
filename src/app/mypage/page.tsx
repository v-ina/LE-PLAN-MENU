"use client";

import { useState } from "react";
import AddRecetteModal from "../components/AddRecetteModal";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function MyPage() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const recipes = [
    {
      date: "30/10/2024",
      ingredients: "ingredients, ingredients, ingredients ....",
      details: "More details about the first recipe.",
    },
    {
      date: "30/10/2024",
      ingredients: "ingredients, ingredients, ingredients ....",
      details: "More details about the second recipe.",
    },
    {
      date: "30/10/2024",
      ingredients: "ingredients, ingredients, ingredients ....",
      details: "More details about the third recipe.",
    },
  ];

  return (
    <>
      <Header />

      {/* <div className=" bg-[url('/assets/img/bg-lightgreen.JPG')] bg-cover bg-center w-full h-80 flex items-center px-10">
        <h1 className="uppercase text-[50px] font-extrabold">My Page</h1>
      </div> */}

      <Banner title="My Page" />

      <div className="w-full px-10 py-10 ">
        <h2>Mon historique</h2>
        {/* 내가 그 전에 삭제했던 장 목록들 여기서 볼 수 있음 삭제한 날짜기준으로 보이게 하자 */}
        {/* <p className="font-semibold bg-zinc-100 p-5 my-1">
          30/10/2024 -{" "}
          <span className="font-normal">
            ingredients, ingredients, ingredients ....{" "}
          </span>
        </p>
        <p className="font-semibold bg-zinc-100 p-5 my-1">
          30/10/2024 -{" "}
          <span className="font-normal">
            ingredients, ingredients, ingredients ....{" "}
          </span>
        </p>
        <p className="font-semibold bg-zinc-100 p-5 my-1">
          30/10/2024 -{" "}
          <span className="font-normal">
            ingredients, ingredients, ingredients ....{" "}
          </span>
        </p> */}

        {recipes.map((recipe, index) => (
          <div key={index}>
            <p
              className={`font-semibold bg-zinc-100 p-5 my-1 cursor-pointer hover:bg-lightgreen ${
                expandedIndex === index ? "bg-main-green" : ""
              }`}
              onClick={() =>
                setExpandedIndex(expandedIndex === index ? null : index)
              }
            >
              {recipe.date} -{" "}
              <span className="font-normal">{recipe.ingredients}</span>
            </p>
            {expandedIndex === index && (
              <div className="bg-lightgreen p-5 my-1">
                <p className="font-semibold">{recipe.date}</p>
                <p>{recipe.details}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="w-full px-10 py-10 ">
        <h2>Mes recettes</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center  mt-5">
          <div className="flex flex-col gap-4">
            <h3 className="text-center px-2 font-bold">nom de recette 1</h3>
            <div className="bg-zinc-500 rounded-xl w-[200px] h-64"></div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-center px-2 font-bold">nom de recette 1</h3>
            <div className="bg-zinc-500 rounded-xl w-[200px] h-64"></div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-center px-2 font-bold">nom de recette 1</h3>
            <div className="bg-zinc-500 rounded-xl w-[200px] h-64"></div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-center px-2 font-bold">nom de recette 1</h3>
            <div className="bg-zinc-500 rounded-xl w-[200px] h-64"></div>
          </div>
        </div>
      </div>

      <div className="w-full px-10 py-10 ">
        <h2>Mes favoris</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center  mt-5">
          <div className="flex flex-col gap-4">
            <h3 className="text-center px-2 font-bold">nom de recette 1</h3>
            <div className="bg-zinc-500 rounded-xl w-[200px] h-64"></div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-center px-2 font-bold">nom de recette 1</h3>
            <div className="bg-zinc-500 rounded-xl w-[200px] h-64"></div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-center px-2 font-bold">nom de recette 1</h3>
            <div className="bg-zinc-500 rounded-xl w-[200px] h-64"></div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
