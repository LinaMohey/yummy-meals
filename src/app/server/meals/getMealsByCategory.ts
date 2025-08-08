import { Meal, MealsResponse } from "../../types/meals/mealsByCategories";

//hena we will fetch the ALL the meals depend on category
export async function getMealsByCategory(category: string): Promise<Meal[]> {
  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${encodeURIComponent(
        category.trim()
      )}`
    );

    if (!res.ok) throw new Error("Failed to fetch meals");
    const data: MealsResponse = await res.json();
    return data.meals;
  } catch (error) {
    console.error(error);
    return [];
  }
}
