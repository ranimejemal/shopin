"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Search, User, ShoppingCart, Heart, Globe, Headphones } from "lucide-react";
import { useAppContext } from "@/context/AppContext";
import { assets } from "@/assets/assets";

const Navbar = () => {
  const { router } = useAppContext();
  const categoriesRef = useRef(null);
  const categoryRefs = useRef([]);
  const dropdownLeftRef = useRef(null);
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const categories = [
    "Catégories",
    "Nouveautés",
    "Sous 5 Jours Ouvrés",
    "Prix de ouf",
    "Vêtements pour femmes",
    "Grandes tailles",
    "Maison & cuisine",
    "Vêtements pour hommes",
    "Sous-vêtements et vêtements de nuit",
    "Enfants",
    "Bijoux et accessoires",
    "Electronique",
    "Sac et bagages",
    "Bébé & maternité",
    "Sports & extérieur",
    "Bricolage",
    "Jouets & jeux",
    "Papeterie & bureau",
    "Animaux de compagnie",
    "Appareils électroménagers",
    "Automobile",
  ];

  const dropdowns = {
    "Catégories": {
      picks: [
        { label: "Tout Parcourir", img: assets.drop1 },
        { label: "Promotions", img: assets.drop2 },
        { label: "Top Ventes", img: assets.drop3 },
      ],
      suggestions: [
        { label: "Tendances", img: assets.drop4 },
        { label: "Nouveautés", img: assets.drop5 },
        { label: "Recommandés", img: assets.drop6 },
      ],
    },
    "Nouveautés": { 
    picks: [
      { label: "Derniers Articles", img: assets.drop1 },
      { label: "Arrivage Aujourd'hui", img: assets.drop2 },
      { label: "Top Nouveaux", img: assets.drop3 },
    ],
    suggestions: [
      { label: "À ne pas manquer", img: assets.drop4 },
      { label: "Tendances 2025", img: assets.drop5 },
      { label: "Sélection Premium", img: assets.drop6 },
    ],
  },

  "Sous 5 Jours Ouvrés": {
    picks: [
      { label: "Livraison Express", img: assets.drop1 },
      { label: "Modes Rapides", img: assets.drop2 },
      { label: "Sélection Prioritaire", img: assets.drop3 },
    ],
    suggestions: [
      { label: "Articles Populaires", img: assets.drop4 },
      { label: "Best Deals", img: assets.drop5 },
      { label: "Top Clients", img: assets.drop6 },
    ],
  },

  "Prix de ouf": {
    picks: [
      { label: "Meilleures Offres", img: assets.drop1 },
      { label: "À -70%", img: assets.drop2 },
      { label: "Bonnes Affaires", img: assets.drop3 },
    ],
    suggestions: [
      { label: "Deals Flash", img: assets.drop4 },
      { label: "Prix Mini", img: assets.drop5 },
      { label: "Petits Prix", img: assets.drop6 },
    ],
  },

  "Vêtements pour femmes": {
    picks: [
      { label: "Robes", img: assets.drop1 },
      { label: "Tops", img: assets.drop2 },
      { label: "Jeans", img: assets.drop3 },
      { label: "Pulls", img: assets.drop4 },
    ],
    suggestions: [
      { label: "Chaussures", img: assets.drop5 },
      { label: "Sacs", img: assets.drop6 },
      { label: "Accessoires", img: assets.drop1 },
      { label: "Sportwear", img: assets.drop2 },
    ],
  },

  "Grandes tailles": {
    picks: [
      { label: "Robes Curve", img: assets.drop1 },
      { label: "Tops Curve", img: assets.drop2 },
      { label: "Pantalons Curve", img: assets.drop3 },
    ],
    suggestions: [
      { label: "Confort", img: assets.drop4 },
      { label: "Casual Chic", img: assets.drop5 },
      { label: "Essentiels", img: assets.drop6 },
    ],
  },

  "Maison & cuisine": {
    picks: [
      { label: "Décoration", img: assets.drop1 },
      { label: "Cuisine", img: assets.drop2 },
      { label: "Rangements", img: assets.drop3 },
    ],
    suggestions: [
      { label: "Salle de bain", img: assets.drop4 },
      { label: "Chambre", img: assets.drop5 },
      { label: "Organisation", img: assets.drop6 },
    ],
  },

  "Vêtements pour hommes": {
    picks: [
      { label: "T-shirts", img: assets.drop1 },
      { label: "Sweats", img: assets.drop2 },
      { label: "Jeans", img: assets.drop3 },
    ],
    suggestions: [
      { label: "Chaussures", img: assets.drop4 },
      { label: "Accessoires", img: assets.drop5 },
      { label: "Sport", img: assets.drop6 },
    ],
  },

  "Sous-vêtements et vêtements de nuit": {
    picks: [
      { label: "Pyjamas", img: assets.drop1 },
      { label: "Lingerie", img: assets.drop2 },
      { label: "Homewear", img: assets.drop3 },
    ],
    suggestions: [
      { label: "Chaussons", img: assets.drop4 },
      { label: "Robes de chambre", img: assets.drop5 },
      { label: "Basiques", img: assets.drop6 },
    ],
  },

  "Enfants": {
    picks: [
      { label: "Vêtements fille", img: assets.drop1 },
      { label: "Vêtements garçon", img: assets.drop2 },
      { label: "Chaussures enfants", img: assets.drop3 },
    ],
    suggestions: [
      { label: "Jouets", img: assets.drop4 },
      { label: "Accessoires enfants", img: assets.drop5 },
      { label: "Été Kids", img: assets.drop6 },
    ],
  },

  "Bijoux et accessoires": {
    picks: [
      { label: "Bagues", img: assets.drop1 },
      { label: "Colliers", img: assets.drop2 },
      { label: "Boucles d'oreilles", img: assets.drop3 },
    ],
    suggestions: [
      { label: "Sacs", img: assets.drop4 },
      { label: "Ceintures", img: assets.drop5 },
      { label: "Accessoires cheveux", img: assets.drop6 },
    ],
  },

  "Electronique": {
    picks: [
      { label: "Smartphones", img: assets.drop1 },
      { label: "Casques", img: assets.drop2 },
      { label: "PC & Laptop", img: assets.drop3 },
    ],
    suggestions: [
      { label: "Gaming", img: assets.drop4 },
      { label: "Caméras", img: assets.drop5 },
      { label: "Drones", img: assets.drop6 },
    ],
  },

  "Sac et bagages": {
    picks: [
      { label: "Sacs à main", img: assets.drop1 },
      { label: "Valises", img: assets.drop2 },
      { label: "Sacs de voyage", img: assets.drop3 },
    ],
    suggestions: [
      { label: "Sacs à dos", img: assets.drop4 },
      { label: "Petite maroquinerie", img: assets.drop5 },
      { label: "Bagages cabine", img: assets.drop6 },
    ],
  },

  "Bébé & maternité": {
    picks: [
      { label: "Vêtements bébé", img: assets.drop1 },
      { label: "Maternité", img: assets.drop2 },
      { label: "Puériculture", img: assets.drop3 },
    ],
    suggestions: [
      { label: "Biberons", img: assets.drop4 },
      { label: "Chaises bébé", img: assets.drop5 },
      { label: "Jouets bébé", img: assets.drop6 },
    ],
  },

  "Sports & extérieur": {
    picks: [
      { label: "Sportwear", img: assets.drop1 },
      { label: "Vélos", img: assets.drop2 },
      { label: "Fitness", img: assets.drop3 },
    ],
    suggestions: [
      { label: "Camping", img: assets.drop4 },
      { label: "Randonnée", img: assets.drop5 },
      { label: "Natation", img: assets.drop6 },
    ],
  },

  "Bricolage": {
    picks: [
      { label: "Outils", img: assets.drop1 },
      { label: "Équipements", img: assets.drop2 },
      { label: "Électricité", img: assets.drop3 },
    ],
    suggestions: [
      { label: "Peinture", img: assets.drop4 },
      { label: "Réparation", img: assets.drop5 },
      { label: "Accessoires", img: assets.drop6 },
    ],
  },

  "Jouets & jeux": {
    picks: [
      { label: "Jeux éducatifs", img: assets.drop1 },
      { label: "Figurines", img: assets.drop2 },
      { label: "Jeux créatifs", img: assets.drop3 },
    ],
    suggestions: [
      { label: "Puzzle", img: assets.drop4 },
      { label: "Jeux extérieurs", img: assets.drop5 },
      { label: "Peluches", img: assets.drop6 },
    ],
  },

  "Papeterie & bureau": {
    picks: [
      { label: "Fournitures", img: assets.drop1 },
      { label: "Cahiers", img: assets.drop2 },
      { label: "Stylos", img: assets.drop3 },
    ],
    suggestions: [
      { label: "Rangements bureau", img: assets.drop4 },
      { label: "Accessoires bureau", img: assets.drop5 },
      { label: "Art & dessin", img: assets.drop6 },
    ],
  },

  "Animaux de compagnie": {
    picks: [
      { label: "Accessoires", img: assets.drop1 },
      { label: "Jouets animaux", img: assets.drop2 },
      { label: "Paniers & lits", img: assets.drop3 },
    ],
    suggestions: [
      { label: "Toilettage", img: assets.drop4 },
      { label: "Gamelles", img: assets.drop5 },
      { label: "Dressage", img: assets.drop6 },
    ],
  },

  "Appareils électroménagers": {
    picks: [
      { label: "Cuisine", img: assets.drop1 },
      { label: "Nettoyage", img: assets.drop2 },
      { label: "Soins personnels", img: assets.drop3 },
    ],
    suggestions: [
      { label: "Aspirateurs", img: assets.drop4 },
      { label: "Mixeurs", img: assets.drop5 },
      { label: "Machines à laver", img: assets.drop6 },
    ],
  },

  "Automobile": {
    picks: [
      { label: "Accessoires auto", img: assets.drop1 },
      { label: "Nettoyage auto", img: assets.drop2 },
      { label: "Éclairage", img: assets.drop3 },
    ],
    suggestions: [
      { label: "Entretien", img: assets.drop4 },
      { label: "Sécurité", img: assets.drop5 },
      { label: "Intérieur auto", img: assets.drop6 },
    ],
  },
  };
 const scrollCategories = (direction) => {
    if (!categoriesRef.current) return;
    categoriesRef.current.scrollBy({
      left: direction === "right" ? 200 : -200,
      behavior: "smooth",
    });
  };

  const scrollToCategory = (index) => {
    if (!categoriesRef.current || !categoryRefs.current[index]) return;
    const el = categoryRefs.current[index];
    el.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  };

  return (
    <div className="relative z-50 bg-white shadow-md border-b border-gray-200">
      {/* TOP SECTION */}
      <div className="flex items-center justify-between px-6 md:px-8 lg:px-12 py-4">
        {assets.logo && (
          <Image
            src={assets.logo}
            alt="logo"
            className="cursor-pointer w-32 md:w-48"
            onClick={() => router.push("/")}
          />
        )}
        {/* SEARCH */}
        <div className="hidden md:flex flex-1 max-w-2xl mx-8">
          <div className="relative flex w-full items-center">
            <input
              type="text"
              placeholder="Rechercher..."
              className="flex-1 border-2 border-black py-2 pl-4 pr-12 text-sm focus:outline-none"
            />
            <button className="absolute top-0 bottom-0 right-0 flex items-center justify-center bg-black px-3">
              <Search className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        {/* ICONS */}
        <div className="hidden md:flex items-center gap-6">
          <User className="w-6 h-6 cursor-pointer" />
          <CartIcon />
          <HeartIcon count={30} />
          <Headphones className="w-6 h-6 cursor-pointer" />
          <Globe className="w-6 h-6 cursor-pointer" />
        </div>
      </div>

      {/* CATEGORIES BAR */}
      <div className="relative" onMouseLeave={() => setHoveredCategory(null)}>
        <div className="relative flex items-center border-t">
          <ScrollButton direction="left" onClick={() => scrollCategories("left")} />
          <div
            ref={categoriesRef}
            className="flex-1 flex items-center gap-6 px-12 py-3 overflow-x-auto whitespace-nowrap scrollbar-hide relative"
          >
            {categories.map((cat, i) => (
              <Category
                key={i}
                cat={cat}
                index={i}
                hoveredCategory={hoveredCategory}
                setHoveredCategory={setHoveredCategory}
                categoryRefs={categoryRefs}
              />
            ))}

            {/* HIGHLIGHT */}
            {hoveredCategory && (
              <div
                className="absolute bottom-0 h-1 bg-orange-500 transition-all duration-300"
                style={{
                  width: categoryRefs.current[categories.indexOf(hoveredCategory)]?.offsetWidth || 0,
                  left: categoryRefs.current[categories.indexOf(hoveredCategory)]?.offsetLeft || 0,
                }}
              />
            )}
          </div>
          <ScrollButton direction="right" onClick={() => scrollCategories("right")} />
        </div>

        {/* DROPDOWN */}
        {hoveredCategory && dropdowns[hoveredCategory] && (
          <Dropdown
            hoveredCategory={hoveredCategory}
            dropdown={dropdowns[hoveredCategory]}
            categories={categories}
            scrollToCategory={scrollToCategory}
          />
        )}
      </div>
    </div>
  );
};

// COMPONENTS
const ScrollButton = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    className={`absolute ${direction === "left" ? "left-0" : "right-0"} z-10 h-full px-2 hidden md:flex`}
  >
    <div className="bg-white w-10 h-10 flex items-center justify-center rounded-full hover:scale-110 transition-transform">
      <span className="text-3xl text-gray-800">{direction === "left" ? "‹" : "›"}</span>
    </div>
  </button>
);

const Category = ({ cat, index, hoveredCategory, setHoveredCategory, categoryRefs }) => (
  <div
    ref={el => categoryRefs.current[index] = el}
    onMouseEnter={() => setHoveredCategory(cat)}
    className={`px-2 py-1 text-xs flex items-center gap-1 cursor-pointer rounded ${
      hoveredCategory === cat ? "text-black font-semibold" : "text-gray-600"
    }`}
  >
    <span>{cat}</span>
    {cat === "Catégories" && (
      <span className={`inline-block transition-transform duration-200 ${hoveredCategory === cat ? "rotate-180" : ""}`}>
        ▼
      </span>
    )}
  </div>
);

const Dropdown = ({ hoveredCategory, dropdown, categories, scrollToCategory }) => {
  const leftRef = useRef(null); // Ref for the left list

  const handleCategoryClick = (index) => {
    const el = leftRef.current?.children[index];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "nearest" }); // scroll inside left panel
    }
  };

  return (
    <div className="absolute top-full left-0 w-full bg-white shadow-lg border-t z-50 py-6">
      <div className="flex gap-6 px-6">
        {/* LEFT */}
        <div
          ref={leftRef}
          className="w-56 border-r pr-4 max-h-[420px] overflow-y-auto custom-scrollbar"
        >
          {categories.map((cat, i) => (
            <div
              key={i}
              onMouseEnter={() => handleCategoryClick(i)}
              onClick={() => handleCategoryClick(i)}
              className={`py-2 px-3 flex items-center justify-between text-sm cursor-pointer rounded hover:bg-gray-100 ${
                hoveredCategory === cat ? "bg-gray-200 font-semibold" : ""
              }`}
            >
              {cat} <span className="text-gray-400">›</span>
            </div>
          ))}
        </div>

        {/* MIDDLE */}
        <div className="w-[340px] flex flex-col gap-4 max-h-[420px] overflow-y-auto custom-scrollbar">
          <h3 className="text-sm font-bold text-orange-600 flex items-center gap-2">
            <span className="text-lg">▣</span> PICKS FOR YOU
          </h3>
          <div className="grid grid-cols-3 gap-4">
            <PickCard img={assets.logo} label="View All" />
            {dropdown.picks.map((item, i) => <PickCard key={i} img={item.img} label={item.label} />)}
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex-1 flex flex-col gap-6 max-h-[420px] overflow-y-auto custom-scrollbar">
          <h3 className="text-sm font-bold">YOU MAY ALSO LIKE</h3>
          <div className="grid grid-cols-5 gap-4">
            {dropdown.suggestions.map((item, i) => <PickCard key={i} img={item.img} label={item.label} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

const PickCard = ({ img, label }) => (
  <div className="flex flex-col items-center cursor-pointer">
    <div className="w-20 h-20 rounded-full border overflow-hidden flex items-center justify-center">
      {img && <Image src={img} alt={label} width={80} height={80} className="object-cover" />}
    </div>
    <span className="text-xs mt-1 text-center">{label}</span>
  </div>
);

const CartIcon = () => (
  <div className="relative cursor-pointer">
    <ShoppingCart className="w-6 h-6" />
    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">2</span>
  </div>
);

const HeartIcon = ({ count }) => (
  <div className="relative cursor-pointer">
    <Heart className="w-6 h-6" />
    <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1">{count}</span>
  </div>
);

export default Navbar;