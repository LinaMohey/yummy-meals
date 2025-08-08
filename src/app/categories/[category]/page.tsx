import { getMealsByCategory } from "@/app/server/meals/getMealsByCategory";
import Image from "next/image";
import Link from "next/link";

export default async function MealCategory({
  params,
}: {
  params: { category: string };
}) {
  const categoryName = decodeURIComponent(params.category);
  const meals = await getMealsByCategory(categoryName);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900">
            {categoryName} Specials
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Handpicked meals to satisfy your cravings
          </p>
        </header>

        {/* Meals Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {meals?.map((meal) => (
            <Link
              key={meal.idMeal}
              href={`/categories/${categoryName}/${meal.idMeal}`}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative w-full h-48">
                <Image
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  width={300}
                  height={200}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900 line-clamp-1">
                  {meal.strMeal}
                </h3>
                <p className="text-sm text-gray-500">
                  Delicious & freshly made
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
