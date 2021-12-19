export class FoodItems {
  //name: string = 'Sample Name';
  //description: string = 'Sample Description';
  id: number=0;
  name: string ='';
  price: number =0;
  description: string ='';
  imageUrl: string ='';
  isPizzaOfTheWeek: boolean =false;
  categoriesId: number =1;
  category: string ='';
  pizzaIngredients: string[] | undefined
}
