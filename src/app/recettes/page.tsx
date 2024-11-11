"use client"; // 클라이언트 사이드에서 실행될 컴포넌트

import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie"; // 쿠키 확인을 위한 import
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlassPlus } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";
import RecetteSlider from "../components/RecetteSlider";
import RecetteDetailModal from "../components/RecetteDetailModal";

export default function Recettes() {
  const [isHeartSolid, setIsHeartSolid] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRecetteId, setSelectedRecetteId] = useState<number | null>(
    null
  );

  const handleListClick = () => {
    toast.success("리스트에 추가됨");
  };

  const handleDetailClick = (recetteId: number) => {
    setSelectedRecetteId(recetteId);
    setIsModalOpen(true);
  };

  const handleFavoritesClick = () => {
    setIsHeartSolid(!isHeartSolid);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="">
      <Header />

      <div className="">
        <Banner title="Tous les recettes" />

        <div className="w-full px-10 py-10">
          <div className="relative">
            <input
              type="search"
              name=""
              id=""
              placeholder="Cherchez nom de la recette ..."
              className="w-full bg-zinc-100 rounded-full mb-10 py-5 px-10"
            />
            <p className="absolute z-10 right-14 top-5">q</p>
          </div>

          <RecetteSlider openModal={handleDetailClick} />
        </div>

        <div className="w-full px-10 py-10">
          <h2 className="text-xl font-semibold">
            les autres recette dans notre plateforme
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center mt-5">
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="flex flex-col gap-4">
                <h3 className="text-center px-2 font-bold">
                  nom de recette {index}
                </h3>
                <div className="card-container">
                  <div className="card card-front cursor-pointer">
                    <img
                      src="/assets/img/recette2.JPG"
                      alt="Card front"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>

                  <div className="card card-back">
                    <div className="flex gap-8 text-xl">
                      <button
                        className="hover:opacity-50"
                        onClick={handleListClick}
                      >
                        <FontAwesomeIcon icon={faListCheck} />
                      </button>

                      <button
                        className="hover:opacity-50"
                        onClick={() => {
                          handleDetailClick(index);
                          setIsModalOpen(true);
                        }}
                      >
                        <FontAwesomeIcon icon={faMagnifyingGlassPlus} />
                      </button>

                      <button
                        className="hover:opacity-50"
                        onClick={handleFavoritesClick}
                      >
                        <FontAwesomeIcon
                          icon={isHeartSolid ? faSolidHeart : faRegularHeart}
                        />
                      </button>
                    </div>
                  </div>
                </div>
                <h4 className="text-right px-2">by username</h4>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <RecetteDetailModal
          recetteId={selectedRecetteId}
          onClose={closeModal}
        />
      )}

      <Footer />
    </div>
  );
}
