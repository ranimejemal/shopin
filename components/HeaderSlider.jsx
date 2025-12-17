"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Smartphone,
  Megaphone,
  Gift,
  BadgePercent,
} from "lucide-react";
import { assets } from "@/assets/assets";

const HeaderSlider = () => {
  const slides = [
    {
      id: 1,
      title: "Experience Pure Sound - Your Perfect Headphones Awaits!",
      offer: "Limited Time Offer 30% Off",
      buttonText1: "Buy now",
      buttonText2: "Find more",
      imgSrc: assets.header_headphone_image,
    },
    {
      id: 2,
      title: "Next-Level Gaming Starts Here - Discover PlayStation 5 Today!",
      offer: "Hurry up, only a few left!",
      buttonText1: "Shop Now",
      buttonText2: "Explore Deals",
      imgSrc: assets.header_playstation_image,
    },
    {
      id: 3,
      title: "Power Meets Elegance - Apple MacBook Pro is Here for You!",
      offer: "Exclusive Deal 40% Off",
      buttonText1: "Order Now",
      buttonText2: "Learn More",
      imgSrc: assets.header_macbook_image,
    },
  ];

   const [current, setCurrent] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // ensures client-only rendering
    const timer = setInterval(() => setCurrent((prev) => (prev + 1) % slides.length), 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  if (!mounted) return null; // prevent hydration errors

  return (
    <section className="w-screen bg-white mt-2 translate-x-[-8rem]">
      {/* 🔹 TOP INFO BAR */}
      <div className="w-full bg-[#f8f8f8] py-2 border-t border-b border-gray-200">
        <div className="flex items-center justify-center gap-x-10 text-sm text-gray-700 font-medium">
          <div className="flex items-center gap-2">
            <Smartphone className="w-5 h-5 text-gray-800" />
            <p>
              <span className="font-semibold">Téléchargez l'app SHOPIN</span> et
              bénéficiez de réduction
            </p>
          </div>

          <div className="h-5 w-px bg-gray-300"></div>

          <div className="flex items-center gap-2">
            <Megaphone className="w-5 h-5 text-gray-800" />
            <p className="font-semibold">SHOPIN Affiliation</p>
          </div>

          <div className="h-5 w-px bg-gray-300"></div>

          <div className="flex items-center gap-2">
            <BadgePercent className="w-5 h-5 text-red-600" />
            <p>
              <span className="text-red-600 font-bold">15% DE RÉDUCTION</span>{" "}
              <span className="text-gray-600">
                supplémentaire sur votre 1ʳᵉ commande
              </span>
            </p>
          </div>

          <div className="h-5 w-px bg-gray-300"></div>

          <div className="flex items-center gap-2">
            <Gift className="w-5 h-5 text-gray-800" />
            <p className="font-semibold">CARTE CADEAU</p>
          </div>
        </div>
      </div>

      {/* 🔹 MAIN BANNERS SECTION */}
      <div className="flex items-stretch justify-center gap-x-4 px-4 py-4 mx-auto">
        {/* LEFT BANNERS */}
        <div className="flex flex-col w-[300px] gap-y-3">
          {[
            {
              title: "TOUT À MOINS DE",
              value: "1,99€",
              button: "Voir plus",
              pClass: "text-xs font-semibold",
              valueClass: "text-[#FF5A00] text-xl font-bold mt-1",
            },
            {
              title: "MEILLEURES VENTES",
              value: "À PRIX BAS",
              button: "Voir plus",
              pClass: "text-xs font-semibold",
              valueClass: "text-[#FF5A00] text-base font-bold mt-1",
            },
            {
              title: "SHOPIN CLUB",
              value:
                "Réductions supplémentaires sur des Best-sellers & Coupons de Livraison Gratuite!",
              button: "Rejoignez le club",
              pClass: "text-xs font-semibold",
              valueClass: "text-[10px] text-gray-700 mt-1",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#FFF3EC] rounded-md p-3 flex flex-col justify-between text-center h-[calc(100%/3)] shadow-sm"
            >
              <div>
                <p className={item.pClass}>{item.title}</p>
                <p className={item.valueClass}>{item.value}</p>
              </div>
              <button className="mt-2 bg-[#FF5A00] text-white px-3 py-1 rounded text-xs">
                {item.button}
              </button>
            </div>
          ))}
        </div>

        {/* MAIN SLIDER */}
        <div className="flex-1 min-w-[700px] relative overflow-hidden rounded-lg shadow-sm h-[380px]">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ${
                index === current ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <Image
                src={slide.imgSrc}
                alt={slide.title}
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black/20 rounded-lg" />
              <div className="absolute bottom-6 left-6 text-white max-w-sm">
                <h2 className="text-base md:text-lg font-medium">
                  {slide.title}
                </h2>
                <p className="text-[#FF5A00] text-xl md:text-2xl font-bold mt-1">
                  {slide.offer}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <button className="bg-[#FF5A00] px-3 py-1 rounded-md text-white text-xs">
                    {slide.buttonText1}
                  </button>
                  <button className="bg-white text-black px-3 py-1 rounded-md text-xs">
                    {slide.buttonText2}
                  </button>
                </div>
              </div>
            </div>
          ))}

          <button
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-white text-gray-700 p-2 rounded-full"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-white text-gray-700 p-2 rounded-full"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {slides.map((_, i) => (
              <div
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full cursor-pointer ${
                  current === i ? "bg-[#FF5A00]" : "bg-white/50"
                }`}
              ></div>
            ))}
          </div>
        </div>

        {/* RIGHT TRENDING - STRETCHED */}
        {/* RIGHT TRENDING - MINIMIZED TO FIT 6 ITEMS */}
<div className="flex flex-col w-[420px] gap-y-3">
  <div className="bg-[#faf6ff] rounded-xl border border-[#e0cfff] p-4 flex flex-col h-[380px] shadow-sm">
    
    {/* TITLE */}
    <h3 className="font-semibold italic text-sm text-center text-black mb-2">
      <span className="border-b-2 border-[#a57aff] pb-0.5">Top</span>{" "}
      <span className="text-[#a57aff]">tendances</span>
    </h3>

    {/* GRID WITHOUT SCROLL */}
    <div className="grid grid-cols-3 gap-2">
      {[
        { name: "#Nouvelle mode", price: "13,15€", img: "/images/trend1.jpg" },
        { name: "#Bottes d’automne", price: "37,80€", img: "/images/trend2.jpg" },
        { name: "#Gilet élégant", price: "18,92€", img: "/images/trend3.jpg" },
        { name: "#Soirée de gala", price: "18,96€", img: "/images/trend4.jpg" },
        { name: "#Pyjama d’automne", price: "12,49€", img: "/images/trend5.jpg" },
        { name: "#Trench coat", price: "22,04€", img: "/images/trend6.jpg" },
      ].map((item, i) => (
        <div
          key={i}
          className="bg-white border border-[#e0cfff] rounded-lg p-1 flex flex-col items-center justify-between hover:shadow-md transition-all duration-200"
        >
          {/* Smaller Image */}
          <div className="relative w-full aspect-[1/1] rounded-md overflow-hidden">
            <Image
              src={item.img}
              alt={item.name}
              fill
              className="object-cover rounded-md"
            />
          </div>

          {/* Smaller Text */}
          <div className="flex flex-col items-center justify-center mt-0.5">
            <p className="text-[9px] text-[#a57aff] leading-tight text-center">
              {item.name}
            </p>
            <p className="text-[10px] font-semibold text-black">
              {item.price}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
</div>


      
  {/* 🔹 CATEGORY CIRCLES — BIGGER SIZE */}
<section className="w-full bg-white rounded-md mt-6 pb-10">
  <div className="flex flex-wrap justify-center gap-12 pt-6">
    {[
      { label: "Femmes", img: "/categories/femmes.jpg" },
      { label: "Curvy", img: "/categories/curvy.jpg" },
      { label: "Hommes", img: "/categories/hommes.jpg" },
      { label: "Enfant & Bébé", img: "/categories/enfant.jpg" },
      { label: "Beauté & Bien-être", img: "/categories/beaute.jpg" },
      { label: "Sports", img: "/categories/sport.jpg" },
    ].map((cat, index) => (
      <div key={index} className="flex flex-col items-center text-center">
        <div className="w-[170px] h-[170px] rounded-full overflow-hidden bg-white shadow-md hover:shadow-lg transition">
          <img
            src={cat.img}
            alt={cat.label}
            className="w-full h-full object-cover"
          />
        </div>
        <p className="mt-3 text-base font-semibold text-black">{cat.label}</p>
      </div>
    ))}
  </div>
</section>


      {/* ====== BONNES AFFAIRES SECTION ====== */}
      <section className="w-full bg-gradient-to-r from-[#fff2eb] via-[#ffe7dc] to-[#fff2eb] py-6 rounded-md mt-6">
        <div className="flex justify-between items-center px-6 mb-4">
          <h2 className="text-2xl font-semibold italic text-black">
            Nos <span className="text-[#ff5a00]">Bonnes Affaires</span>
          </h2>
          <span className="text-[#7a3a00] text-lg font-medium flex items-center">
            Économies de folie
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
        </div>

        <div className="flex justify-center gap-4 overflow-x-auto px-6">
          {[
            { img: "/products/1.jpg", price: "11,19€" },
            { img: "/products/2.jpg", price: "7,71€" },
            { img: "/products/3.jpg", price: "8,67€" },
            { img: "/products/4.jpg", price: "12,59€" },
            { img: "/products/5.jpg", price: "16,79€" },
            { img: "/products/6.jpg", price: "12,59€" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white rounded-md shadow-sm w-[220px] min-w-[220px] hover:shadow-md transition"
            >
              <img
                src={item.img}
                alt={`Product ${index + 1}`}
                className="rounded-t-md w-full h-[270px] object-cover"
              />
              <p className="text-black font-semibold text-sm py-2">
                {item.price}
              </p>
            </div>
          ))}
        </div>

        
      </section>
    {/* ====== BEST-SELLERS SECTION ====== */}
<section className="w-full mt-0 rounded-md overflow-hidden">
  {/* Beige title bar */}
  <div className="bg-[#f5f0ea] py-4 flex justify-center items-center">
    <h2 className="text-2xl font-semibold italic text-[#3b3027] underline underline-offset-4 decoration-[#b89b85]">
      Best-sellers
    </h2>
    <span className="mx-4 text-[#b89b85] text-2xl font-semibold">|</span>
    <h2 className="text-2xl font-semibold italic text-[#3b3027]">
      Livraison Rapide
    </h2>
  </div>

  {/* White product area */}
  <div className="bg-white py-6">
   <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 px-6">
      {[
        { img: "/images/product1.jpg", price: "21,49€" },
        { img: "/images/product2.jpg", price: "20,99€" },
        { img: "/images/product3.jpg", price: "10,99€" },
        { img: "/images/product4.jpg", price: "20,64€" },
        { img: "/images/product5.jpg", price: "17,49€" },
        { img: "/images/product6.jpg", price: "12,59€" },
        { img: "/images/product7.jpg", price: "19,99€" },
        { img: "/images/product8.jpg", price: "13,49€" },
        { img: "/images/product9.jpg", price: "14,99€" },
        { img: "/images/product10.jpg", price: "18,59€" },
        { img: "/images/product11.jpg", price: "15,79€" },
        { img: "/images/product12.jpg", price: "22,49€" },
      ].map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center bg-white rounded-md shadow-sm w-[220px] min-w-[220px] hover:shadow-md transition"
        >
          <img
            src={item.img}
            alt={`Product ${index + 1}`}
            className="rounded-t-md w-full h-[270px] object-cover"
          />
          <p className="text-black font-semibold text-sm py-2">
            {item.price}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>



    </section>
  );
};

export default HeaderSlider;
