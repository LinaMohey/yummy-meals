import { Meal } from "../../types/meals/mealDetails";
import { MealResponse } from "../../types/meals/mealDeatilsResponse";

export async function getMealDetails(id: string): Promise<Meal | null> {
  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    if (!res.ok) throw new Error("Failed to fetch meal details");

    const data: MealResponse = await res.json();
    return data.meals ? data.meals[0] : null;
  } catch (err) {
    console.error(err);
    return null;
  }
}
