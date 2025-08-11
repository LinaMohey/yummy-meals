import { getMealDetails } from "@/app/server/meals/getMealDetails";
import MealModalClient from "./MealModalClient";

export default async function MealModalPage({
  params,
}: {
  params: Promise<{ mealId: string }>;
}) {
  const { mealId } = await params;
  const meal = await getMealDetails(mealId);
  if (!meal) return null;

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient && ingredient.trim()) {
      ingredients.push(`${ingredient} - ${measure || ""}`);
    }
  }

  return <MealModalClient meal={meal} ingredients={ingredients} />;
}
