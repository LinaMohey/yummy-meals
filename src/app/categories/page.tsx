import { getCategoryNames } from "@/app/server/meals/getCategories";
import Image from "next/image";
import Link from "next/link";

const categories = await getCategoryNames();

export default async function Categories() {
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4">
      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center py-6 ">
        <span className="text-orange-500">Hungry?</span> Explore delicious food
        categories and
        <span className="text-orange-500"> satisfy your cravings</span>{" "}
      </h1>

      {/* {/* Grids */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {categories.map((category) => (
          // TODO DYNAMIC <card>
          <Link
            key={category.idCategory}
            href={`/categories/${encodeURIComponent(category.strCategory)}`}
            className="group"
          >
            <div className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className=" overflow-hidden">
                <Image
                  src={category.strCategoryThumb}
                  alt={category.strCategory}
                  width={200}
                  height={200}
                  className="object-coverl group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
                  {category.strCategory}
                </h3>
                <p className="text-sm text-gray-500 line-clamp-3 mt-1">
                  {category.strCategoryDescription}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
