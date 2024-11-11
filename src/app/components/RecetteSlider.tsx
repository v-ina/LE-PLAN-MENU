import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faListCheck,
  faMagnifyingGlassPlus,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons";
import "swiper/swiper-bundle.css";

const RecetteSlider = () => {
  const slides = [1, 2, 3, 4, 5, 6];

  const swiperRef = useRef<any>(null);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  const handleMouseEnter = () => {
    if (swiperInstance && swiperInstance.autoplay) {
      console.log("들어옴");
      swiperInstance.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (swiperInstance && swiperInstance.autoplay) {
      console.log("나감");
      swiperInstance.autoplay.start();
    }
  };

  return (
    <div className="bg-lightgreen rounded-3xl w-full px-10 py-10 mt-5 relative">
      <h2 className="text-xl font-semibold mb-5">les recette plus connu</h2>

      <Swiper
        ref={swiperRef}
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={4}
        centeredSlides={true}
        autoplay={{ delay: 2000, disableOnInteraction: true }}
        loop={true}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        onSwiper={(swiper) => {
          setSwiperInstance(swiper);
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
      >
        {slides.map((index) => (
          <SwiperSlide
            key={index}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex flex-col items-center justify-center gap-4 px-2">
              <h3 className="text-center font-bold">nom de recette {index}</h3>

              <div className="card-container flex items-center justify-center w-[250px] h-[300px] relative overflow-hidden rounded-xl">
                <div className="card card-front w-full h-full absolute cursor-pointer">
                  <img
                    src="/assets/img/recette1.JPG"
                    alt="Card front"
                    className="mx-auto w-full h-full object-cover rounded-xl"
                  />
                </div>

                <div className="card card-back w-full h-full absolute flex flex-col justify-center items-center bg-gray-800 bg-opacity-70 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-8 text-xl">
                    <button className="hover:opacity-70">
                      <FontAwesomeIcon icon={faListCheck} />
                    </button>
                    <button className="hover:opacity-70">
                      <FontAwesomeIcon icon={faMagnifyingGlassPlus} />
                    </button>
                    <button className="hover:opacity-70">
                      <FontAwesomeIcon icon={faRegularHeart} />
                    </button>
                  </div>
                </div>
              </div>

              <h4 className="text-right px-2">by username</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="custom-prev absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-3xl text-maingreen hover:text-limegreen">
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button className="custom-next absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-3xl text-maingreen hover:text-limegreen">
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

export default RecetteSlider;
