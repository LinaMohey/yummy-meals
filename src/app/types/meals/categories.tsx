// let's keep it one file per type 
export type Category = {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
};

export type CategoryResponse = {
  categories: Category[];
};
