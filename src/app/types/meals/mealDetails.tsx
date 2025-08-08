export interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  [key: `strIngredient${number}`]: string | null; //bc of array loop to be dynmic
  [key: `strMeasure${number}`]: string | null;
}

export interface MealResponse {
  meals: Meal[] | null;
}
