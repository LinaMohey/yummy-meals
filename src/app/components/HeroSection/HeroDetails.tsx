import Image from "next/image";
import React from "react";

export const HeroDetails: React.FC = () => {
  return (
    <div className="relative w-full h-[80vh] flex items-center justify-center text-center">
      <Image
        src="/ready-meals.webp"
        alt="Delicious Meals"
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className="relative z-10 bg-black/50 p-8 rounded-lg text-white max-w-2xl">
        <h2 className="text-2xl font-bold mb-4">Discover Amazing Recipes</h2>
        <p className="text-lg">
          Explore thousands of delicious meals from around the world and find
          your next favorite dish.
        </p>
      </div>
    </div>
  );
};
