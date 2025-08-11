import { getMealDetails } from "@/app/server/meals/getMealDetails";
import Image from "next/image";
import { UtensilsIcon } from "lucide-react";
import { Meal } from "@/app/types/meals/mealDetails";

// normal page not modal

export default async function MealDetailsPage({
  params,
}: {
  params: Promise<{ mealId: string }>;
}) {
  const { mealId } = await params;
  const meal = await getMealDetails(mealId);

  if (!meal) {
    return <p className="p-6 text-red-500">Meal not found</p>;
  }

  const ingredients: string[] = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = (meal as Meal)[`strIngredient${i}`];
    const measure = (meal as Meal)[`strMeasure${i}`];
    if (ingredient && ingredient.trim()) {
      ingredients.push(`${ingredient} - ${measure || ""}`);
    }
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="relative w-full h-96">
          <Image
            src={meal.strMealThumb}
            alt={meal.strMeal}
            fill
            className="object-cover rounded-xl"
          />
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mt-8">
          {meal.strMeal}
        </h1>
        <p className="text-gray-500 mt-2">
          {meal.strCategory} • {meal.strArea}
        </p>

        <section className="mt-6">
          <h2 className="flex items-center gap-2 text-2xl font-semibold text-gray-800">
            <UtensilsIcon className="w-6 h-6 text-orange-500" />
            Ingredients
          </h2>
          <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
            {ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">Instructions</h2>
          <p className="mt-2 text-gray-700 leading-relaxed">
            {meal.strInstructions}
          </p>
        </section>
      </div>
    </div>
  );
}
