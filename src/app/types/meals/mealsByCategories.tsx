export type Meal = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
};

export type MealsResponse = {
  meals: Meal[];
};
