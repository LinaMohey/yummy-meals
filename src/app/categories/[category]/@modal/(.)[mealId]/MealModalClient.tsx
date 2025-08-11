"use client";

import Image from "next/image";
import { UtensilsIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { Meal } from "@/app/types/meals/mealDetails";

type MealModalClientProps = {
  meal: Meal;
  ingredients: string[];
};

export default function MealModalClient({
  meal,
  ingredients,
}: MealModalClientProps) {
  const router = useRouter();

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-lg max-w-4xl w-full overflow-hidden relative">
        <button
          onClick={() => router.back()}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-lg"
        >
          ✕
        </button>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative w-full h-64 md:h-full">
            <Image
              src={meal.strMealThumb}
              alt={meal.strMeal}
              fill
              className="object-cover rounded-l-2xl"
            />
          </div>

          <div className="p-6 overflow-y-auto max-h-[80vh]">
            <h2 className="text-3xl font-bold text-gray-800">{meal.strMeal}</h2>
            <p className="text-sm text-gray-500 mt-1">
              {meal.strCategory} • {meal.strArea}
            </p>

            <div className="mt-6">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-800">
                <UtensilsIcon className="w-5 h-5 text-orange-500" />
                Ingredients
              </h3>
              <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                {ingredients.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-800">
                Instructions
              </h3>
              <p className="mt-2 text-gray-700 leading-relaxed">
                {meal.strInstructions}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
