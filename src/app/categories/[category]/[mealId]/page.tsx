import { getMealDetails } from "@/app/server/meals/getMealDetails";
import Image from "next/image";
import Link from "next/link";
import { UtensilsIcon } from "lucide-react";

export default async function MealModal({
  params,
}: {
  params: { mealId: string };
}) {
  const meal = await getMealDetails(params.mealId);
  if (!meal) return null;

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient && ingredient.trim()) {
      ingredients.push(`${ingredient} - ${measure || ""}`);
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-lg max-w-4xl w-full overflow-hidden relative">
        <Link
          href="."
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-lg"
        >
          ✕
        </Link>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative w-full h-64 md:h-full">
            <Image
              src={meal.strMealThumb}
              alt={meal.strMeal}
              fill
              className="object-cover rounded-l-2xl"
            />
          </div>

          {/* Content */}
          <div className="p-6 overflow-y-auto max-h-[80vh]">
            <h2 className="text-3xl font-bold text-gray-800">{meal.strMeal}</h2>
            <p className="text-sm text-gray-500 mt-1">
              {meal.strCategory} • {meal.strArea}
            </p>

            {/* Ingredients */}
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

            {/* Instructions */}
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
