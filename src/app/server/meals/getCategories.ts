import { Category, CategoryResponse } from "../../types/meals/categories";

//here we will fetch the category itself

export async function getCategoryNames(): Promise<Category[]> {
  try {
    const res = await fetch(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    if (!res) {
      throw new Error("Failed to fetch categories");
    }
    const data: CategoryResponse = await res.json();
    return data.categories;
  } catch (error) {
    console.error(error);
    return [];
  }
}
