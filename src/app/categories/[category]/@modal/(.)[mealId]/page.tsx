import { getMealDetails } from "@/app/server/meals/getMealDetails";
import Image from "next/image";
import Link from "next/link";

export default async function MealModal({
  params,
}: {
  params: Promise<{ mealId: string }>;
}) {
  const { mealId } = await params;
  const meal = await getMealDetails(mealId);

  if (!meal) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl max-w-3xl w-full p-6 relative">
        <Link
          href="/meals"
          replace
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </Link>
        <Image
          src={meal.strMealThumb}
          alt={meal.strMeal}
          width={600}
          height={400}
          className="rounded-lg w-full object-cover"
        />
        <h2 className="text-2xl font-bold mt-4">{meal.strMeal}</h2>
        <p className="text-sm text-gray-500">
          {meal.strCategory} • {meal.strArea}
        </p>
        <p className="mt-4">{meal.strInstructions}</p>
      </div>
    </div>
  );
}
